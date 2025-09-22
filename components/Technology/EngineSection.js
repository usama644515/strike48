import FeatureCard from './FeatureCard';
import styles from './EngineSection.module.css';

const EngineSection = () => {
  const features = [
    {
      title: "Standardized Execution",
      description: "MCP (Model Context Protocol) gives bots a consistent framework to run actions and access tools.",
      icon: "⚙️"
    },
    {
      title: "Extensibility",
      description: "Easily integrate new functions, connectors, and workflows into the agent environment.",
      icon: "🔌"
    },
    {
      title: "Multi-Tenant Aware",
      description: "Scale bots across domains and tenants while preserving security and context boundaries.",
      icon: "🌐"
    }
  ];

  return (
    <section className={styles.engine}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>The Engine: MCP-Enabled Backend</h2>
        <p className={styles.sectionDescription}>
          Every bot is powered by a full MCP server backend:
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

export default EngineSection;