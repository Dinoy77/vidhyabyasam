import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogArticles } from '../data/blogData'; 

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

const allBlogsArray = Object.keys(blogArticles).map(slug => ({
  slug, 
  ...blogArticles[slug] 
}));

// Extract unique categories dynamically
const allCategories = ['All', ...new Set(allBlogsArray.map(blog => blog.category))];

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;
  
  const isMobile = useMediaQuery('(max-width: 768px)');
  const styles = getStyles(isMobile);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const filteredBlogs = useMemo(() => {
    return allBlogsArray.filter(blog => {
      const safeTitle = (blog.title || '').toLowerCase();
      const search = searchTerm.toLowerCase();

      const matchesSearch = safeTitle.includes(search);
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: isMobile ? 300 : 400, behavior: 'smooth' });
  };

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.categoryBadge}>Insights & Updates</span>
          <h1 style={styles.mainTitle}>The Admissions Blog</h1>
          <p style={styles.subtitle}>
            Expert guidance, career comparisons, and college admission strategies.
          </p>

          <div style={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Search articles, guides, or news..." 
              style={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div style={styles.pillWrapper}>
            {allCategories.map(cat => (
              <button 
                key={cat}
                style={{
                  ...styles.filterPill,
                  ...(selectedCategory === cat ? styles.activePill : {})
                }}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main style={styles.mainContent}>
        {currentBlogs.length > 0 ? (
          <>
            <div style={styles.blogGrid}>
              {currentBlogs.map((blog) => (
                <article key={blog.slug} style={styles.blogCard}>
                  <Link to={`/blog/${blog.slug}`} style={styles.imageBox}>
                    <img src={blog.image} alt={blog.title} style={styles.blogImage} />
                    <div style={styles.imageBadge}>{blog.category}</div>
                  </Link>

                  <div style={styles.cardContent}>
                    <div style={styles.metaData}>
                      <span>📅 {blog.date}</span>
                      <span style={styles.dot}>•</span>
                      <span>⏱️ {blog.readTime}</span>
                    </div>
                    
                    <Link to={`/blog/${blog.slug}`} style={styles.blogLink}>
                      <h2 style={styles.blogTitle}>{blog.title}</h2>
                    </Link>
                    
                    <Link to={`/blog/${blog.slug}`} style={styles.readMoreBtn}>
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {totalPages > 1 && (
              <div style={styles.paginationContainer}>
                <button 
                  style={{ ...styles.pageBtn, ...(currentPage === 1 ? styles.pageBtnDisabled : {}) }}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  ← Prev
                </button>
                <span style={styles.pageIndicator}>
                  Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
                </span>
                <button 
                  style={{ ...styles.pageBtn, ...(currentPage === totalPages ? styles.pageBtnDisabled : {}) }}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next →
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={styles.noResults}>
            <p>No articles found matching your criteria.</p>
            <button style={styles.clearBtn} onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}>
              Clear Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
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
  heroHeader: { 
    backgroundColor: '#f8fafc', 
    // Increased top padding to account for fixed navbar
    padding: isMobile ? '100px 16px 40px' : '120px 24px 60px', 
    textAlign: 'center', 
    borderBottom: '1px solid #e2e8f0' 
  },
  heroContent: { 
    maxWidth: '800px', 
    margin: '0 auto' 
  },
  categoryBadge: { 
    display: 'inline-block', 
    padding: '6px 14px', 
    backgroundColor: '#eff6ff', 
    color: '#2563eb', 
    borderRadius: '20px', 
    fontSize: '13px', 
    fontWeight: '700', 
    textTransform: 'uppercase', 
    letterSpacing: '1px', 
    marginBottom: '20px' 
  },
  mainTitle: { 
    fontFamily: 'Playfair Display, serif', 
    fontSize: isMobile ? '32px' : '44px', 
    color: '#0f172a', 
    lineHeight: '1.2', 
    marginBottom: '16px', 
    fontWeight: '800' 
  },
  subtitle: { 
    fontSize: isMobile ? '16px' : '18px', 
    color: '#64748b', 
    fontWeight: '500', 
    marginBottom: '30px',
    padding: isMobile ? '0 10px' : '0'
  },
  searchContainer: { 
    maxWidth: '600px', 
    margin: '0 auto 24px' 
  },
  searchInput: { 
    width: '100%', 
    boxSizing: 'border-box',
    padding: isMobile ? '14px 20px' : '16px 24px', 
    fontSize: '16px', 
    borderRadius: '50px', 
    border: '2px solid #e2e8f0', 
    outline: 'none', 
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)', 
    transition: 'all 0.3s ease' 
  },
  pillWrapper: { 
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    gap: '10px' 
  },
  filterPill: { 
    fontFamily: 'DM Sans, sans-serif',
    padding: isMobile ? '6px 14px' : '8px 18px', 
    backgroundColor: '#fff', 
    color: '#334155', 
    border: '1px solid #cbd5e1', 
    borderRadius: '30px', 
    fontSize: isMobile ? '13px' : '14px', 
    fontWeight: '600', 
    cursor: 'pointer', 
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap'
  },
  activePill: { 
    backgroundColor: '#2563eb', 
    color: '#ffffff', 
    border: '1px solid #2563eb' 
  },
  mainContent: { 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: isMobile ? '40px 16px' : '60px 24px' 
  },
  blogGrid: { 
    display: 'grid', 
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(340px, 1fr))', 
    gap: isMobile ? '24px' : '40px' 
  },
  blogCard: { 
    backgroundColor: '#fff', 
    borderRadius: '16px', 
    overflow: 'hidden', 
    border: '1px solid #e2e8f0', 
    display: 'flex', 
    flexDirection: 'column', 
    transition: 'box-shadow 0.3s ease' 
  },
  imageBox: { 
    position: 'relative', 
    height: isMobile ? '200px' : '240px', 
    display: 'block' 
  },
  blogImage: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover' 
  },
  imageBadge: { 
    position: 'absolute', 
    top: '16px', 
    left: '16px', 
    backgroundColor: 'rgba(255,255,255,0.95)', 
    color: '#2563eb', 
    padding: '6px 12px', 
    borderRadius: '8px', 
    fontSize: '12px', 
    fontWeight: '700', 
    backdropFilter: 'blur(4px)' 
  },
  cardContent: { 
    padding: isMobile ? '20px' : '24px', 
    display: 'flex', 
    flexDirection: 'column', 
    flexGrow: 1 
  },
  metaData: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px', 
    fontSize: '13px', 
    color: '#64748b', 
    fontWeight: '600', 
    marginBottom: '12px' 
  },
  dot: { color: '#cbd5e1' },
  blogLink: { 
    textDecoration: 'none', 
    color: 'inherit', 
    flexGrow: 1 
  },
  blogTitle: { 
    fontFamily: 'Playfair Display, serif', 
    fontSize: isMobile ? '20px' : '22px', 
    fontWeight: '800', 
    color: '#0f172a', 
    lineHeight: '1.3', 
    marginBottom: '16px' 
  },
  readMoreBtn: { 
    display: 'inline-block', 
    fontSize: '14px', 
    fontWeight: '700', 
    color: '#2563eb', 
    textDecoration: 'none', 
    marginTop: 'auto' 
  },
  noResults: { 
    textAlign: 'center', 
    padding: isMobile ? '40px 20px' : '60px', 
    color: '#64748b', 
    backgroundColor: '#f8fafc', 
    borderRadius: '16px', 
    border: '1px solid #e2e8f0' 
  },
  clearBtn: { 
    marginTop: '16px', 
    padding: '10px 20px', 
    borderRadius: '8px', 
    backgroundColor: '#0f172a', 
    color: '#fff', 
    border: 'none', 
    fontWeight: '600', 
    cursor: 'pointer' 
  },
  paginationContainer: { 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: isMobile ? '12px' : '24px', 
    marginTop: isMobile ? '30px' : '40px', 
    paddingTop: '30px', 
    borderTop: '1px solid #e2e8f0' 
  },
  pageBtn: { 
    padding: isMobile ? '8px 16px' : '10px 20px', 
    borderRadius: '8px', 
    backgroundColor: '#2563eb', 
    color: '#fff', 
    border: 'none', 
    fontSize: '14px', 
    fontWeight: '700', 
    cursor: 'pointer' 
  },
  pageBtnDisabled: { 
    backgroundColor: '#cbd5e1', 
    cursor: 'not-allowed' 
  },
  pageIndicator: { 
    fontSize: isMobile ? '14px' : '15px', 
    color: '#475569', 
    fontWeight: '500' 
  }
});