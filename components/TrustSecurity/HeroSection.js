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
          
          <div className={styles.heroText}>
            <h2 className={styles.sectionTitle}>Strike48 believes in Trust and Security</h2>
            <p>
              At Strike48, we understand the value and importance of keeping data safe. 
              Our unwavering commitment is to privacy, security, and compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;