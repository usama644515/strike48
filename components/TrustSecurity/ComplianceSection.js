import styles from './ComplianceSection.module.css';

const ComplianceSection = () => {
  return (
    <section className={styles.compliance}>
      <div className={styles.container}>
        <div className={styles.complianceContent}>
          <div className={styles.complianceBadge}>
            <div className={styles.badgeIcon}>🛡️</div>
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