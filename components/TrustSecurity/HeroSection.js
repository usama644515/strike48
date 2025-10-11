import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Trust & Security</h1>
          <p className={styles.heroSubtitle}>
            Our commitment to data safety, privacy, security, and compliance
          </p>
          
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;