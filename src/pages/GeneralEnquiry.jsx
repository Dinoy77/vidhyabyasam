import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function GeneralEnquiry() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const SERVICE_ID = 'service_enpvi1e';
    const TEMPLATE_ID = 'template_92n6jsm';
    const PUBLIC_KEY = '7Ok7ocBR25mQbYkBG';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus('success');
        setIsSubmitting(false);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <span style={styles.badge}>Free Admission Guidance</span>
          <h2 style={styles.title}>Enquire Now</h2>
          <p style={styles.subtitle}>
            Fill out your details below and our expert counselors will reach out to guide your career path.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name *</label>
            <input 
              type="text" 
              name="user_name" 
              required 
              placeholder="e.g. Rahul Nair" 
              style={styles.input} 
            />
          </div>

          {/* 2. Direct Contact Grid (Priority 2: How to reach them fast?) */}
          <div style={styles.gridRow}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone Number *</label>
              <input 
                type="tel" 
                name="user_phone" 
                required 
                pattern="[0-9]{10}"
                placeholder="10-digit mobile number" 
                style={styles.input} 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address *</label>
              <input 
                type="email" 
                name="user_email" 
                required 
                placeholder="name@example.com" 
                style={styles.input} 
              />
            </div>
          </div>

          {/* 3. Demographics & Eligibility (Priority 3: Checking qualification criteria) */}
          <div style={styles.gridRow}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Age *</label>
              <input 
                type="number" 
                name="user_age" 
                required 
                min="15" 
                max="60" 
                placeholder="Years" 
                style={styles.input} 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Highest Qualification *</label>
              <select name="user_qualification" required defaultValue="" style={styles.select}>
                <option value="" disabled>Select Qualification</option>
                <option value="10th">10th Standard</option>
                <option value="Higher Secondary">Higher Secondary (10+2)</option>
                <option value="Graduation">Graduation (Bachelor's)</option>
                <option value="Post Graduation">Post Graduation (Master's)</option>
              </select>
            </div>
          </div>

          {/* 4. Intent (Priority 4: What program do they want?) */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Which course are you looking for? *</label>
            <input 
              type="text" 
              name="target_course" 
              required 
              placeholder="e.g. MBBS, B.Tech Computer Science, B.Sc Nursing, B.Pharm..." 
              style={styles.input} 
            />
          </div>

          {/* Optional Extra Notes */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Any specific questions or college preferences? (Optional)</label>
            <textarea 
              name="message" 
              rows="3" 
              placeholder="Tell us about your preferred location, budget, or entrance exam scores..." 
              style={styles.textarea}
            ></textarea>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div style={styles.successBox}>
              ✅ Thank you! Your enquiry has been sent. Our team will contact you shortly.
            </div>
          )}
          {submitStatus === 'error' && (
            <div style={styles.errorBox}>
              ❌ Oops! Something went wrong. Please try submitting again or contact us directly.
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting} 
            style={{
              ...styles.submitButton,
              backgroundColor: isSubmitting ? '#94a3b8' : '#2563eb',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}
          >
            {isSubmitting ? 'Sending Enquiry...' : 'Submit Enquiry'}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'DM Sans, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '650px',
    width: '100%',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
    border: '1px solid #f1f5f9',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  badge: {
    display: 'inline-block',
    padding: '6px 14px',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '12px',
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '32px',
    color: '#0f172a',
    fontWeight: '800',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '15px',
    color: '#64748b',
    lineHeight: '1.6',
    margin: 0,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  gridRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#334155',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  input: {
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #cbd5e1',
    fontSize: '15px',
    color: '#0f172a',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    backgroundColor: '#f8fafc',
  },
  select: {
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #cbd5e1',
    fontSize: '15px',
    color: '#0f172a',
    outline: 'none',
    backgroundColor: '#f8fafc',
    cursor: 'pointer',
  },
  textarea: {
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #cbd5e1',
    fontSize: '15px',
    color: '#0f172a',
    outline: 'none',
    backgroundColor: '#f8fafc',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  submitButton: {
    padding: '16px',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '700',
    transition: 'background-color 0.2s ease',
    marginTop: '10px',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
  },
  successBox: {
    padding: '14px',
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
    color: '#16a34a',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '600',
    textAlign: 'center',
  },
  errorBox: {
    padding: '14px',
    backgroundColor: '#fef2f2',
    border: '1px solid #fecaca',
    color: '#dc2626',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '600',
    textAlign: 'center',
  },
};