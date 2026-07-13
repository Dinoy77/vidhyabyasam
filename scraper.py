import os
import re
import json
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from newspaper import Article, Config  # <-- 1. IMPORTING YOUR ADVANCED SCRAPING ENGINE!

# ==========================================
# 1. CONFIGURATION & STRICT STUDENT QUERIES
# ==========================================
RSS_URL = (
    "https://news.google.com/rss/search?q="
    "(KEAM+OR+TNEA+OR+EAMCET+OR+COMEDK+OR+KCET+OR+NIMHANS+OR+ICET+OR+NEET+OR+JEE+OR+NET+OR+GATE+OR+JoSAA)"
    "+(allotment+OR+counselling+OR+results+OR+\"answer+key\"+OR+admission+OR+registration+OR+scorecard+OR+cutoff)"
    "+when:7d&hl=en-IN&gl=IN&ceid=IN:en"
)

JSON_FILE_PATH = "src/data/NewsData.json"

POLITICAL_NOISE_BLACKLIST = [
    "protest", "row", "strike", "appoints", "vice chancellor", "vc", "scam", 
    "minister", "court slams", "plea rejected", "clash", "union", "governor", 
    "cabinet", "assembly", "sacked", "bjp", "congress", "cpm", "dmk", "arrest"
]


# ==========================================
# 2. SLUG GENERATOR & SMART FALLBACKS
# ==========================================
def generate_slug(title):
    """
    Exact replica of your React generateSlug function:
    lowercase -> truncate to 32 chars -> replace symbols with hyphens -> trim hyphens
    """
    slug = title.lower()[:32]
    slug = re.sub(r'[^a-z0-9]+', '-', slug)
    slug = re.sub(r'(^-|-$)+', '', slug)
    return slug


def get_default_image_for_category(title, courses):
    """
    Returns a specialized, high-resolution educational placeholder based on the exam category.
    """
    lower_title = title.lower()
    courses_str = " ".join(courses).lower()
    
    # Medical, Nursing & Paramedical
    if any(kw in lower_title or kw in courses_str for kw in ["neet", "mbbs", "bds", "nursing", "pharm", "medical", "nimhans", "ayush"]):
        return "https://t3.ftcdn.net/jpg/05/74/27/88/360_F_574278839_xIZoXlQS8fnbf65nhwfFpGa6UKVAEbl6.jpg"
    # Engineering & Architecture
    elif any(kw in lower_title or kw in courses_str for kw in ["jee", "b.tech", "b.e", "engineering", "gate", "tnea", "comedk", "kcet"]):
        return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80"
    # Management & Law
    elif any(kw in lower_title or kw in courses_str for kw in ["mba", "mca", "icet", "law", "ll.b", "aibe", "management"]):
        return "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
    # Results, Answer Keys & Scorecards
    elif any(kw in lower_title or kw in courses_str for kw in ["result", "scorecard", "answer key", "omr", "rank", "say exam", "plus two"]):
        return "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80"
    # General Campus Fallback
    else:
        return "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=80"


# ==========================================
# 3. COMBINED IMAGE & MULTI-LAYER TEXT SCRAPER
# ==========================================
def fetch_article_content(url, title="", courses=None, action_type="counselling updates"):
    """
    Attempts to scrape BOTH the Hero Image and the real article summary from the news publisher.
    If blocked by Cloudflare/anti-bot systems, uses a Dynamic Headline Synthesizer
    to guarantee that every single description is 100% unique.
    """
    if courses is None:
        courses = []
        
    fallback_image = get_default_image_for_category(title, courses)
    
    # ---------------------------------------------------------
    # DYNAMIC HEADLINE SYNTHESIZER (FALLBACK TEXT)
    # Generates a unique paragraph from the exact headline text
    # so even blocked articles never have identical descriptions!
    # ---------------------------------------------------------
    clean_title = title.strip()
    course_list = ", ".join(courses[:2]) if courses else "Higher Education"
    
    if "allotment" in clean_title.lower():
        unique_fallback_desc = (
            f"Official seat allotment update regarding {clean_title}. The examination authority has officially published the "
            f"latest provisional allocation listings for {course_list} candidates. Students must immediately log into the "
            f"candidate portal using their application credentials to check their assigned institute, review fee remittance "
            f"deadlines, and download their official allotment memo before the reporting window closes."
        )
    elif any(kw in clean_title.lower() for kw in ["result", "scorecard", "rank", "mark list"]):
        unique_fallback_desc = (
            f"Results and performance tracking announcement for {clean_title}. The evaluation board has activated the official "
            f"scorecard lookup links for {course_list} aspirants. Candidates are advised to keep their registration number and "
            f"date of birth ready to access their individual rank status, verify qualifying cutoff marks, and print their "
            f"provisional mark sheets for upcoming verification rounds."
        )
    elif any(kw in clean_title.lower() for kw in ["answer key", "omr"]):
        unique_fallback_desc = (
            f"Answer key and response sheet notification concerning {clean_title}. The testing agency has released the provisional "
            f"solutions and candidate OMR sheets online. Aspirants applying for {course_list} can now cross-verify their recorded "
            f"responses against the official key, calculate their estimated scores, and submit formal objections through the "
            f"challenge window within the stipulated deadline."
        )
    elif any(kw in clean_title.lower() for kw in ["date", "extended", "deadline", "schedule"]):
        unique_fallback_desc = (
            f"Critical timeline update regarding {clean_title}. Authorities have issued an official notification modifying the "
            f"operational schedule and deadlines for {course_list} admissions. Applicants must strictly note these revised dates "
            f"for option registration, document uploading, and fee payment to ensure their candidature is not rejected during "
            f"the final processing phase."
        )
    else:
        unique_fallback_desc = (
            f"Official institutional release regarding {clean_title}. This major advisory impacts candidates participating in the "
            f"current admission cycle for {course_list}. Students and parents are instructed to review the full notification via "
            f"the official portal to ensure complete compliance with updated eligibility criteria and regulatory guidelines."
        )

    # ---------------------------------------------------------
    # LAYERS 1, 2 & 3: REAL SCRAPING ATTEMPTS
    # ---------------------------------------------------------
    try:
        # Use stealth browser headers to bypass basic publisher firewalls
        config = Config()
        config.browser_user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
        config.request_timeout = 6
        config.follow_meta_refresh = True
        
        article = Article(url, config=config)
        article.download()
        article.parse()
        
        # 1. Grab the real Hero Image
        img_url = fallback_image
        if article.top_image and len(article.top_image) > 10:
            if article.top_image.startswith("http://") or article.top_image.startswith("https://"):
                img_url = article.top_image.strip()
                
        # 2. Try Layer 1: NLP Built-in Summary
        real_desc = ""
        try:
            article.nlp()
            if article.summary and len(article.summary) > 60:
                sentences = article.summary.replace("\n", " ").split(". ")
                real_desc = ". ".join(sentences[:2]).strip() + "."
        except Exception:
            pass
            
        # 3. Try Layer 2: Meta Description Tag (SEO Description written by journalist)
        if not real_desc or len(real_desc) < 60:
            if article.meta_description and len(article.meta_description) > 50:
                real_desc = article.meta_description.strip()
                
        # 4. Try Layer 3: Raw Article Body Text (First clean paragraph)
        if not real_desc or len(real_desc) < 60:
            if article.text and len(article.text) > 100:
                clean_text = article.text.replace("\n", " ").strip()
                real_desc = clean_text[:250].rsplit('.', 1)[0] + '.'
                
        # If we successfully extracted a real summary from the webpage, return it!
        if len(real_desc) > 60 and not "enable javascript" in real_desc.lower():
            print(f"      [Scraped Real Text]: {real_desc[:60]}...")
            return img_url, real_desc
            
        print("      [Site Blocked Scraper -> Using Synthesized Unique Text]")
        return img_url, unique_fallback_desc
        
    except Exception:
        pass
        
    print("      [Connection Timeout -> Using Synthesized Unique Text]")
    return fallback_image, unique_fallback_desc


# ==========================================
# 4. SCRAPING ENGINE
# ==========================================
def fetch_latest_news():
    print("1. Contacting Google News RSS for student action alerts...")
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    try:
        response = requests.get(RSS_URL, headers=headers, timeout=10)
        print(f"2. Google responded with Status Code: {response.status_code}")
    except Exception as e:
        print(f"❌ Failed to reach Google News: {e}")
        return []
    
    soup = BeautifulSoup(response.content, features="html.parser")
    items = soup.findAll('item')
    print(f"3. Found {len(items)} total raw articles matching action criteria.")
    
    new_articles = []
    
    for idx, item in enumerate(items):
        if len(new_articles) >= 10:
            break
            
        title_text = item.title.text.split(" - ")[0].strip()
        link_text = item.link.text.strip()
        pub_date = datetime.now().strftime("%Y-%m-%d")
        
        lower_title = title_text.lower()
        
        # Skip political or administrative noise
        if any(noise in lower_title for noise in POLITICAL_NOISE_BLACKLIST):
            continue

        print(f"   -> Processing Alert: {title_text[:45]}...")
        
        # Dynamic State & Course mapping
        state = "South India"
        courses = ["B.Tech", "B.E"]
        
        if any(kw in title_text for kw in ["NEET", "NTA", "Medical Admission"]):
            state = "All India"
            courses = ["MBBS", "BDS", "BAMS", "BHMS"]
        elif any(kw in title_text for kw in ["JEE", "JoSAA", "IIT", "NIT"]):
            state = "All India"
            courses = ["B.Tech", "B.Arch", "Dual Degree"]
        elif any(kw in title_text for kw in ["NET", "UGC", "CSIR"]):
            state = "All India"
            courses = ["Ph.D. Eligibility", "Junior Research Fellowship (JRF)"]
        elif "GATE" in title_text:
            state = "All India"
            courses = ["M.Tech", "Ph.D."]
        elif any(kw in title_text for kw in ["KEAM", "LBS", "Kerala", "DHSE", "Plus Two", "SAY"]):
            state = "Kerala"
            courses = ["B.Tech", "B.Pharm", "Plus Two (Science)"]
        elif any(kw in title_text for kw in ["TNEA", "Tamil Nadu", "Anna Univ"]):
            state = "Tamil Nadu"
        elif any(kw in title_text for kw in ["EAMCET", "EAPCET", "ICET", "AP ", "TS ", "Telangana"]):
            state = "Andhra Pradesh" if "AP" in title_text else "Telangana"
            courses = ["MBA", "MCA"] if "ICET" in title_text else ["B.Tech", "B.Pharm"]
        elif any(kw in title_text for kw in ["COMEDK", "KCET", "Karnataka", "KEA", "NIMHANS"]):
            state = "Karnataka"
            if "NIMHANS" in title_text:
                courses = ["B.Sc Nursing", "Allied Health Sciences"]

        # Dynamic Tag and UI Colors
        tag = "LIVE UPDATE"
        color = "#1B6CA8"
        bg = "#EBF5FF"
        icon = "🎓"
        is_notification = False
        action_type = "counselling data tracking"
        
        if "allotment" in lower_title:
            tag = "Allotment Out"
            color = "#059669"
            bg = "#ECFDF5"
            icon = "🎯"
            is_notification = True
            action_type = "provisional seat allotment configuration charts"
        elif any(kw in lower_title for kw in ["result", "scorecard", "mark list", "rank list"]):
            tag = "Result Live"
            color = "#059669"
            bg = "#ECFDF5"
            icon = "📊"
            is_notification = True
            action_type = "official examination results scorecards"
        elif any(kw in lower_title for kw in ["answer key", "omr"]):
            tag = "Answer Key Out"
            color = "#D97706"
            bg = "#FEF3C7"
            icon = "📝"
            is_notification = True
            action_type = "provisional answer key evaluation scripts"
        elif any(kw in lower_title for kw in ["counselling", "option", "choice", "registration", "seat matrix"]):
            tag = "Counselling"
            color = "#7C3AED"
            bg = "#F5F0FF"
            icon = "🖥️"
            action_type = "web option entry configurations and portal registrations"
        elif any(kw in lower_title for kw in ["date", "extended", "deadline", "soon", "imminent", "alert"]):
            tag = "Urgent Alert"
            color = "#DC2626"
            bg = "#FFF0F0"
            icon = "🚨"
            is_notification = True
            action_type = "critical timeline modifications and absolute deadline warnings"

        # FETCH BOTH REAL IMAGE AND REAL UNIQUE DESCRIPTION IN ONE FAST REQUEST!
        real_image_url, real_description = fetch_article_content(link_text, title_text, courses, action_type)

        article_obj = {
            "id": int(datetime.now().strftime("%y%m%d%H%M")) + idx,
            "icon": icon,
            "color": color,
            "bg": bg,
            "tag": tag,
            "title": title_text[:95],
            "isNotification": is_notification,
            "date": "Action Required Now",
            "publishedAt": pub_date,
            "image": real_image_url,
            "description": real_description,  # <-- 2. GUARANTEED UNIQUE DESCRIPTION!
            "eligibility": f"Registered entrance exam aspirants updating dynamic {action_type} for current session criteria evaluation.",
            "applyLink": link_text,
            "courses": courses,
            "state": state
        }
        new_articles.append(article_obj)
        
    return new_articles


# ==========================================
# 5. STORAGE & DEDUPLICATION ENGINE
# ==========================================
def append_to_json_file(new_articles, file_path=JSON_FILE_PATH):
    existing_data = []
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    
    if os.path.exists(file_path):
        try:
            with open(file_path, "r", encoding="utf-8") as file:
                existing_data = json.load(file)
                if not isinstance(existing_data, list):
                    existing_data = []
        except json.JSONDecodeError:
            print(f"⚠️ Warning: '{file_path}' corrupted. Starting fresh.")
            existing_data = []

    existing_slugs = {generate_slug(item.get("title", "")) for item in existing_data}
    
    added_count = 0
    for article in new_articles:
        new_slug = generate_slug(article["title"])
        
        if new_slug not in existing_slugs and len(new_slug) > 3:
            existing_data.insert(0, article)
            existing_slugs.add(new_slug)
            added_count += 1
        else:
            print(f"   [Skipped Duplicate]: {article['title'][:40]}...")

    if added_count > 0:
        with open(file_path, "w", encoding="utf-8") as file:
            json.dump(existing_data, file, indent=2, ensure_ascii=False)
        print(f"\n✅ Success! Appended {added_count} highly targeted student utilities. Total items: {len(existing_data)}")
    else:
        print(f"\nℹ️ No new specific student alerts found today.")


if __name__ == "__main__":
    print("--- Starting Vidyabhyasam Student News Scraper ---")
    scraped_news = fetch_latest_news()
    if scraped_news:
        append_to_json_file(scraped_news, file_path=JSON_FILE_PATH)
    print("--- Scraping Session Finished ---")