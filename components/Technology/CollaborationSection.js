import FeatureCard from './FeatureCard';
import styles from './CollaborationSection.module.css';

const CollaborationSection = () => {
  const features = [
    {
      title: "Collaborative Workflows",
      description: "One agent surfaces anomalies, another investigates, another prepares a compliance report.",
      icon: "🤝"
    },
    {
      title: "Cross-Domain Chaining",
      description: "Agents hand off tasks between security, fraud, and marketing contexts seamlessly.",
      icon: "🔄"
    },
    {
      title: "Background Jobs",
      description: "Bots run scheduled or long-running tasks and notify teams when insights are ready.",
      icon: "⏰"
    }
  ];

  return (
    <section className={styles.collaboration}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Agents That Collaborate</h2>
        <p className={styles.sectionDescription}>
          Bots shouldn't work in silos. Strike48 embraces Google's agent-to-agent framework to let bots interact as teammates:
        </p>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;