// pages/contact.js
import Head from 'next/head';
import ContactForm from '../components/ContactUs/ContactForm';
import ContactInfo from '../components/ContactUs/ContactInfo';
import styles from '../styles/contact.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us | Strike48</title>
        <meta name="description" content="Get in touch with our team to learn how Strike48 can transform your data analytics capabilities" />
      </Head>
<Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroDescription}>
              Get in touch with our team to learn how Strike48 can transform your data analytics capabilities
            </p>
          </div>
        </section>

        <section className={styles.contactContent}>
          <div className={styles.container2}>
            <div className={styles.grid}>
              <div className={styles.infoColumn}>
                <ContactInfo />
              </div>
              <div className={styles.formColumn}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;