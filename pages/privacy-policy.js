// pages/privacy-policy.js
import Head from 'next/head';
import PrivacyContent from '../components/PrivacyPolicy/PrivacyContent';
import styles from '../styles/PrivacyPolicy.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy | Strike48</title>
        <meta name="description" content="Our commitment to protecting your data and privacy" />
      </Head>
<Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Privacy Policy</h1>
            <p className={styles.heroDescription}>
              Our commitment to protecting your data and privacy
            </p>
          </div>
        </section>

        <section className={styles.privacySection}>
          <div className={styles.container2}>
            <PrivacyContent />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;