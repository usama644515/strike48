import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/Testimonials/HeroSection';
import TestimonialsGrid from '../components/Testimonials/TestimonialsGrid';
import CtaSection from '../components/Testimonials/CtaSection';
import styles from '../styles/testimonials.module.css';

const TestimonialsPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <TestimonialsGrid />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;