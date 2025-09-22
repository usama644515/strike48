// components/CallToActionSection.js
import styles from './CallToActionSection.module.css';

const CallToActionSection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Write Your Own Success Story?</h2>
        <p className={styles.description}>
          Join these industry leaders and discover how Strike48 can transform your operations into competitive advantage. Start your journey today.
        </p>
        <button className={styles.ctaButton}>Get Started Today</button>
      </div>
    </section>
  );
};

export default CallToActionSection;