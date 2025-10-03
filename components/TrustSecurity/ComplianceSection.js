import styles from './ComplianceSection.module.css';

const ComplianceSection = () => {
  return (
    <section className={styles.compliance}>
      <div className={styles.container}>
        <div className={styles.complianceContent}>
          <div className={styles.complianceBadge}>
            <div className={styles.badgeIcon}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12L11 14L15 10" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.badgeTitle}>GDPR, SOC2, SOC3</h3>
            <p className={styles.badgeDescription}>
              We maintain the highest compliance standards to protect your data and ensure regulatory adherence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;