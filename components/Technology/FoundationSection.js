import FeatureCard from './FeatureCard';
import styles from './FoundationSection.module.css';

const FoundationSection = () => {
  const features = [
    {
      title: "Auto-Rebuild Pipeline",
      description: "Detects upstream API changes and automatically rebuilds collectors, ensuring continuous compatibility and zero downtime.",
      icon: "🔄"
    },
    {
      title: "Zero-Touch Security",
      description: "CVE monitoring and instant patching for bulletproof ingestion.",
      icon: "🛡️"
    },
    {
      title: "Auto-Restart Logic",
      description: "Collectors self-recover from failures (timeouts, broken connections, zero packet flow).",
      icon: "⚡"
    },
    {
      title: "Bulk Upgrades at Scale",
      description: "Upgrade thousands of collectors simultaneously with staged rollouts and automated rollback protection.",
      icon: "📈"
    },
    {
      title: "Health Dashboards",
      description: "Real-time visibility into ingestion, performance, and partial failures.",
      icon: "📊"
    },
    {
      title: "KEDA Scaling",
      description: "Smart, queue-based autoscaling for AWS, GCP, and Azure collectors—reacting instantly to spikes in ingestion.",
      icon: "⚖️"
    }
  ];

  return (
    <section className={styles.foundation}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>The Foundation: Collectors That Never Sleep</h2>
        <p className={styles.sectionDescription}>
          Logs are only valuable if you can reliably ingest them. Our roadmap focuses on making collectors self-sustaining and future-proof.
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

export default FoundationSection;