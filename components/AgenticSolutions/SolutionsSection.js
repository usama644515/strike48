"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import styles from './AgenticSolutions.module.css'

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Shield,
      title: "Security",
      description: "AI-driven threat detection and real-time response built with Strike48's Prospector Studio. Protect your enterprise with intelligent security agents that learn and adapt to emerging threats.",
      href: "/security",
      features: ["Real-time threat detection", "Automated incident response", "Predictive security analytics"]
    },
    {
      icon: FileCheck,
      title: "Compliance",
      description: "Automate audit processes, maintain transparency, and adapt instantly to evolving regulations. Ensure continuous compliance across all regulatory frameworks.",
      href: "/compliance",
      features: ["Automated audit trails", "Regulatory monitoring", "Compliance reporting"]
    },
    {
      icon: Users,
      title: "MSSPs",
      description: "Empower Managed Security Service Providers with scalable agentic automation for multi-client oversight and security management.",
      href: "/mssps",
      features: ["Multi-client management", "Scalable automation", "Security oversight"]
    },
    {
      icon: Settings,
      title: "Build Your Own Agent",
      description: "Design, train, and deploy custom agents tailored to your enterprise challenges using our intuitive Prospector Studio platform.",
      href: "/build-your-own-agent",
      features: ["Custom agent design", "No-code platform", "Enterprise integration"]
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className={styles.solutionsSection}>
      <div className={styles.solutionsContainer}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.solutionsGrid}
        >
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <motion.div key={solution.title} variants={itemVariants}>
                <Link href={solution.href} className={styles.solutionCardLink}>
                  <div className={styles.solutionCard}>
                    <div className={styles.solutionIconContainer}>
                      <Icon />
                    </div>

                    <h3 className={styles.solutionTitle}>{solution.title}</h3>

                    <p className={styles.solutionDescription}>
                      {solution.description}
                    </p>

                    {/* <ul className={styles.featuresList}>
                      {solution.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>
                          {feature}
                        </li>
                      ))}
                    </ul> */}

                    <div className={styles.solutionLink}>
                      VIEW DETAILS
                      <ArrowRight />
                    </div>

                    <div className={styles.cardOverlay} />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

// Icon Components
const Shield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FileCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2v6h6M9 15l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Users = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Settings = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)