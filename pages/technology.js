import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/Technology/HeroSection';
import styles from '../styles/technology.module.css';

const TechnologyPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyPage;