import { useState } from 'react';
import styles from './FaqItem.module.css';

const FaqItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button 
        className={styles.faqQuestion}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          className={`${styles.chevron} ${isOpen ? styles.open : ''}`}
        >
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {isOpen && (
        <div className={styles.faqAnswer}>
          <p>Detailed answer would appear here when expanded.</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;