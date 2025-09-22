import LegalLink from './LegalLink';
import styles from './LegalSection.module.css';

const LegalSection = () => {
  const legalLinks = [
    "Legal Policies",
    "Privacy Policy",
    "Data Privacy Framework",
    "Technical and Organizational Measures",
    "Data Request Guidelines",
    "Support Services Addendum",
    "Professional Services Addendum",
    "Personal Data Processing",
    "Terms of Service for MSP",
    "Anti-Trafficking Policy",
    "Cookies"
  ];

  return (
    <section className={styles.legal}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Read our:</h2>
        <div className={styles.legalLinks}>
          {legalLinks.map((link, index) => (
            <LegalLink key={index} text={link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalSection;