import styles from './VideoCard.module.css';

const VideoCard = ({ title, description, date, category }) => {
  return (
    <article className={styles.videoCard}>
      <div className={styles.videoThumbnail}>
        <div className={styles.playButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <div className={styles.videoContent}>
        {category && (
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>{category}</h3>
          </div>
        )}
        
        <h2 className={styles.videoTitle}>{title}</h2>
        <p className={styles.videoDescription}>{description}</p>
        
        <div className={styles.videoMeta}>
          <span className={styles.metaItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.metaIcon}>
              <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {date}
          </span>
        </div>
        
        <button className={styles.watchButton}>
          Watch Tutorial
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.buttonIcon}>
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </article>
  );
};

export default VideoCard;