import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/TrustSecurity/HeroSection';
import ComplianceSection from '../components/TrustSecurity/ComplianceSection';
import PromiseSection from '../components/TrustSecurity/PromiseSection';
import FaqSection from '../components/TrustSecurity/FaqSection';
import LegalSection from '../components/TrustSecurity/LegalSection';
import styles from '../styles/trustsecurity.module.css';

const TrustSecurityPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <ComplianceSection />
        <PromiseSection />
        <FaqSection />
        <LegalSection />
      </main>
      <Footer />
    </div>
  );
};

export default TrustSecurityPage;