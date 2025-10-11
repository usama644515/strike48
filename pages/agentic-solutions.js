import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/AgenticSolutions/HeroSection';
import SolutionsSection from '../components/AgenticSolutions/SolutionsSection';
import styles from '../styles/agenticSolution.module.css';

const AgenticLogSolutionPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default AgenticLogSolutionPage;