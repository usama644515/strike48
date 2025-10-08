import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/AgenticSolutions/HeroSection';
import SolutionsSection from '../components/AgenticSolutions/SolutionsSection';
import StatsSection from '../components/AgenticSolutions/StatsSection';
import styles from '../styles/agentic-log-management.module.css';

const AgenticLogSolutionPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <SolutionsSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default AgenticLogSolutionPage;