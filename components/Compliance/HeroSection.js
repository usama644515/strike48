import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Agentic AI for Security Compliance</h1>
        <p className={styles.heroDescription}>
          Six proven use cases for large enterprises and MSSPs to automate compliance workflows, reduce manual effort, and scale operations
        </p>
      </div>
    </section>
  );
};

export default HeroSection;