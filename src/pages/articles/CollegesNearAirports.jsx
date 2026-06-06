import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Import both datasets
import { colleges as medicalColleges } from '../../data/colleges';
import { engineering_colleges as engineeringColleges } from '../../data/engineering_colleges';

const majorAirports = [
  { name: "All Airports", city: "All" },
  { name: "Kempegowda Int. (BLR)", city: "Bangalore" },
  { name: "Cochin Int. (COK)", city: "Kochi" },
  { name: "Trivandrum Int. (TRV)", city: "Thiruvananthapuram" },
  { name: "Chennai Int. (MAA)", city: "Chennai" },
  { name: "Rajiv Gandhi Int. (HYD)", city: "Hyderabad" }
];

const majorStations = [
  { name: "All Stations", city: "All" },
  { name: "KSR Bengaluru City", city: "Bangalore" },
  { name: "Trivandrum Central", city: "Thiruvananthapuram" },
  { name: "Chennai Central", city: "Chennai" },
  { name: "Ernakulam Junction", city: "Kochi" },
  { name: "Secunderabad Junction", city: "Hyderabad" }
];

export default function CollegesNearAirports() {
  // States
  const [transitMode, setTransitMode] = useState('airport');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  
  // --- New Pagination State ---
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset page to 1 whenever filters or search terms change
  useEffect(() => {
    setCurrentPage(1);
  }, [transitMode, searchTerm, selectedCity]);

  // Combine both arrays into one master list
  const allColleges = useMemo(() => {
    return [...medicalColleges, ...engineeringColleges];
  }, []);

  // Filter the combined list
  const filteredColleges = useMemo(() => {
    return allColleges.filter(college => {
      const safeName = (college.name || "").toLowerCase();
      const safeCity = (college.city || "").toLowerCase();
      const search = searchTerm.toLowerCase();

      const matchesSearch = safeName.includes(search) || safeCity.includes(search);
      const matchesFilter = selectedCity === 'All' || college.city === selectedCity;
      
      return matchesSearch && matchesFilter;
    });
  }, [allColleges, searchTerm, selectedCity]);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(filteredColleges.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = filteredColleges.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Smooth scroll back to the top of the list when changing pages
    window.scrollTo({ top: 400, behavior: 'smooth' }); 
  };

  // Determine which filters to show
  const activeFilters = transitMode === 'airport' ? majorAirports : majorStations;
  const transitIcon = transitMode === 'airport' ? '✈️' : '🚂';

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      <header style={styles.heroHeader}>
        <div style={styles.heroContent}>
          <span style={styles.eyebrow}>Campus & Connectivity</span>
          <h1 style={styles.mainTitle}>Colleges Near Major Transit Hubs</h1>
          <p style={styles.subtitle}>
            Find top-rated medical and engineering institutions with excellent connectivity for easy out-of-state and domestic commuting.
          </p>

          {/* Transit Mode Toggle */}
          <div style={styles.toggleContainer}>
            <button 
              style={{ ...styles.toggleBtn, ...(transitMode === 'airport' ? styles.toggleActive : {}) }}
              onClick={() => setTransitMode('airport')}
            >
              ✈️ Airports
            </button>
            <button 
              style={{ ...styles.toggleBtn, ...(transitMode === 'railway' ? styles.toggleActive : {}) }}
              onClick={() => setTransitMode('railway')}
            >
              🚂 Railway Stations
            </button>
          </div>
          
          {/* Search Bar */}
          <div style={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Search by college name or city..." 
              style={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Quick Filters */}
          <div style={styles.filterContainer}>
            <span style={styles.filterLabel}>
              Famous {transitMode === 'airport' ? 'Airports' : 'Stations'}:
            </span>
            <div style={styles.pillWrapper}>
              {activeFilters.map(hub => (
                <button 
                  key={hub.name}
                  style={{
                    ...styles.filterPill,
                    ...(selectedCity === hub.city ? styles.activePill : {})
                  }}
                  onClick={() => setSelectedCity(hub.city)}
                >
                  {hub.name === "All Airports" || hub.name === "All Stations" ? "🌍" : transitIcon} {hub.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main style={styles.mainContent}>
        <div style={styles.listContainer}>
          {currentData.length > 0 ? (
            <>
              {currentData.map((college) => (
                <article key={college.id} style={styles.card}>
                  <div style={styles.imageBox}>
                    <img 
                      src={college.image} 
                      alt={college.name} 
                      style={styles.image}
                      onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'; 
                      }}
                    />
                    <div style={styles.typeBadge}>{college.type || "Institution"}</div>
                  </div>

                  <div style={styles.contentBox}>
                    <div style={styles.contentHeader}>
                      <div>
                        <Link to={`/college/${college.id}`} style={styles.collegeLink}>
                          <h2 style={styles.collegeName}>{college.name}</h2>
                        </Link>
                        <p style={styles.location}>📍 {college.city}, {college.state}</p>
                      </div>
                    </div>
                    <p style={styles.description}>
                      {college.description || "Learn more about this institution's courses, campus life, and placement opportunities on the detail page."}
                    </p>
                    
                    <div style={styles.transitTag}>
                      ✅ Great connectivity from {selectedCity === 'All' ? `${college.city || 'local'} hubs` : activeFilters.find(f => f.city === selectedCity)?.name}
                    </div>
                  </div>
                </article>
              ))}

              {/* --- Pagination Controls --- */}
              {totalPages > 1 && (
                <div style={styles.paginationContainer}>
                  <button 
                    style={{ ...styles.pageBtn, ...(currentPage === 1 ? styles.pageBtnDisabled : {}) }}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    ← Previous
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
              <p>No colleges found near this location or matching your search.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    fontFamily: 'DM Sans, sans-serif',
  },
  heroHeader: {
    backgroundColor: '#fff',
    padding: '80px 24px 40px',
    borderBottom: '1px solid #e5e7eb',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  eyebrow: {
    display: 'inline-block',
    padding: '6px 14px',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
    marginBottom: '20px',
  },
  mainTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '44px',
    color: '#0f172a',
    lineHeight: '1.2',
    marginBottom: '16px',
    fontWeight: '800',
  },
  subtitle: {
    fontSize: '18px',
    color: '#64748b',
    fontWeight: '500',
    marginBottom: '30px',
  },
  toggleContainer: {
    display: 'inline-flex',
    backgroundColor: '#f1f5f9',
    borderRadius: '50px',
    padding: '6px',
    marginBottom: '30px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  toggleBtn: {
    padding: '10px 24px',
    borderRadius: '40px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#64748b',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  toggleActive: {
    backgroundColor: '#fff',
    color: '#1e3a8a',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
  },
  searchContainer: {
    maxWidth: '600px',
    margin: '0 auto 24px',
    position: 'relative',
  },
  searchInput: {
    width: '100%',
    padding: '16px 24px',
    fontSize: '16px',
    borderRadius: '50px',
    border: '2px solid #e2e8f0',
    outline: 'none',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    marginTop: '20px',
  },
  filterLabel: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  pillWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
  },
  filterPill: {
    padding: '8px 16px',
    backgroundColor: '#f1f5f9',
    color: '#334155',
    border: '1px solid #cbd5e1',
    borderRadius: '30px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  activePill: {
    backgroundColor: '#1e3a8a',
    color: '#ffffff',
    border: '1px solid #1e3a8a',
    boxShadow: '0 4px 10px rgba(30, 58, 138, 0.3)',
  },
  mainContent: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '60px 24px',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  card: {
    display: 'flex',
    flexWrap: 'wrap', 
    backgroundColor: '#fff',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
    border: '1px solid #f1f5f9',
  },
  imageBox: {
    flex: '1 1 300px', 
    position: 'relative',
    minHeight: '240px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  typeBadge: {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    backgroundColor: 'rgba(255,255,255,0.95)',
    color: '#0f172a',
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '700',
    backdropFilter: 'blur(4px)',
  },
  contentBox: {
    flex: '2 1 400px', 
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contentHeader: {
    marginBottom: '16px',
  },
  collegeLink: {
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
  },
  collegeName: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#1e3a8a',
    marginBottom: '8px',
    lineHeight: '1.3',
  },
  location: {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '500',
    marginBottom: '12px',
  },
  description: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#475569',
    marginBottom: '16px',
  },
  transitTag: {
    display: 'inline-block',
    padding: '6px 12px',
    backgroundColor: '#ecfdf5',
    color: '#047857',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
    border: '1px solid #a7f3d0',
    alignSelf: 'flex-start'
  },
  noResults: {
    textAlign: 'center',
    padding: '40px',
    color: '#64748b',
    backgroundColor: '#fff',
    borderRadius: '20px',
    border: '1px solid #f1f5f9',
    fontWeight: '500'
  },
  
  /* --- Pagination Styles --- */
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    marginTop: '20px',
    paddingTop: '30px',
    borderTop: '1px solid #e2e8f0',
  },
  pageBtn: {
    padding: '10px 20px',
    borderRadius: '8px',
    backgroundColor: '#1e3a8a',
    color: '#fff',
    border: 'none',
    fontSize: '14px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  pageBtnDisabled: {
    backgroundColor: '#cbd5e1',
    color: '#94a3b8',
    cursor: 'not-allowed',
  },
  pageIndicator: {
    fontSize: '15px',
    color: '#475569',
    fontWeight: '500',
  }
};