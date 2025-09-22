import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/Technology/HeroSection';
import FoundationSection from '../components/Technology/FoundationSection';
import BotCreationSection from '../components/Technology/BotCreationSection';
import EngineSection from '../components/Technology/EngineSection';
import IntelligenceSection from '../components/Technology/IntelligenceSection';
import CollaborationSection from '../components/Technology/CollaborationSection';
import EnterpriseSection from '../components/Technology/EnterpriseSection';
import RoadmapSection from '../components/Technology/RoadmapSection';
import styles from '../styles/technology.module.css';

const TechnologyPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <FoundationSection />
        <BotCreationSection />
        <EngineSection />
        <IntelligenceSection />
        <CollaborationSection />
        <EnterpriseSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyPage;