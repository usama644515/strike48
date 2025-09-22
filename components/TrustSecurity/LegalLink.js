import styles from './LegalLink.module.css';

const LegalLink = ({ text }) => {
  return (
    <a href="#" className={styles.legalLink}>
      {text}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.linkIcon}>
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
};

export default LegalLink;