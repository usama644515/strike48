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
        <MissionVisionSection />
        <TrustedBySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;