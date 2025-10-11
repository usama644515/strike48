import FaqItem from './FaqItem';
import styles from './FaqSection.module.css';

const FaqSection = () => {
  const faqs = [
    {
      question: "How much control do I have over the bots?",
      answer:
        "You have complete control over your Strike48 agents, including what data they access and actions they can take.",
    },
    {
      question: "Does Strike48's models train on my business data?",
      answer: "No, Strike48 does not train on your business data. Your data remains private and secure.",
    },
    {
      question: "How does Strike48 ensure data security?",
      answer: "We implement industry-leading security practices and maintain SOC2 and SOC3 compliance.",
    },
    {
      question: "Which compliance standards does Strike48 support?",
      answer: "Strike48 supports GDPR, SOC2, and SOC3 compliance standards.",
    },
    {
      question: "Can I see what my agents are doing in real time?",
      answer: "Yes, Strike48 provides complete transparency into all agent actions and insights.",
    },
    {
      question: "Who decides what is actionable?",
      answer: "Your team decides what actions agents can take based on your business rules and requirements.",
    },
  ];

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>FAQ</h2>
        <div className={styles.faqGrid}>
          {faqs.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
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
