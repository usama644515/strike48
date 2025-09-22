import FaqItem from './FaqItem';
import styles from './FaqSection.module.css';

const FaqSection = () => {
  const faqs = [
    "How much control do I have over the bots?",
    "Does Strike48's models train on my business data?",
    "How does Strike48 ensure data security?",
    "Which compliance standards does Strike48 support?",
    "Can I see what my agents are doing at all times?",
    "Who decides what to automate?"
  ];

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>FAQ</h2>
        <div className={styles.faqGrid}>
          {faqs.map((question, index) => (
            <FaqItem key={index} question={question} />
          ))}
        </div>
        
        <div className={styles.faqFooter}>
          <p>Have more questions about how we handle your data?</p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;