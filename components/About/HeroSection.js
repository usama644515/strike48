import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Us</h1>
          <h2 className={styles.heroSubtitle}>Strike48 Turns Log Data Into Digital Gold</h2>
          
          <div className={styles.heroText}>
            <p>
              Companies everywhere collect terabytes of logs, but few manage to strike value from them. 
              Instead, log data piles up, overwhelming budgets and teams.
            </p>
            
            <p>
              Strike48 allows every company to prospect its data, extract insights, and act on them automatically.
            </p>
            
            <p>
              Inspired by the 1848 California Gold Rush, we chose the name Strike48 because we believe 
              a similar rush is waiting inside modern log data.
            </p>
            
            <p>
              Our first product, Prospector Studio, is a platform for building AI agents that dig through 
              your logs for actionable gold, just like the prospectors and miners once panned the riverbeds.
            </p>
            
            <p>
              And just like the Gold Rush, we believe Strike48 will open new possibilities across industries — 
              from security to compliance, from fraud detection to marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;