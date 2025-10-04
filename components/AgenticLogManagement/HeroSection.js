import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Agentic Log Management</h1>
          <h2 className={styles.heroSubtitle}>From Passive Log Collection to Active Autonomous Orchestration</h2>
          
          <div className={styles.heroText}>
            <p>
              Traditional log management tools leave you drowning in data while starving for insights. 
              SIEMs, observability platforms, and data lakes create fragmentation, cost pressure, and operational overhead.
            </p>
            
            <p>
              Agentic Log Management represents a paradigm shift — deploying specialized AI agents that 
              continuously monitor, investigate, and respond to log-derived events in real-time.
            </p>
            
            <p>
              These autonomous agents are trained on your organization's unique systems and data structures, 
              enabling dynamic collaboration between bots with memory, autonomy, and built-in security knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;