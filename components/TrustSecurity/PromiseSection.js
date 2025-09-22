import PromiseCard from './PromiseCard';
import styles from './PromiseSection.module.css';

const PromiseSection = () => {
  const promises = [
    {
      title: "Secure by Design",
      description: "Strike48 is built with the highest security standards in mind.",
      icon: "🔒"
    },
    {
      title: "Controlled by Your Team",
      description: "Strike48's agents are built by you. You control what information, data, and actions it can take.",
      icon: "👥"
    },
    {
      title: "Total Transparency",
      description: "Each insight Strike48 captures is visible. Each action is explainable. Each step is under your purview.",
      icon: "🔍"
    }
  ];

  return (
    <section className={styles.promise}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Promise</h2>
        <div className={styles.promisesGrid}>
          {promises.map((promise, index) => (
            <PromiseCard
              key={index}
              title={promise.title}
              description={promise.description}
              icon={promise.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;