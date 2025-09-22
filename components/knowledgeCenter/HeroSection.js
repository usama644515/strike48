import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Knowledge Center</h1>
        <p className={styles.heroDescription}>
          Discover insights, best practices, and expert guidance to maximize your data analytics potential
        </p>
      </div>
    </section>
  );
};

export default HeroSection;