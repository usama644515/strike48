import styles from './ArticleCard.module.css';

const ArticleCard = ({ title, description, date, readTime, category }) => {
  return (
    <article className={styles.articleCard}>
      {category && (
        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>{category}</h3>
        </div>
      )}
      
      <div className={styles.articleContent}>
        <h2 className={styles.articleTitle}>{title}</h2>
        <p className={styles.articleDescription}>{description}</p>
        
        <div className={styles.articleMeta}>
          <span className={styles.metaItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.metaIcon}>
              <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {date}
          </span>
          <span className={styles.metaItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.metaIcon}>
              <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {readTime}
          </span>
        </div>
        
        <button className={styles.readButton}>
          Read Article
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.buttonIcon}>
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </article>
  );
};

export default ArticleCard;