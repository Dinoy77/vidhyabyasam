import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EnquiryModal from '../components/EnquiryModal';
import { blogArticles } from '../data/blogData';

export default function BlogArticle() {
  const { slug } = useParams();
  const article = blogArticles[slug];
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div style={styles.pageContainer}>
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

const styles = {
  pageContainer: { backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' },
  layoutWrapper: { maxWidth: '1200px', margin: '0 auto', padding: '40px 24px', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' },
  mainContent: { flex: '1 1 700px', backgroundColor: '#fff', padding: '40px' },
  sidebar: { flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '30px', position: 'sticky', top: '100px' },
  header: { textAlign: 'center', marginBottom: '40px' },
  categoryBadge: { display: 'inline-block', padding: '6px 14px', backgroundColor: '#fff', color: '#2563eb', borderRadius: '20px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' },
  title: { fontFamily: 'Playfair Display, serif', fontSize: '38px', color: '#0f172a', lineHeight: '1.2', marginBottom: '20px', fontWeight: '800' },
  metaData: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', color: '#64748b', fontSize: '14px', fontWeight: '500', flexWrap: 'wrap' },
  dot: { color: '#cbd5e1' },
  author: { color: '#0f172a', fontWeight: '600' },
  imageWrapper: { width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', marginBottom: '40px' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  contentBody: { fontSize: '17px', color: '#334155', lineHeight: '1.8' },
  section: { marginBottom: '32px' },
  heading: { fontSize: '24px', fontWeight: '700', color: '#0f172a', marginBottom: '16px', marginTop: '40px' },
  paragraph: { marginBottom: '16px' },
  list: { paddingLeft: '24px', marginBottom: '16px' },
  listItem: { marginBottom: '12px' },
  ctaBox: { backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '16px', padding: '32px', textAlign: 'center', marginTop: '40px' },
  ctaTitle: { fontSize: '22px', fontWeight: '800', color: '#166534', marginBottom: '12px' },
  ctaText: { fontSize: '16px', color: '#15803d', marginBottom: '24px' },
  ctaButtonGroup: { display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' },
  ctaButton: { display: 'inline-block', backgroundColor: '#16a34a', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', transition: 'background-color 0.2s' },
  ctaEnquireButton: { backgroundColor: '#fff', color: '#16a34a', border: '2px solid #16a34a', padding: '10px 28px', borderRadius: '8px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s' },
  promoWidget: { backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(37, 99, 235, 0.75) 100%), url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '16px', padding: '40px 24px', textAlign: 'center', color: '#fff', boxShadow: '0 15px 30px rgba(37, 99, 235, 0.25)', border: '1px solid rgba(255, 255, 255, 0.1)' },
  promoIcon: { marginBottom: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.4))' },
  promoTitle: { fontSize: '22px', fontWeight: '800', marginBottom: '12px', lineHeight: '1.2', textShadow: '0 2px 4px rgba(0,0,0,0.5)' },
  promoText: { fontSize: '15px', opacity: '0.95', marginBottom: '28px', lineHeight: '1.6', textShadow: '0 1px 2px rgba(0,0,0,0.5)' },
  promoButton: { backgroundColor: '#fff', color: '#1e3a8a', width: '100%', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '16px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' },
  widgetBox: { backgroundColor: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' },
  widgetTitle: { fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '20px', borderBottom: '2px solid #f1f5f9', paddingBottom: '12px' },
  relatedList: { display: 'flex', flexDirection: 'column', gap: '16px' },
  relatedItem: { display: 'flex', gap: '12px', textDecoration: 'none', alignItems: 'center' },
  relatedImage: { width: '70px', height: '70px', borderRadius: '10px', objectFit: 'cover' },
  relatedContent: { display: 'flex', flexDirection: 'column', gap: '4px' },
  relatedTitle: { fontSize: '14px', fontWeight: '700', color: '#1e293b', lineHeight: '1.4' },
  readMore: { fontSize: '12px', fontWeight: '700', color: '#3b82f6' },
};