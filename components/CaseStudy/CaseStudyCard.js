import styles from './CaseStudyCard.module.css';

const CaseStudyCard = ({ title }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.learnMore}>
        <span>
          Learn More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.arrowIcon}>
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CaseStudyCard;