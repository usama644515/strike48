import styles from './SupportSection.module.css';

const SupportSection = () => {
  return (
    <section className={styles.support}>
      <div className={styles.container}>
        <div className={styles.supportContent}>
          <h2 className={styles.supportTitle}>Need Additional Support?</h2>
          <p className={styles.supportDescription}>
            Can't find what you're looking for? Our team is here to help you succeed with Strike48.
          </p>
          <button className={styles.supportButton}>
            Contact Support
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.buttonIcon}>
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;