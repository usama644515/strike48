import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/knowledgeCenter/HeroSection';
import ArticlesSection from '../components/knowledgeCenter/ArticlesSection';
import VideoTutorialsSection from '../components/knowledgeCenter/VideoTutorialsSection';
import SupportSection from '../components/knowledgeCenter/SupportSection';
import styles from '../styles/knowledgecenter.module.css';

const KnowledgeCenterPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <ArticlesSection />
        <VideoTutorialsSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default KnowledgeCenterPage;