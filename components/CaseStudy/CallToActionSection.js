import styles from './CallToActionSection.module.css';

const CallToActionSection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to Write Your Own Success Story?</h2>
          <p className={styles.description}>
            Join these industry leaders and discover how Strike48 can transform your operations into competitive advantage. Start your journey today.
          </p>
          
          <div className={styles.divider}></div>
          
          <button className={styles.ctaButton}>
            Get Started Today
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.buttonIcon}>
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;