// pages/combating-trafficking.js
import Head from 'next/head';
import TraffickingContent from '../components/CombatingTrafficking/TraffickingContent';
import styles from '../styles/CombatingTrafficking.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const CombatingTrafficking = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Combating Trafficking | Strike48</title>
        <meta name="description" content="Our commitment to combating trafficking in persons and modern slavery" />
      </Head>
<Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Combating Trafficking in Persons and Modern Slavery Compliance Plan and Policy</h1>
            <p className={styles.heroDescription}>
              Our commitment to ethical business practices and human rights
            </p>
          </div>
        </section>

        <section className={styles.policySection}>
          <div className={styles.container2}>
            <TraffickingContent />
          </div>
        </section>
      </main>
       <Footer />
    </div>
  );
};

export default CombatingTrafficking;