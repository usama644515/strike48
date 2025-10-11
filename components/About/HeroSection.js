import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Us</h1>
          <h2 className={styles.heroSubtitle}>Strike48 Turns Log Data Into Digital Gold</h2>
          
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;