import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/Compliance/HeroSection';
import UseCasesGrid from '../components/Compliance/UseCasesGrid';
import ValueProposition from '../components/Compliance/ValueProposition';
import CtaSection from '../components/Compliance/CtaSection';
import styles from '../styles/compliance.module.css';

const CompliancePage = () => { 
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <UseCasesGrid />
        <ValueProposition />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default CompliancePage;