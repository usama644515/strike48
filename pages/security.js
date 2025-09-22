import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/Security/HeroSection';
import FeaturesGrid from '../components/Security/FeaturesGrid';
import BenefitsSection from '../components/Security/BenefitsSection';
import styles from '../styles/security.module.css';

const SecuritySolutions = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <FeaturesGrid />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default SecuritySolutions;