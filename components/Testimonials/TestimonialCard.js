import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ quote, company, logo }) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.quote}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.quoteIcon}>
          <path d="M10 8H8C7.46957 8 6.96086 8.21071 6.58579 8.58579C6.21071 8.96086 6 9.46957 6 10V14C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16H10V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 8H16C15.4696 8 14.9609 8.21071 14.5858 8.58579C14.2107 8.96086 14 9.46957 14 10V14C14 14.5304 14.2107 15.0391 14.5858 15.4142C14.9609 15.7893 15.4696 16 16 16H18V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p className={styles.quoteText}>{quote}</p>
      </div>
      <div className={styles.company}>
        <div className={styles.logo}>{logo}</div>
        <span className={styles.companyName}>{company}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;