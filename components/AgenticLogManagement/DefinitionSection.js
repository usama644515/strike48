import styles from './DefinitionSection.module.css';

const DefinitionSection = () => {
  return (
    <section id="definition" className={styles.definition}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              <span className={styles.icon}>⚡</span>
              What is Agentic Log Management?
            </h2>
            <div className={styles.text}>
              <p>
                Agentic Log Management represents a paradigm shift from passive log collection to active, 
                autonomous orchestration. Instead of relying on static dashboards or siloed tools (like SIEM, 
                observability platforms, or data lakes), agentic systems deploy specialized AI agents that 
                continuously monitor, investigate, and respond to log-derived events in real-time.
              </p>
              <p>
                These agents are trained on your organization's unique systems and data structures, enabling 
                dynamic collaboration between bots — with memory, autonomy, and built-in security knowledge — 
                to deliver faster, more reliable outcomes across your entire tech stack.
              </p>
            </div>
          </div>
          <div className={styles.sidebar}>
            <div className={styles.keyTraits}>
              <h3 className={styles.traitsTitle}>Key Traits:</h3>
              <ul className={styles.traitsList}>
                <li>Autonomous log interpretation</li>
                <li>Multi-agent collaboration</li>
                <li>Context-aware orchestration</li>
                <li>Real-time remediation</li>
                <li>Continuous learning</li>
                <li>Proactive threat detection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefinitionSection;