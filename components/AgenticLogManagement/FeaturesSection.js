import styles from './FeaturesSection.module.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="#F0C51C"/>
          <path d="M21 9V7C21 5.9 20.1 5 19 5H18C17.8 5 17.6 5.1 17.5 5.3L16.3 7.1C16.1 7.4 15.7 7.6 15.4 7.6H8.6C8.3 7.6 7.9 7.4 7.7 7.1L6.5 5.3C6.4 5.1 6.2 5 6 5H5C3.9 5 3 5.9 3 7V9C3 10.1 3.9 11 5 11H6C6.2 11 6.4 10.9 6.5 10.7L7.7 8.9C7.9 8.6 8.3 8.4 8.6 8.4H15.4C15.7 8.4 16.1 8.6 16.3 8.9L17.5 10.7C17.6 10.9 17.8 11 18 11H19C20.1 11 21 10.1 21 9Z" fill="#F0C51C"/>
          <path d="M19 13H5C3.9 13 3 13.9 3 15V17C3 18.1 3.9 19 5 19H6C6.2 19 6.4 18.9 6.5 18.7L7.7 16.9C7.9 16.6 8.3 16.4 8.6 16.4H15.4C15.7 16.4 16.1 16.6 16.3 16.9L17.5 18.7C17.6 18.9 17.8 19 18 19H19C20.1 19 21 18.1 21 17V15C21 13.9 20.1 13 19 13Z" fill="#F0C51C"/>
          <path d="M12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18Z" fill="#F0C51C"/>
        </svg>
      ),
      title: "Autonomous Agents",
      description: "AI agents work continuously without human intervention, monitoring and responding to threats 24/7"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V8" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 7.5L16.5 16.5" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5 7.5L7.5 16.5" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Multi-Agent Collaboration",
      description: "Specialized agents collaborate dynamically, each focusing on different aspects of security monitoring"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16H12.01" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Context-Aware Analysis",
      description: "Agents understand your unique environment and business context for relevant threat detection"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#F0C51C" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Real-Time Response",
      description: "Millisecond-level response times for threat containment and mitigation actions"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16H12.01" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 12H12" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H12" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Continuous Learning",
      description: "System improves over time by learning from new threats and your incident responses"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22S20 18 20 12V6L12 2L4 6V12C4 18 12 22 12 22Z" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#F0C51C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Built-in Security Knowledge",
      description: "Pre-trained on security best practices, compliance requirements, and threat intelligence"
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Key Features of Agentic Log Management</h2>
        <p className={styles.subtitle}>Transform your security operations with autonomous AI capabilities</p>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;