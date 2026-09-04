import React, { useState, useEffect } from 'react';

export default function PromoPosterPopup({ 
  imageUrl = "https://i.postimg.cc/k5nB7RxW/Chat-GPT-Image-Sep-4-2026-03-40-52-PM.png", 
  blogLink = "/news/tnea-supplementary-counselling-2",
  delayMs = 1500 // 1.5 second delay before popping up
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup after a short delay for better user experience
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  const handleClose = (e) => {
    e.stopPropagation(); // Prevents the click from triggering the link behind the button
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      padding: '20px',
    },
    modal: {
      position: 'relative',
      maxWidth: '900px', // Adjust this based on your poster's aspect ratio
      width: '100%',
      animation: 'posterPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Bouncy pop effect
      borderRadius: '12px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    },
    imageLink: {
      display: 'block',
      width: '100%',
      borderRadius: '12px',
      overflow: 'hidden',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
      transition: 'transform 0.3s ease',
    },
    closeButton: {
      position: 'absolute',
      top: '-12px',
      right: '-12px',
      background: '#ffffff',
      color: '#000000',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '32px', height: '32px',
      borderRadius: '50%',
      fontSize: '16px',
      fontWeight: 'bold',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      zIndex: 10,
      transition: 'all 0.2s ease'
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes posterPop {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
          .poster-close-btn:hover {
            transform: scale(1.1);
            background: #f1f1f1 !important;
          }
          .poster-link:hover img {
            transform: scale(1.02); /* Slight zoom when hovering over the poster */
          }
        `}
      </style>
      
      <div style={styles.overlay}>
        <div style={styles.modal}>
          
          <button 
            className="poster-close-btn"
            style={styles.closeButton} 
            onClick={handleClose}
            aria-label="Close advertisement"
          >
            ✕
          </button>

          {/* If you are using React Router or Next.js, you might want to swap this <a> tag for a <Link> component */}
          <a 
            href={blogLink} 
            className="poster-link"
            style={styles.imageLink}
            onClick={() => setIsOpen(false)} // Optionally close popup when clicked
          >
            <img 
              src={imageUrl} 
              alt="Special Announcement" 
              style={styles.image}
            />
          </a>

        </div>
      </div>
    </>
  );
}