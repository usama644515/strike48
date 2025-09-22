import styles from './CtaSection.module.css';

const CtaSection = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to Strike Gold in Your Log Data?</h2>
          <p className={styles.description}>
            Join the companies already using Strike48 to transform their log data into actionable insights. 
            Start your digital gold rush today with Prospector Studio.
          </p>
          
          <div className={styles.divider}></div>
          
          <button className={styles.ctaButton}>
            Join Strike48 Today
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