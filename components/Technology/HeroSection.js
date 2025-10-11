// components/HeroSection.js
import { Database, Search, Bell, Workflow, Shield, Zap, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const pillars = [
    {
      icon: Database,
      title: "Ingestion: Bring in Any Data",
      description: "Our collectors are self-healing, auto-scaling, and secure by design.",
      features: [
        "No lost packets, even under stress",
        "Automatic recovery from broken connections or API changes",
        "Continuous monitoring and instant patching for CVEs",
      ],
      impact:
        "Analysts no longer waste cycles troubleshooting ingestion. One customer reported going from lacking visibility, to enabling them to detect phishing campaigns quicker.",
    },
    {
      icon: Search,
      title: "Query: Search and Understand Instantly",
      description: "With Strike48, you don't need to write complex code to ask complex questions.",
      features: [
        "Query petabyte-scale datasets in real time",
        "Use natural language instead of syntax",
        "Explore with drag-and-drop dashboards and visual tools",
      ],
      impact:
        "Teams investigating insider threats used Prospector Studio to confirm malicious activity, catching users with suspicious connections. The ability to pivot from raw logs to conclusive evidence in minutes turns investigations into outcomes.",
    },
    {
      icon: Bell,
      title: "Alert: Know the Moment It Matters",
      description: "Our platform turns queries into real-time, intelligent alerts.",
      features: [
        "Multi-condition rules trigger within milliseconds of data ingestion",
        "AI recommends context-aware thresholds to reduce noise",
        "Hundreds of pre-built detection templates accelerate time-to-value",
      ],
      impact:
        "One SOC used Strike48 AI Assist to find log sources with no alerts—then automatically generated 50 high-value alerts in minutes. What once required days of manual rule-building now happens in a single session.",
    },
    {
      icon: Workflow,
      title: "Orchestration & Response: Automate Action",
      description: "Strike48 integrates deeply with SOAR, ticketing, and collaboration systems.",
      features: [
        "Automate agent-to-agent workflows",
        "Keep humans in the loop with role-based orchestration",
        "Trigger third-party responses via webhooks and connectors",
      ],
      impact:
        "Customers who had lost faith in SOAR due to constant breakages said AI-driven orchestration restored their confidence. Automated workflows now adapt to API changes and execute consistently, analysts trust the system again.",
    },
  ]

  const differentiators = [
    {
      icon: Shield,
      title: "Purpose-Built for Security Data",
      description:
        "Not a generic chatbot. It understands threat hunting, log analysis, and compliance reporting natively.",
    },
    {
      icon: Zap,
      title: "Native Devo Integration",
      description:
        "Zero-friction access to your existing data, permissions, and controls—no duplication, no extra integrations.",
    },
    {
      icon: Users,
      title: "Contextual Intelligence",
      description:
        "Learns from your own environment, remembers past incidents, and builds organizational knowledge into every investigation.",
    },
    {
      icon: TrendingUp,
      title: "Time-to-Value Acceleration",
      description:
        "Junior analysts perform like veterans, while senior staff focus on strategy instead of repetitive tasks.",
    },
  ]

  const outcomes = [
    "Faster Threat Intelligence",
    "Smarter SOC Content Creation",
    "More Confident Response",
    "Better Risk Analysis",
  ]

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image src="/technology-background-bw.png" alt="" fill className={styles.heroImage} priority />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Strike48 SOC Technology</h1>
            <h2 className={styles.heroSubtitle}>Turning Data Into Action</h2>
            <p className={styles.heroDescription}>
              Security teams are drowning in data. Alerts go uninvestigated, new log sources add complexity, and SOAR
              systems often break under the weight of constant API changes. Analysts spend more time wrangling data than
              defending against threats.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introduction}>
        <div className={styles.introductionContent}>
          <p className={styles.introductionText}>
            <span className={styles.introductionHighlight}>Strike48's Prospector Studio</span> changes that equation.
            Built on the industry's most reliable ingestion engine and enhanced with AI-driven assistants, Prospector
            Studio transforms your raw security data into clear, actionable insights, at speed and at scale.
          </p>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className={styles.pillars}>
        <div className={styles.pillarsContainer}>
          <h2 className={styles.pillarsTitle}>
            The Four Pillars of Our Technology
          </h2>
          <p className={styles.pillarsDescription}>
            Our comprehensive platform covers every aspect of security operations, from data ingestion to automated
            response.
          </p>

          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div key={index} className={styles.pillarCard}>
                  <div className={styles.pillarHeader}>
                    <div className={styles.pillarIcon}>
                      <Icon className={styles.icon} />
                    </div>
                    <div>
                      <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                      <p className={styles.pillarDescription}>{pillar.description}</p>
                    </div>
                  </div>

                  <ul className={styles.featuresList}>
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <CheckCircle className={styles.featureIcon} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.impactSection}>
                    <p className={styles.impactLabel}>Customer Impact:</p>
                    <p className={styles.impactText}>{pillar.impact}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className={styles.differentiators}>
        <div className={styles.differentiatorsContainer}>
          <h2 className={styles.differentiatorsTitle}>
            What Sets Prospector Studio Apart
          </h2>

          <div className={styles.differentiatorsGrid}>
            {differentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className={styles.differentiatorItem}>
                  <div className={styles.differentiatorIcon}>
                    <Icon className={styles.diffIcon} />
                  </div>
                  <h3 className={styles.differentiatorTitle}>{item.title}</h3>
                  <p className={styles.differentiatorDescription}>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Customer Outcomes Section */}
      <section className={styles.outcomes}>
        <div className={styles.outcomesContainer}>
          <h2 className={styles.outcomesTitle}>Customer Outcomes</h2>

          <div className={styles.outcomesGrid}>
            {outcomes.map((outcome, index) => (
              <div key={index} className={styles.outcomeCard}>
                <CheckCircle className={styles.outcomeIcon} />
                <p className={styles.outcomeText}>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Line / CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>The Bottom Line</h2>
            <p className={styles.ctaText}>
              Strike48's Prospector Studio cleans up your data mess. It ingests everything reliably, lets you explore
              and query without barriers, alerts you only when it matters, and orchestrates actions automatically.
            </p>
            <p className={styles.ctaText}>
              The result: a staffing multiplier that makes your team more productive, reduces mean time to detect and
              respond, and delivers ROI you can measure in reduced false positives, faster investigations, and stronger
              compliance reporting.
            </p>
            <p className={styles.ctaHighlight}>
              Strike48's Prospector Studio doesn't just answer questions. It transforms how you work with your data.
            </p>
            <Link
              href="/contact"
              className={styles.ctaButton}
            >
              Get Started Today
              <ArrowRight className={styles.ctaIcon} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}