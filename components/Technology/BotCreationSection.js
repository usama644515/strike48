import FeatureCard from './FeatureCard';
import styles from './BotCreationSection.module.css';

const BotCreationSection = () => {
  const features = [
    {
      title: "Upload Knowledge Sets",
      description: "Tell the bot who it is and what expertise it should bring to the task.",
      icon: "📚"
    },
    {
      title: "Define Prompt Dictionaries",
      description: "Customize how terms are understood in different contexts (a 'report' means something different in compliance than in incident response).",
      icon: "📝"
    },
    {
      title: "Spin Up a Bot Instantly",
      description: "From ingestion to insight, bots are deployable in minutes.",
      icon: "🚀"
    }
  ];

  return (
    <section className={styles.botCreation}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Simple Bot Creation</h2>
        <p className={styles.sectionDescription}>
          At the core is Prospector Studio, a no-code environment for building log-analysis bots:
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

export default BotCreationSection;