import styles from './ComparisonSection.module.css';

const ComparisonSection = () => {
  const comparisons = [
    {
      aspect: "Alert Generation",
      traditional: "Rule-based, static thresholds generate high volumes of false positives",
      agentic: "AI-driven anomaly detection with contextual understanding reduces false positives by 90%"
    },
    {
      aspect: "Threat Detection", 
      traditional: "Reactive - relies on known patterns and signatures",
      agentic: "Proactive - identifies novel threats through behavioral analysis"
    },
    {
      aspect: "Response Time",
      traditional: "Minutes to hours for human analysis and response",
      agentic: "Milliseconds for automated containment and mitigation"
    },
    {
      aspect: "Learning Capability",
      traditional: "Static rules require manual updates and tuning",
      agentic: "Continuous learning adapts to new threats and environment changes"
    },
    {
      aspect: "Correlation Ability",
      traditional: "Limited to pre-defined correlation rules across known data sources",
      agentic: "Advanced AI correlates events across all data sources, identifying complex attacks"
    },
    {
      aspect: "Operational Overhead",
      traditional: "High - requires constant manual tuning and alert triage",
      agentic: "Low - automated analysis and intelligent prioritization"
    }
  ];

  return (
    <section className={styles.comparison}>
      <div className={styles.container}>
        <h2 className={styles.title}>Traditional vs. Agentic Log Management</h2>
        <p className={styles.subtitle}>See how agentic approaches transform security operations</p>
        
        <div className={styles.comparisonTable}>
          <div className={styles.tableHeader}>
            <div className={styles.headerCell}>Aspect</div>
            <div className={styles.headerCell}>Traditional Approach</div>
            <div className={styles.headerCell}>Agentic Approach</div>
          </div>
          
          {comparisons.map((comparison, index) => (
            <div key={index} className={styles.tableRow}>
              <div className={styles.cell}>
                <strong>{comparison.aspect}</strong>
              </div>
              <div className={styles.cell}>
                <span className={styles.traditional}>{comparison.traditional}</span>
              </div>
              <div className={styles.cell}>
                <span className={styles.agentic}>{comparison.agentic}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Radar Chart Section */}
        <div className={styles.radarSection}>
          <h3 className={styles.radarTitle}>Agentic Log Management vs. Point Solutions</h3>
          <p className={styles.radarSubtitle}>Understanding the relative strengths of Agentic Log Management across business drivers</p>
          
          {/* Radar Chart */}
          <div className={styles.radarContainer}>
            <svg viewBox="0 0 560 560" className={styles.radarChart}>
              <defs>
                <linearGradient id="agGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FDE68A"/>
                  <stop offset="100%" stopColor="#F59E0B"/>
                </linearGradient>
              </defs>
              <g transform="translate(280,280)">
                {/* radial grid */}
                <circle r="200" fill="none" stroke="#E5E7EB"/>
                <circle r="140" fill="none" stroke="#E5E7EB"/>
                <circle r="80"  fill="none" stroke="#E5E7EB"/>
                {/* axes */}
                <g stroke="#CBD5E1">
                  <line x1="0" y1="0" x2="0" y2="-220"/>
                  <line x1="0" y1="0" x2="190" y2="-110"/>
                  <line x1="0" y1="0" x2="190" y2="110"/>
                  <line x1="0" y1="0" x2="0" y2="220"/>
                  <line x1="0" y1="0" x2="-190" y2="110"/>
                  <line x1="0" y1="0" x2="-190" y2="-110"/>
                </g>
                {/* labels */}
                <g fontSize="12" fill="#374151" fontWeight="600">
                  <text x="0" y="-240" textAnchor="middle">Cost Efficiency</text>
                  <text x="205" y="-120" textAnchor="start">Resolution Speed</text>
                  <text x="205" y="125" textAnchor="start">Ease of Adoption</text>
                  <text x="0" y="240" textAnchor="middle">Automation ROI</text>
                  <text x="-205" y="125" textAnchor="end">Coverage</text>
                  <text x="-205" y="-120" textAnchor="end">Compliance</text>
                </g>

                {/* Agentic polygon */}
                <polygon points="0,-200 170,-98 175,90 0,180 -165,95 -160,-88" fill="url(#agGold)" fillOpacity="0.35" stroke="#F59E0B" strokeWidth="2"/>

                {/* SIEM polygon (example weaker shape) */}
                <polygon points="0,-90 110,-60 120,40 0,70 -130,85 -160,-120" fill="#60A5FA" fillOpacity="0.18" stroke="#3B82F6"/>
              </g>
              {/* Legend */}
              <g fontSize="12" fill="#111827">
                <rect x="20" y="460" width="14" height="14" fill="url(#agGold)" stroke="#F59E0B"/>
                <text x="40" y="471">Agentic Log Management</text>
                <rect x="220" y="460" width="14" height="14" fill="#60A5FA" stroke="#3B82F6"/>
                <text x="240" y="471">Traditional SIEM</text>
              </g>
            </svg>
          </div>

          {/* Explanation */}
          <div className={styles.radarExplanation}>
            <p><strong>What the chart shows:</strong> Agentic Log Management covers all six business drivers evenly. It reduces costs by querying data in place, speeds up resolution through closed-loop automation, requires less training since analysts supervise instead of scripting, delivers higher ROI on automation, spans multiple domains (security, observability, identity, compliance), and provides full auditability.</p>
            <p><strong>By contrast:</strong> Traditional SIEMs (blue shape) excel in compliance and log coverage but fall short in cost efficiency and resolution speed. Other point solutions (not shown here but comparable) each over-index on one dimension—SOAR on automation, APM on performance, XDR on endpoint depth—but leave critical gaps elsewhere.</p>
            <p>The key takeaway is that Agentic Log Management is <em>balanced and holistic</em>, reducing the need for multiple point solutions while delivering measurable business value across cost, speed, adoption, automation, and compliance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;