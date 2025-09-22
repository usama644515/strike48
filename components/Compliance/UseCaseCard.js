import styles from './UseCaseCard.module.css';

const UseCaseCard = ({ title, subtitle, description, frameworks, capabilities, metrics }) => {
  return (
    <div className={styles.useCaseCard}>
      <div className={styles.frameworks}>
        {frameworks.map((framework, index) => (
          <span key={index} className={styles.framework}>{framework}</span>
        ))}
      </div>
      
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <p className={styles.description}>{description}</p>
      
      <div className={styles.capabilities}>
        <h4 className={styles.capabilitiesTitle}>Key Capabilities</h4>
        <ul className={styles.capabilitiesList}>
          {capabilities.map((capability, index) => (
            <li key={index}>{capability}</li>
          ))}
        </ul>
      </div>
      
      <div className={styles.metrics}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.metric}>
            <span className={styles.metricValue}>{metric.value}</span>
            <span className={styles.metricLabel}>{metric.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCaseCard;