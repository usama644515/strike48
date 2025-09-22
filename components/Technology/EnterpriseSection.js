import FeatureCard from './FeatureCard';
import styles from './EnterpriseSection.module.css';

const EnterpriseSection = () => {
  const features = [
    {
      title: "MSSP APIs & Cross-Domain Dashboards",
      description: "Multi-tenant management, usage analytics, and white-label integration for service providers.",
      icon: "📊"
    },
    {
      title: "Role-Based Permissions",
      description: "Assign agents to roles, manage domain hierarchies, and inherit configurations across tenants.",
      icon: "🔐"
    },
    {
      title: "Webhooks & Connectors",
      description: "Seamlessly trigger events from external systems and enrich workflows with third-party data.",
      icon: "🔗"
    },
    {
      title: "Mobile Access",
      description: "Stay connected with mobile approvals, push notifications, and on-the-go monitoring.",
      icon: "📱"
    }
  ];

  return (
    <section className={styles.enterprise}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>MSSP/Enterprise-Ready by Design</h2>
        <p className={styles.sectionDescription}>
          Our roadmap ensures Strike48 can operate in the most demanding environments:
        </p>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;