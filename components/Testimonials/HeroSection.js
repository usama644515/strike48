import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Client Success Stories</h1>
        <p className={styles.heroDescription}>
          Discover how leading organizations are transforming their log data into actionable insights with Strike48's AI-powered platform.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;