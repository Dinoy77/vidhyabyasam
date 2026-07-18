import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Or 'react-helmet' depending on your setup
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EnquiryModal from '../components/EnquiryModal';
import { blogArticles } from '../data/blogData';
import { seoConfigurations } from '../data/seoData'; // Adjust path if necessary

// --- CUSTOM HOOK FOR RESPONSIVENESS ---
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}
// --------------------------------------

export default function BlogArticle() {
  const { slug } = useParams();
  const article = blogArticles[slug];
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const isMobile = useMediaQuery('(max-width: 768px)');
  const styles = getStyles(isMobile);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div style={styles.pageContainer}>
        <Navbar />
        <div style={{ textAlign: 'center', padding: '100px', minHeight: '60vh' }}>
          <h2>Article not found!</h2>
          <Link to="/" style={{ color: '#2563eb' }}>Go back home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // --- NEW LOGIC: Dynamic Related Articles ---
  // 1. Get all articles except the one currently being read
  const allOtherArticles = Object.keys(blogArticles)
    .filter(key => key !== slug)
    .map(key => ({
      slug: key,
      ...blogArticles[key]
    }));

  // 2. Prioritize articles in the exact same category
  const sameCategoryArticles = allOtherArticles.filter(a => a.category === article.category);

  // 3. If there are less than 3 in the same category, fill the rest with other topics
  let relatedArticlesRaw = [...sameCategoryArticles];
  if (relatedArticlesRaw.length < 3) {
    const remainingArticles = allOtherArticles.filter(a => a.category !== article.category);
    relatedArticlesRaw = [...relatedArticlesRaw, ...remainingArticles].slice(0, 3);
  } else {
    relatedArticlesRaw = relatedArticlesRaw.slice(0, 3); // Max 3 articles
  }

  // 4. Format them for the UI
  const dynamicTrendingArticles = relatedArticlesRaw.map(item => ({
    title: item.title,
    image: item.image,
    link: `/blog/${item.slug}` // Standardized routing
  }));

  const generalEnquiryContext = {
    id: "general-blog-enquiry",
    name: "Enquire With Our Experts",
    city: "Kerala",
    region: "South India",
    rating: "5.0",
    type: "Free Admission Guidance",
    fees: "Zero Consultancy Fees",
    courses: ["B.Tech", "MBBS", "BCA / MCA", "B.Arch", "Other"]
  };

  // Extract SEO Data dynamically
  const seoData = seoConfigurations.dynamicBlog(article, slug);

  return (
    <div style={styles.pageContainer}>
      {/* INJECT SEO METADATA */}
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={`https://vidyabhyasam.com${seoData.url}`} />
        <meta property="og:type" content="article" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(seoData.schemaData)}
        </script>
      </Helmet>

      <Navbar />

      <div style={styles.layoutWrapper}>
        {/* Main Article Content */}
        <article style={styles.mainContent}>
          <header style={styles.header}>
            <div style={styles.categoryBadge}>{article.category}</div>
            <h1 style={styles.title}>{article.title}</h1>
            <div style={styles.metaData}>
              <span style={styles.author}>By {article.author}</span>
              <span style={styles.dot}>•</span>
              <span style={styles.date}>{article.date}</span>
              <span style={styles.dot}>•</span>
              <span style={styles.readTime}>{article.readTime}</span>
            </div>
          </header>

          <div style={styles.imageWrapper}>
            <img src={article.image} alt={article.title} style={styles.image} />
          </div>

          <div style={styles.contentBody}>
            {article.content.map((section, index) => (
              <div key={index} style={styles.section}>
                {section.heading && <h2 style={styles.heading}>{section.heading}</h2>}
                <p style={styles.paragraph}>{section.text}</p>
                {section.list && (
                  <ul style={styles.list}>
                    {section.list.map((item, i) => (
                      <li key={i} style={styles.listItem}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {article.cta && (
            <div style={styles.ctaBox}>
              <h3 style={styles.ctaTitle}>{article.cta.title}</h3>
              <p style={styles.ctaText}>{article.cta.description}</p>
              <div style={styles.ctaButtonGroup}>
                <Link to={article.cta.link} style={styles.ctaButton}>{article.cta.buttonText}</Link>
                <button style={styles.ctaEnquireButton} onClick={() => setIsModalOpen(true)}>Enquire Now</button>
              </div>
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.promoWidget}>
            <div style={styles.promoIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3 style={styles.promoTitle}>Need Admission Guidance?</h3>
            <p style={styles.promoText}>Talk to our experts today and secure your seat in top colleges.</p>
            <button style={styles.promoButton} onClick={() => setIsModalOpen(true)}>Enquire Now</button>
          </div>

          <div style={styles.widgetBox}>
            {/* Dynamically changes based on whether matches were found */}
            <h3 style={styles.widgetTitle}>
              {sameCategoryArticles.length > 0 ? `More in ${article.category}` : "Trending Topics"}
            </h3>
            
            <div style={styles.relatedList}>
              {dynamicTrendingArticles.map((item, i) => (
                <Link key={i} to={item.link} style={styles.relatedItem}>
                  <img src={item.image} alt="Thumb" style={styles.relatedImage} />
                  <div style={styles.relatedContent}>
                    <h4 style={styles.relatedTitle}>{item.title}</h4>
                    <span style={styles.readMore}>Read Now →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <Footer />

      {isModalOpen && <EnquiryModal college={generalEnquiryContext} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

// ---------------- Dynamic Responsive Styles ---------------- //
const getStyles = (isMobile) => ({
  pageContainer: { 
    backgroundColor: '#fff', 
    minHeight: '100vh', 
    fontFamily: 'DM Sans, sans-serif' 
  },
  layoutWrapper: { 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: isMobile ? '80px 16px 40px 16px' : '100px 24px 40px 24px', 
    display: 'flex', 
    gap: isMobile ? '32px' : '40px', 
    flexDirection: isMobile ? 'column' : 'row', 
    alignItems: 'flex-start' 
  },
  mainContent: { 
    flex: '1 1 100%', 
    width: '100%', 
    backgroundColor: '#fff', 
    padding: isMobile ? '0' : '20px 40px 40px 0' 
  },
  sidebar: { 
    flex: isMobile ? '1 1 100%' : '0 0 340px', 
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '30px', 
    position: isMobile ? 'static' : 'sticky', 
    top: '100px' 
  },
  header: { 
    textAlign: 'center', 
    marginBottom: isMobile ? '24px' : '40px' 
  },
  categoryBadge: { 
    display: 'inline-block', 
    padding: '6px 14px', 
    backgroundColor: '#eff6ff', 
    color: '#2563eb', 
    borderRadius: '20px', 
    fontSize: '12px', 
    fontWeight: '700', 
    textTransform: 'uppercase', 
    letterSpacing: '1px', 
    marginBottom: '16px' 
  },
  title: { 
    fontFamily: 'Playfair Display, serif', 
    fontSize: isMobile ? '28px' : '38px', 
    color: '#0f172a', 
    lineHeight: '1.2', 
    marginBottom: '20px', 
    fontWeight: '800' 
  },
  metaData: { 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: '12px', 
    color: '#64748b', 
    fontSize: isMobile ? '13px' : '14px', 
    fontWeight: '500', 
    flexWrap: 'wrap' 
  },
  dot: { color: '#cbd5e1' },
  author: { color: '#0f172a', fontWeight: '600' },
  imageWrapper: { 
    width: '100%', 
    height: isMobile ? '240px' : '400px', 
    borderRadius: '16px', 
    overflow: 'hidden', 
    marginBottom: isMobile ? '24px' : '40px' 
  },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  contentBody: { 
    fontSize: isMobile ? '16px' : '17px', 
    color: '#334155', 
    lineHeight: '1.8' 
  },
  section: { marginBottom: '32px' },
  heading: { 
    fontSize: isMobile ? '20px' : '24px', 
    fontWeight: '700', 
    color: '#0f172a', 
    marginBottom: '16px', 
    marginTop: '40px' 
  },
  paragraph: { marginBottom: '16px' },
  list: { paddingLeft: '24px', marginBottom: '16px' },
  listItem: { marginBottom: '12px' },
  ctaBox: { 
    backgroundColor: '#f0fdf4', 
    border: '1px solid #bbf7d0', 
    borderRadius: '16px', 
    padding: isMobile ? '24px 16px' : '32px', 
    textAlign: 'center', 
    marginTop: '40px' 
  },
  ctaTitle: { 
    fontSize: isMobile ? '20px' : '22px', 
    fontWeight: '800', 
    color: '#166534', 
    marginBottom: '12px' 
  },
  ctaText: { 
    fontSize: isMobile ? '15px' : '16px', 
    color: '#15803d', 
    marginBottom: '24px' 
  },
  ctaButtonGroup: { 
    display: 'flex', 
    flexDirection: isMobile ? 'column' : 'row', 
    justifyContent: 'center', 
    gap: '16px' 
  },
  ctaButton: { 
    display: 'block', 
    backgroundColor: '#16a34a', 
    color: '#fff', 
    padding: '12px 28px', 
    borderRadius: '8px', 
    fontWeight: '700', 
    textDecoration: 'none', 
    transition: 'background-color 0.2s',
    width: isMobile ? '100%' : 'auto',
    boxSizing: 'border-box'
  },
  ctaEnquireButton: { 
    backgroundColor: '#fff', 
    color: '#16a34a', 
    border: '2px solid #16a34a', 
    padding: '10px 28px', 
    borderRadius: '8px', 
    fontSize: '16px', 
    fontWeight: '700', 
    cursor: 'pointer', 
    transition: 'all 0.2s',
    width: isMobile ? '100%' : 'auto',
    boxSizing: 'border-box'
  },
  promoWidget: { 
    backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(37, 99, 235, 0.75) 100%), url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80")', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    borderRadius: '16px', 
    padding: '40px 24px', 
    textAlign: 'center', 
    color: '#fff', 
    boxShadow: '0 15px 30px rgba(37, 99, 235, 0.25)', 
    border: '1px solid rgba(255, 255, 255, 0.1)' 
  },
  promoIcon: { 
    marginBottom: '16px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.4))' 
  },
  promoTitle: { 
    fontSize: '22px', 
    fontWeight: '800', 
    marginBottom: '12px', 
    lineHeight: '1.2', 
    textShadow: '0 2px 4px rgba(0,0,0,0.5)' 
  },
  promoText: { 
    fontSize: '15px', 
    opacity: '0.95', 
    marginBottom: '28px', 
    lineHeight: '1.6', 
    textShadow: '0 1px 2px rgba(0,0,0,0.5)' 
  },
  promoButton: { 
    backgroundColor: '#fff', 
    color: '#1e3a8a', 
    width: '100%', 
    border: 'none', 
    padding: '14px', 
    borderRadius: '8px', 
    fontSize: '16px', 
    fontWeight: '800', 
    cursor: 'pointer', 
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)', 
    transition: 'transform 0.2s ease, box-shadow 0.2s ease' 
  },
  widgetBox: { 
    backgroundColor: '#fff', 
    padding: '24px', 
    borderRadius: '16px', 
    border: '1px solid #e2e8f0', 
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' 
  },
  widgetTitle: { 
    fontSize: '18px', 
    fontWeight: '800', 
    color: '#0f172a', 
    marginBottom: '20px', 
    borderBottom: '2px solid #f1f5f9', 
    paddingBottom: '12px' 
  },
  relatedList: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '16px' 
  },
  relatedItem: { 
    display: 'flex', 
    gap: '12px', 
    textDecoration: 'none', 
    alignItems: 'center' 
  },
  relatedImage: { 
    width: '70px', 
    height: '70px', 
    borderRadius: '10px', 
    objectFit: 'cover' 
  },
  relatedContent: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '4px' 
  },
  relatedTitle: { 
    fontSize: '14px', 
    fontWeight: '700', 
    color: '#1e293b', 
    lineHeight: '1.4' 
  },
  readMore: { 
    fontSize: '12px', 
    fontWeight: '700', 
    color: '#3b82f6' 
  },
});