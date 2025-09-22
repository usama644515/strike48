// pages/case-studies.js
import Head from "next/head";
import CaseStudyCard from "../components/CaseStudy/CaseStudyCard";
import CallToActionSection from "../components/CaseStudy/CallToActionSection";
import styles from "../styles/CaseStudies.module.css";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const CaseStudies = () => {
  const caseStudies = [
    "OneMain Financial",
    "National Solutions Firm",
    "Talion",
    "DeepSeas",
    "BitKub Exchange",
    "Telefonica",
    "Omnicom",
    "CyberMaxx",
    "Public University",
    "Visiativ",
    "CarGurus",
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Case Studies | Strike48</title>
        <meta
          name="description"
          content="Real-world success stories of organizations transforming their operations with Strike48 and Devo"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Case Studies</h1>
            <p className={styles.heroDescription}>
              Real-world success stories of organizations transforming their
              operations with Strike48 and Devo
            </p>
          </div>
        </section>

        <section className={styles.caseStudies}>
          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((title, index) => (
              <CaseStudyCard key={index} title={title} />
            ))}
          </div>
        </section>

        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
