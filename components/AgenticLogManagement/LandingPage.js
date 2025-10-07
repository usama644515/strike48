'use client';
import React from "react";
import { motion } from "framer-motion";
import { Shield, GitBranch, Database, Bot, Pickaxe, ArrowRight, CheckCircle2 } from "lucide-react";
import styles from './LandingPage.module.css';

export default function AgenticLogManagementLanding() {
  const handleSectionClick = (e) => {
    // Prevent section click when clicking buttons or links
    if (e.target.closest("a, button")) return;
    window.location.href = "#cta"; // Change to your desired link or section
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero} onClick={handleSectionClick}>
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <div className={styles.heroGrid}>
            
            {/* Text Column */}
            <div className={styles.heroText}>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={styles.heroTitle}
              >
                Agentic Log Management:{" "}
                <span className={styles.accentText}>The Complete Guide (2025)</span>
              </motion.h1>

              <p className={styles.heroDescription}>
                Replace passive dashboards with <span className={styles.boldText}>digital coworkers</span>. 
                Strike48 lets you build agentic teams that ingest, interrogate, and act on logs 
                across security, compliance, observability, and FinOps— all in a single workflow-integrated platform.
              </p>

              {/* Buttons */}
              <div className={styles.heroButtons}>
                <a href="#cta" className={`${styles.primaryButton} ${styles.largeButton}`}>
                  Start Free Trial <ArrowRight className={styles.buttonIcon} />
                </a>

                <a href="#whitepaper" className={`${styles.secondaryButton} ${styles.largeButton}`}>
                  Download Whitepaper
                </a>
              </div>

              {/* Features */}
              <div className={styles.heroFeatures}>
                <div className={styles.featureItem}>
                  <CheckCircle2 className={styles.featureIcon}/> 
                  No hallucinations—answers grounded in your data
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle2 className={styles.featureIcon}/> 
                  Outcome-driven, not storage-driven
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className={styles.heroVisual}>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={styles.heroCard}
              >
                <div className={styles.valueGrid}>
                  <ValueCard icon={<Shield className={styles.cardIcon}/>} title="Reduce Alert Fatigue" subtitle="Correlate & prioritize only what matters." />
                  <ValueCard icon={<Bot className={styles.cardIcon}/>} title="Agent Teams" subtitle="Security, compliance, FinOps, observability." />
                  <ValueCard icon={<Database className={styles.cardIcon}/>} title="Ingest Anything" subtitle="SIEM, data lakes, cloud & app logs." />
                  <ValueCard icon={<GitBranch className={styles.cardIcon}/>} title="Orchestrate Actions" subtitle="Playbooks & workflow automation." />
                </div>

                <div className={styles.prospectorBanner}>
                  <div className={styles.prospectorContent}>
                    <Pickaxe className={styles.prospectorIcon}/>
                    <p className={styles.prospectorText}>
                      <span className={styles.boldText}>Prospector Studio:</span> safely test agents in a low-risk sandbox before production.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, subtitle }) {
  return (
    <div className={styles.valueCard}>
      <div className={styles.valueCardContent}>
        <div className={styles.valueCardIcon}>{icon}</div>
        <div>
          <div className={styles.valueCardTitle}>{title}</div>
          <div className={styles.valueCardSubtitle}>{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
