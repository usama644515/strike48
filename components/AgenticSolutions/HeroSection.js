"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import styles from './AgenticSolutions.module.css'

export default function HeroSection() {
  const ArrowRight = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={styles.heroTitle}
          >
            Enterprise-Grade Agentic Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className={styles.heroDescription}
          >
            Purpose-built AI agents for your most critical business functions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className={styles.heroButtonContainer}
          >
            <div className={styles.buttonWrapper}>
              <Link href="/case-studies" className={styles.heroButton}>
                <span>Explore Use Cases</span>
                <ArrowRight />
              </Link>
              <div className={styles.buttonReflection} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}