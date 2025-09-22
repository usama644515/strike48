import styles from './BenefitsSection.module.css';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Speed",
      description: "Reduce response time from 30–45 minutes to 2–3 minutes",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Consistency",
      description: "Standardized response procedures across all incidents",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7V4H20V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 20H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="4" y="7" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Scalability",
      description: "Handle multiple incidents simultaneously without resource constraints",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 17C6 17.7956 6.31607 18.5587 6.87868 19.1213C7.44129 19.6839 8.20435 20 9 20C9.79565 20 10.5587 19.6839 11.1213 19.1213C11.6839 18.5587 12 17.7956 12 17C12 16.2044 11.6839 15.4413 11.1213 14.8787C10.5587 14.3161 9.79565 14 9 14C8.20435 14 7.44129 14.3161 6.87868 14.8787C6.31607 15.4413 6 16.2044 6 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 9C18 9.79565 18.3161 10.5587 18.8787 11.1213C19.4413 11.6839 20.2044 12 21 12C21.7956 12 22.5587 11.6839 23.1213 11.1213C23.6839 10.5587 24 9.79565 24 9C24 8.20435 23.6839 7.44129 23.1213 6.87868C22.5587 6.31607 21.7956 6 21 6C20.2044 6 19.4413 6.31607 18.8787 6.87868C18.3161 7.44129 18 8.20435 18 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 9C18 9.79565 17.6839 10.5587 17.1213 11.1213C16.5587 11.6839 15.7956 12 15 12C14.2044 12 13.4413 11.6839 12.8787 11.1213C12.3161 10.5587 12 9.79565 12 9C12 8.20435 12.3161 7.44129 12.8787 6.87868C13.4413 6.31607 14.2044 6 15 6C15.7956 6 16.5587 6.31607 17.1213 6.87868C17.6839 7.44129 18 8.20435 18 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 17C6 17.7956 5.68393 18.5587 5.12132 19.1213C4.55871 19.6839 3.79565 20 3 20C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.31607 18.5587 0 17.7956 0 17C0 16.2044 0.31607 15.4413 0.87868 14.8787C1.44129 14.3161 2.20435 14 3 14C3.79565 14 4.55871 14.3161 5.12132 14.8787C5.68393 15.4413 6 16.2044 6 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 9L6 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 9L12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Accuracy",
      description: "Eliminate human error in critical response activities",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <h2 className={styles.benefitsTitle}>Key Benefits</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <h3 className={styles.benefitName}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;