import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.info}>
      <h2 className={styles.title}>Let's chat!</h2>
      <p className={styles.description}>
        Need to get in touch with a member of the Strike48 sales or marketing teams? 
        Please complete the form and your information will get routed to our team.
      </p>
      
      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="10" r="3" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h4>Headquarters</h4>
            <p>San Francisco, California</p>
          </div>
        </div>
        
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h4>Phone</h4>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="22,6 12,13 2,6" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h4>Email</h4>
            <p>contact@strike48.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;