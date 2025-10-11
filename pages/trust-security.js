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
        <div className={styles.heroText}>
            <h2 className={styles.sectionTitle}>Strike48 believes in Trust and Security</h2>
            <p>
              At Strike48, we understand the value and importance of keeping data safe. 
              Our unwavering commitment is to privacy, security, and compliance.
            </p>
          </div>
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