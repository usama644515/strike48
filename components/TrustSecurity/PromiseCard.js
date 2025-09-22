import styles from './PromiseCard.module.css';

const PromiseCard = ({ title, description, icon }) => {
  return (
    <div className={styles.promiseCard}>
      <div className={styles.cardIcon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default PromiseCard;