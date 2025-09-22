import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    "Threat Detection",
    "Fraud Identification",
    "Compliance Risk Analysis",
    "Automated Workflows"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span>AI-Powered Platform</span>
          </div>
          <h1 className={styles.title}>
            Customized AI Personas and 
            <span className={styles.highlight}> Agent-to-Agent</span> Automation
          </h1>
          <p className={styles.description}>
            Use AI to unlock the value of log data for your entire organization - powered by an MCP Copilot, RAG + Knowledge Graph Persona, and Agent-to-Agent workflows - uncover and track 
            <span className={styles.rotatingFeature}> {features[currentFeature]}</span>, and more.
          </p>
          
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              Get Started Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.secondaryButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Watch Demo
            </button>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>99%</span>
              <span className={styles.statLabel}>Accuracy</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Monitoring</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Integrations</span>
            </div>
          </div>
        </div>
        
        <div className={styles.iframeContainer}>
          <div className={styles.dashboardPreview}>
            <div className={styles.dashboardHeader}>
              <div className={styles.dashboardControls}>
                <span className={styles.controlRed}></span>
                <span className={styles.controlYellow}></span>
                <span className={styles.controlGreen}></span>
              </div>
              <div className={styles.dashboardTitle}>AI Security Dashboard</div>
            </div>
            
            <div className={styles.dashboardContent}>
              <div className={styles.graphContainer}>
                <div className={styles.graph}>
                  <div className={styles.graphLine} style={{height: '60%'}}></div>
                  <div className={styles.graphLine} style={{height: '45%'}}></div>
                  <div className={styles.graphLine} style={{height: '75%'}}></div>
                  <div className={styles.graphLine} style={{height: '35%'}}></div>
                  <div className={styles.graphLine} style={{height: '65%'}}></div>
                  <div className={styles.graphLine} style={{height: '50%'}}></div>
                </div>
                <div className={styles.graphLabels}>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>
              </div>
              
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>128</span>
                  <span className={styles.metricLabel}>Threats Detected</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>97%</span>
                  <span className={styles.metricLabel}>Accuracy</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>24/7</span>
                  <span className={styles.metricLabel}>Active Monitoring</span>
                </div>
              </div>
              
              <div className={styles.agents}>
                <div className={styles.agent}>
                  <div className={styles.agentIcon}>AI</div>
                  <div className={styles.agentInfo}>
                    <span className={styles.agentName}>Security Agent</span>
                    <span className={styles.agentStatus}>Active</span>
                  </div>
                </div>
                <div className={styles.agent}>
                  <div className={styles.agentIcon}>ML</div>
                  <div className={styles.agentInfo}>
                    <span className={styles.agentName}>ML Analyst</span>
                    <span className={styles.agentStatus}>Processing</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.pulsingEffect}></div>
          </div>
        </div>
      </div>
      
      <div className={styles.backgroundElements}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </section>
  );
};

export default Hero;