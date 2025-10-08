"use client"

import { motion } from "framer-motion"
import styles from './AgenticSolutions.module.css'

export default function StatsSection() {
  const stats = [
    {
      label: "Faster threat detection",
      description: "Real-time AI analysis",
      value: "90%"
    },
    {
      label: "Compliance accuracy",
      description: "Automated audit processes",
      value: "99.9%"
    },
    {
      label: "Cost reduction",
      description: "Operational efficiency",
      value: "60%"
    },
    {
      label: "Autonomous monitoring",
      description: "Always-on protection",
      value: "24/7"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.statsGrid}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={styles.statCard}
            >
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statDescription}>{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.ctaContent}
        >
          <h2 className={styles.ctaTitle}>
            Ready to Transform Your Business?
          </h2>
          <p className={styles.ctaDescription}>
            Get started with Strike48's Agentic AI Solutions today and experience the future of enterprise automation.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/get-started" className={styles.ctaButtonPrimary}>
              Get Started
              <ArrowRight />
            </a>
            <a href="/demo" className={styles.ctaButtonSecondary}>
              Request Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)