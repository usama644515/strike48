// pages/terms-of-service.js
import Head from 'next/head';
import TermsContent from '../components/TermOfServices/TermsContent';
import styles from '../styles/TermsOfService.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const TermsOfService = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Terms of Service | Strike48</title>
        <meta name="description" content="Our commitment to transparent and fair service terms" />
      </Head>
<Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Terms of Service</h1>
            <p className={styles.heroDescription}>
              Our commitment to transparent and fair service terms
            </p>
          </div>
        </section>

        <section className={styles.termsSection}>
          <div className={styles.container2}>
            <TermsContent />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;