import FeatureCard from './FeatureCard';
import styles from './FeaturesGrid.module.css';

const FeaturesGrid = () => {
  const features = [
    {
      title: "Alert Processing & Triage",
      description: "Automatically correlate alerts from multiple security tools to reduce false positives and prioritize incidents based on business impact.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      items: [
        "Correlate alerts from SEM, EDR, and network security tools",
        "Apply machine learning to reduce false positive rates by 85%",
        "Prioritize incidents based on asset criticality and business impact",
        "Route alerts to appropriate response teams automatically"
      ]
    },
    {
      title: "Threat Hunting & Analysis",
      description: "Execute automated threat hunting queries and perform behavioral analysis on suspicious users, IPs, and domains.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.253C13.845 4.569 16.085 3.5 18.242 3.5C21.229 3.5 23.5 5.916 23.5 9.191C23.5 14.217 16.621 19.5 12 22.5C7.379 19.5 0.5 14.217 0.5 9.191C0.5 5.916 2.771 3.5 5.758 3.5C7.915 3.5 10.155 4.569 12 6.253Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      items: [
        "Data automated threat hunting queries across multiple data sources",
        "Perform behavioral analysis on users, IPs, and domains",
        "Correlate indicators of compromise (IoCs) with threats intelligence",
        "Generate detailed threat assessment reports"
      ]
    },
    {
      title: "Containment & Response",
      description: "Automatically isolate compromised anomalies and execute predefined containment playbooks for known attack patterns.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16L16 12M12 16L8 12M12 16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      items: [
        "Isolate compromised endpoints from network automatically",
        "Execute predefined containment playbooks for known threats",
        "Coordinate response actions across multiple security tools",
        "Maintain audit trail of all containment actions"
      ]
    },
    {
      title: "Evidence Collection",
      description: "Capture volatile memory and disk images from affected systems while maintaining proper chain of custody.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      items: [
        "Capture volatile memory and disk images from affected systems",
        "Collect and preserve relevant logs maintaining chain of custody",
        "Extract and analyze artifacts from compromised endpoints",
        "Generate forensic reports with technical findings"
      ]
    },
    {
      title: "Communication & Reporting",
      description: "Send real-time notifications to stakeholders and maintain automated incident documentation.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      items: [
        "Send real-time notifications to stakeholders via multiple channels",
        "Maintain automated incident timelines and case documentation",
        "Generate executive briefings tailored to different audiences",
        "Create compliance reports for regulatory requirements"
      ]
    },
    {
      title: "Recovery & Lessons Learned",
      description: "Validate system integrity post-incident and update security controls based on findings.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.8284 14.8284C13.2663 16.3905 10.7337 16.3905 9.17157 14.8284C7.60948 13.2663 7.60948 10.7337 9.17157 9.17157C10.7337 7.60948 13.2663 7.60948 14.8284 9.17157M14.8284 14.8284C16.3905 13.2663 16.3905 10.7337 14.8284 9.17157M14.8284 14.8284L17.6569 17.6569M14.8284 9.17157L17.6569 6.34315M9.17157 9.17157L6.34315 6.34315M9.17157 14.8284L6.34315 17.6569" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      items: [
        "Validate system integrity and security posture post-incident",
        "Update security controls and detection rules based on findings",
        "Generate post-incident reports with improvement recommendations",
        "Update playbooks and procedures based on response effectiveness"
      ]
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              items={feature.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;