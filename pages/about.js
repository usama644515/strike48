import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/About/HeroSection';
import MissionVisionSection from '../components/About/MissionVisionSection';
import TrustedBySection from '../components/About/TrustedBySection';
import CtaSection from '../components/About/CtaSection';
import styles from '../styles/about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
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
        <MissionVisionSection />
        <TrustedBySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;