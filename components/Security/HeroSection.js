import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Agentic Bots in Incident Response</h1>
        <p className={styles.heroDescription}>
          Streamline your security operations with intelligent automation that accelerates threat detection, response, and recovery while maintaining precision and compliance.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;