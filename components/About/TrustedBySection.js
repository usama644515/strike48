import styles from './TrustedBySection.module.css';

const TrustedBySection = () => {
  const companies = [
    { name: "EURAZEO", logo: "E" },
    { name: "TCV", logo: "T" },
    { name: "Georgian", logo: "G" },
    { name: "KIRQ VEN TUNEE24", logo: "K" }
  ];

  return (
    <section className={styles.trustedBy}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>TRUSTED BY INDUSTRY LEADERS</h2>
          <div className={styles.divider}></div>
          
          <div className={styles.companiesGrid}>
            {companies.map((company, index) => (
              <div key={index} className={styles.companyCard}>
                <div className={styles.companyLogo}>
                  {company.logo}
                </div>
                <span className={styles.companyName}>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;