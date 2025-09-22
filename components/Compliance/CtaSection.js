import styles from './CtaSection.module.css';

const CtaSection = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Transform Your Compliance Operations?</h2>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Schedule Demo</button>
          <button className={styles.secondaryButton}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;