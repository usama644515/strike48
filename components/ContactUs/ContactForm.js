import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    jobTitle: '',
    company: '',
    message: '',
    receiveCommunications: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="workEmail">Work Email *</label>
        <input
          type="email"
          id="workEmail"
          name="workEmail"
          value={formData.workEmail}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="jobTitle">Job Title *</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="company">Company *</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">How can we help? *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
      </div>

      <div className={styles.checkboxGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="receiveCommunications"
            checked={formData.receiveCommunications}
            onChange={handleChange}
          />
          <span className={styles.checkmark}></span>
          I'd like to receive communications on Strike48 products and services.
        </label>
      </div>

      <div className={styles.privacyNote}>
        <p>
          For more information on how to unsubscribe and our privacy practices, please review our <a href="#">Privacy Policy</a>. By clicking submit below, you consent to allow Strike48 to store and process the personal information submitted above to provide you the content requested.
        </p>
      </div>

      <div className={styles.captcha}>
        <div className={styles.captchaBox}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.shieldIcon}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          protected by reCAPTCHA
        </div>
        <div className={styles.captchaLinks}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>

      <button type="submit" className={styles.submitButton}>
        Send Message
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.buttonIcon}>
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  );
}; 

export default ContactForm;