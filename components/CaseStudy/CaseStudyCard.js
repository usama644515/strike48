// components/CaseStudyCard.js
import styles from './CaseStudyCard.module.css';

const CaseStudyCard = ({ title }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.learnMore}>
        <span>Learn More</span>
      </div>
    </div>
  );
};

export default CaseStudyCard;