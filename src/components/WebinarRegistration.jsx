import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function WebinarRegistration() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_enpvi1e';
    const TEMPLATE_ID = 'template_9f02k4e'; 
    const PUBLIC_KEY = '7Ok7ocBR25mQbYkBG';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log('Registration successful:', result.text);
        setSubmitStatus('success');
        setIsSubmitting(false);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('Failed to send registration:', error.text);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <span style={styles.badge}>Live Masterclass</span>
          <h2 style={styles.title}>Webinar Registration</h2>
          <p style={styles.subtitle}>
            Reserve your spot for our upcoming exclusive webinar. Fill out your details below to get the joining link.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
          
          {/* Row 1: Contact Basics */}
          <div style={styles.gridRow}>
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

          {/* Row 2: Phone & Age */}
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
          </div>

          {/* Row 3: Academics */}
          <div style={styles.gridRow}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Highest Education *</label>
              <select name="higher_education" required defaultValue="" style={styles.select}>
                <option value="" disabled>Select Education Level</option>
                <option value="High School">High School (10th)</option>
                <option value="Higher Secondary">Higher Secondary (10+2)</option>
                <option value="Undergraduate">Undergraduate (Bachelor's)</option>
                <option value="Postgraduate">Postgraduate (Master's)</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Field of Study / Interest *</label>
              <select name="field_of_study" required defaultValue="" style={styles.select}>
                <option value="" disabled>Select your primary interest</option>
                <option value="Medical & Healthcare">Medical & Healthcare (MBBS, Nursing)</option>
                <option value="Engineering & Tech">Engineering & Technology</option>
                <option value="Business & Management">Business & Management</option>
                <option value="Ayurveda/Alternative Medicine">Ayurveda / Alternative Medicine</option>
                <option value="General Guidance">General Career Guidance</option>
              </select>
            </div>
          </div>

          {/* Row 4: Demographics & Marketing */}
          <div style={styles.gridRow}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>City / Location *</label>
              <input 
                type="text" 
                name="user_city" 
                required 
                placeholder="e.g. Kochi, Kerala" 
                style={styles.input} 
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>How did you hear about us?</label>
              <select name="referral_source" defaultValue="" style={styles.select}>
                <option value="" disabled>Select an option</option>
                <option value="Instagram">Instagram / Facebook</option>
                <option value="Google Search">Google Search</option>
                <option value="YouTube">YouTube</option>
                <option value="Friend or Family">Friend or Family</option>
                <option value="Email Newsletter">Email Newsletter</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Row 5: Questions / Expectations */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>What do you hope to learn from this webinar? (Optional)</label>
            <textarea 
              name="user_questions" 
              rows="3" 
              placeholder="Ask any specific questions you want the speaker to cover..." 
              style={styles.textarea}
            ></textarea>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div style={styles.successBox}>
              ✅ Registration successful! Check your email for the webinar link and details.
            </div>
          )}
          {submitStatus === 'error' && (
            <div style={styles.errorBox}>
              ❌ Oops! Something went wrong. Please try submitting again or contact support.
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
            {isSubmitting ? 'Registering...' : 'Register'}
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
    maxWidth: '700px',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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