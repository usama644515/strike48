import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/AgenticLogManagement/HeroSection';
import DefinitionSection from '../components/AgenticLogManagement/DefinitionSection';
import WhyItMattersSection from '../components/AgenticLogManagement/WhyItMattersSection';
import ComparisonSection from '../components/AgenticLogManagement/ComparisonSection';
import FeaturesSection from '../components/AgenticLogManagement/FeaturesSection';
import CtaSection from '../components/AgenticLogManagement/CtaSection';
import styles from '../styles/agentic-log-management.module.css';

const AgenticLogManagementPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {/* <HeroSection /> */}
        {/* <DefinitionSection /> */}
        <WhyItMattersSection />
        <ComparisonSection />
        {/* <FeaturesSection /> */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default AgenticLogManagementPage;