import styles from './MissionVisionSection.module.css';

const MissionVisionSection = () => {
  return (
    <section className={styles.missionVision}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.card}>
              <div className={styles.icon}>🎯</div>
              <h3 className={styles.title}>Our Mission</h3>
              <p className={styles.description}>
                Strike48's core mission is to automate the extraction of business value from logs 
                across every industry and use case.
              </p>
            </div>
          </div>
          
          <div className={styles.column}>
            <div className={styles.card}>
              <div className={styles.icon}>👁️</div>
              <h3 className={styles.title}>Our Vision</h3>
              <p className={styles.description}>
                We see a world where logs aren't just archived for compliance — they become a 
                real-time source of competitive advantage for every organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;