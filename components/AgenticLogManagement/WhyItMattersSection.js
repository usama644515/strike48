import styles from './WhyItMattersSection.module.css';

const WhyItMattersSection = () => {
  const insights = [
    {
      title: "Fragmentation",
      description: "Juggling SIEMs, observability tools, and compliance dashboards leads to redundant ingestion and manual correlation."
    },
    {
      title: "Cost Pressure", 
      description: "Legacy vendors charge by volume and storage — not outcomes. Teams pay for logs they never use."
    },
    {
      title: "Staffing Gaps",
      description: "Ops teams are buried under alerts and disconnected workflows. Scaling headcount isn't feasible."
    },
    {
      title: "Slow Response", 
      description: "Incidents queue up for hours. Manual playbooks are brittle and blind to context."
    },
    {
      title: "AI Opportunity",
      description: "Agentic AI shifts the model: from dashboards to doers. From manual response to autonomous copilots."
    },
    {
      title: "Competitive Edge",
      description: "Transform logs from compliance overhead to strategic advantage with autonomous insights."
    }
  ];

  return (
    <section className={styles.whyItMatters}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.icon}>💡</span>
          Why Agentic Log Management Matters
        </h2>
        
        <div className={styles.insightsGrid}>
          {insights.map((insight, index) => (
            <div key={index} className={styles.insightCard}>
              <h3 className={styles.insightTitle}>{insight.title}</h3>
              <p className={styles.insightDescription}>{insight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;