import styles from './CtaSection.module.css';

const CtaSection = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Strike Gold in Your Log Data?</h2>
        <p className={styles.description}>
          Join these industry leaders and discover the hidden value in your organization's log data with Strike48's AI-powered platform.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Start Your Free Trial</button>
          <button className={styles.secondaryButton}>Schedule a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;