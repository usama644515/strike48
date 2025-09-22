import UseCaseCard from './UseCaseCard';
import styles from './UseCasesGrid.module.css';

const UseCasesGrid = () => {
  const useCases = [
    {
      title: "Automated Access Control Assessment",
      subtitle: "Network Segmentation Monitoring",
      description: "Continuous monitoring of client environments to identify access control violations with instant detection and remediation planning AI-powered detection of network segmentation violations to ensure cardholder data environment isolation",
      frameworks: ["NIST 800-53 AC Family", "PG DSS Rec 1"],
      capabilities: [
        "Excessive privileged access detection (AC-6)",
        "Missing access reviews identification (AC-2)",
        "Unauthorized account creation alerts",
        "Segmentation control validation"
      ],
      metrics: [
        { value: "15min", label: "vs 2-3 days manual" },
        { value: "94%", label: "detection accuracy" }
      ]
    },
    {
      title: "System Monitoring Compliance",
      subtitle: "Security Testing Automation",
      description: "Automated assessment of SEM configuration and monitoring capabilities against S+4 requirements Tracks vulnerability scanning schedules, penetration testing cycles, and file integrity monitoring",
      frameworks: ["NIST 800-53 S+4", "PG DSS Rec 11"],
      capabilities: [
        "SEM log source coverage",
        "Monitoring gap identification",
        "Alert configuration analysis",
        "File integrity monitoring"
      ],
      metrics: [
        { value: "30min", label: "full assessment" },
        { value: "45%", label: "better detection" },
        { value: "90%", label: "issue documentation" },
        { value: "35%", label: "issue remediation" }
      ]
    },
    {
      title: "Configuration Management",
      subtitle: "Cross-Framework Correlation",
      description: "Real-time monitoring of system configurations to identify deviations from approved baselines Intelligent correlation between NIST 800-53 and PCI DSS requirements for optimized remediation",
      frameworks: ["NIST 800-53 CM Family", "Multi-Framework Optimization"],
      capabilities: [
        "Baseline configuration tracking (CM-2)",
        "Change control procedures (CM-3)",
        "Component inventory (CM-8)",
        "Overlapping violation identification",
        "Consolidated remediation planning",
        "Risk-based prioritization"
      ],
      metrics: [
        { value: "99.7%", label: "System coverage" },
        { value: "40%", label: "fewer findings" },
        { value: "55%", label: "time reduction" },
        { value: "30%", label: "cost savings" }
      ]
    }
  ];

  return (
    <section className={styles.useCases}>
      <div className={styles.container}>
        <div className={styles.useCasesGrid}>
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              subtitle={useCase.subtitle}
              description={useCase.description}
              frameworks={useCase.frameworks}
              capabilities={useCase.capabilities}
              metrics={useCase.metrics}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesGrid;