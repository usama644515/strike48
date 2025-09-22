import styles from './RoadmapSection.module.css';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      level: "L1",
      title: "Agentic Activeboards",
      description: "Prompt-driven dashboards built and shared by agents."
    },
    {
      level: "",
      title: "Deep Research Agents",
      description: "Long-running workflows that investigate complex issues across systems."
    },
    {
      level: "",
      title: "Expanded Connectors & Webhooks",
      description: "Integrations that allow agents to operate across any log source or external system."
    }
  ];

  return (
    <section className={styles.roadmap}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Road Ahead</h2>
        <p className={styles.sectionDescription}>
          The Strike48 roadmap is focused on one goal: making bots smarter, faster, and easier to deploy. Upcoming milestones include:
        </p>
        <div className={styles.roadmapGrid}>
          {roadmapItems.map((item, index) => (
            <div key={index} className={styles.roadmapItem}>
              {item.level && <span className={styles.roadmapLevel}>{item.level}</span>}
              <h3 className={styles.roadmapTitle}>{item.title}</h3>
              <p className={styles.roadmapDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;