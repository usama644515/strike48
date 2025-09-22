import styles from './ValueProposition.module.css';

const ValueProposition = () => {
  const benefits = [
    {
      value: "200-300%",
      label: "Scalability",
      description: "More clients without proportional staff increases"
    },
    {
      value: "90% +",
      label: "Accuracy",
      description: "Reduction in manual assessment errors"
    },
    {
      value: "70%",
      label: "Speed",
      description: "Faster compliance gap identification"
    },
    {
      value: "Premium",
      label: "Revenue",
      description: "Enable higher-margin compliance services"
    }
  ];

  return (
    <section className={styles.valueProp}>
      <div className={styles.container}>
        <h2 className={styles.title}>Large Enterprise and MSSP Value Proposition</h2>
        <p className={styles.subtitle}>Transform your compliance operations with measurable business impact</p>
        
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefit}>
              <span className={styles.benefitValue}>{benefit.value}</span>
              <h3 className={styles.benefitLabel}>{benefit.label}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;