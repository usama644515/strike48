import FeatureCard from './FeatureCard';
import styles from './IntelligenceSection.module.css';

const IntelligenceSection = () => {
  const features = [
    {
      title: "Light RAG (Retrieval-Augmented Generation)",
      description: "Give agents fast access to the right slice of context without heavy compute or costly infrastructure.",
      icon: "💡"
    },
    {
      title: "Knowledge Graphs & Personas",
      description: "Define relationships between entities so bots can reason more like people.",
      icon: "🧠"
    },
    {
      title: "Adaptive Prompt Management",
      description: "Manage, map, and refine prompts across use cases for consistent, predictable outputs.",
      icon: "🎯"
    }
  ];

  return (
    <section className={styles.intelligence}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Built-In Intelligence</h2>
        <p className={styles.sectionDescription}>
          Strike48 equips bots with lightweight but powerful intelligence capabilities:
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

export default IntelligenceSection;