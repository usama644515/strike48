import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Strike48 Technology</h1>
        <h2 className={styles.heroSubtitle}>Our Bold Goal</h2>
        <p className={styles.heroDescription}>
          Logs are the new rivers of data. Strike48's technology is built to help every company 
          prospect those rivers—automatically, intelligently, and at scale. We combine agentic AI, 
          MCP-enabled execution, and self-healing collectors to transform logs into business value.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;