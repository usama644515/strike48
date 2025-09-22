import styles from './FeatureCard.module.css';

const FeatureCard = ({ title, description, icon, items }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h2 className={styles.featureTitle}>{title}</h2>
      <p className={styles.featureDescription}>{description}</p>
      <ul className={styles.featureList}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;