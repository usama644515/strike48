import styles from './CtaSection.module.css';

const CtaSection = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to Transform Your Log Management?</h2>
          <p className={styles.description}>
            Stop drowning in log data and start extracting real value. Experience the power of autonomous 
            AI agents that work 24/7 to protect your organization and uncover hidden insights.
          </p>
          
          <div className={styles.divider}></div>
          
          <button className={styles.ctaButton}>
            Schedule a Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.buttonIcon}>
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;