"use client"

import { useState } from "react"
import Image from "next/image"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from '../styles/Leadership.module.css'

export default function LeadershipPage() {
  const [kenExpanded, setKenExpanded] = useState(false)
  const [timExpanded, setTimExpanded] = useState(false)

  return (
    <div className={styles.container}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Our Leadership</h1>
          <p className={styles.heroDescription}>
            Meet the visionary founders who are transforming how organizations extract value from log data
          </p>
        </div>
      </section>

      {/* Founding Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyContainer}>
          <div className={styles.storyContent}>
            <h2 className={styles.storyTitle}>The Strike48 Story</h2>
            <div className={styles.storyText}>
              <p>
                Ken Naumann and Tim Leehealy founded Strike48 based on one simple observation: companies spend way too
                much money trying to extract value from logs and get way too little in return. There are no short of
                five magic quadrants dedicated to log value extraction. From the SIEM market to observability and
                compliance every major company has more than just a few groups dedicated to mining logs for business
                insight. Such a fragmented approach simply makes no sense given the minimal variance between the
                underlying logs being utilized. There must be a better approach?
              </p>
              <p>
                The idea of delivering just another company claiming to have developed an autonomous SOC or AI driven
                observability is simply a bridge too far. After all as Mr Leehealey frequently says:{" "}
                <em>
                  "I can't get ChatGPT to build me a PowerPoint slide I am happy with, in what world would someone be
                  willing to turn over a key IT function to it?"
                </em>{" "}
                The answer is, there is no such world.
              </p>
              <p>
                Determined to solve this problem once and for all, Ken and Tim assembled a team of AI developers and
                researchers and tasked them with one simple problem: build a solution that can extract value from logs
                regardless of the business problem being addressed. The result is Strike48's Prospector Studio and a
                company dedicated to delivering a no-code agent builder with the tooling and the audit trails, and
                verification capabilities, necessary to ensure customers can solve all log-based problems and do so with
                confidence and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profiles Section */}
      <section className={styles.profilesSection}>
        <div className={styles.profilesContainer}>
          <div className={styles.profilesGrid}>
            {/* Ken Naumann Profile */}
            <div className={styles.profile}>
              <div className={styles.imageContainer}>
                <Image
                  src="/ken-naumann-headshot.jpg"
                  alt="Ken Naumann"
                  fill
                  className={styles.profileImage}
                />
              </div>
              <h3 className={styles.profileName}>Ken Naumann</h3>
              <p className={styles.profileTitle}>Founder & Chief Executive Officer</p>

              <div
                className={`${styles.bioContent} ${kenExpanded ? styles.bioExpanded : styles.bioCollapsed}`}
              >
                <div className={styles.bioText}>
                  <p>
                    Ken Naumann leads Strike48 with the rare combination of visionary leadership and battle-tested
                    cybersecurity expertise that today's security landscape demands. As CEO, he brings a distinguished
                    track record of transforming high-potential companies into market leaders across public markets,
                    private equity, and venture-backed environments.
                  </p>
                  <p>
                    Prior to founding Strike48, Ken's tenure as CEO of NetWitness positioned him at the epicenter of
                    the evolving threat detection landscape, where he gained firsthand experience navigating the
                    sophisticated challenges that keep CISOs awake at night. This frontline perspective informs
                    Strike48's innovation strategy and ensures our solutions address the true pain points facing
                    enterprise security teams.
                  </p>
                  <p>
                    Ken's approach transcends traditional technology leadership; he has systematically decoded the
                    complex relationship between security operations challenges and business outcomes. This insight
                    allows Strike48 to deliver solutions that not only detect threats more effectively but
                    fundamentally transform how security teams operate in an increasingly hostile digital environment.
                  </p>
                  <p>
                    As both CEO and Board member, Ken has architected Strike48's strategic roadmap with precision,
                    identifying emerging market opportunities before they become mainstream and positioning the
                    company to capitalize on shifts in the security landscape. His forward-thinking leadership has
                    established Strike48 as the partner of choice for organizations seeking to revolutionize their
                    security operations capabilities.
                  </p>
                  <p>
                    Under Ken's stewardship, Strike48 continues to push the boundaries of what's possible in threat
                    detection and response, creating measurable competitive advantages for our customers in an arena
                    where seconds matter and excellence is non-negotiable.
                  </p>
                </div>
                <button
                  className={styles.linkedinButton}
                >
                  <LinkedinIcon className={styles.linkedinIcon} />
                  Connect on LinkedIn
                </button>
              </div>

              <button
                onClick={() => setKenExpanded(!kenExpanded)}
                className={styles.bioToggle}
              >
                {kenExpanded ? (
                  <>
                    Hide Bio
                    <ChevronUpIcon className={styles.toggleIcon} />
                  </>
                ) : (
                  <>
                    Read Bio
                    <ChevronDownIcon className={styles.toggleIcon} />
                  </>
                )}
              </button>
            </div>

            {/* Tim Leehealy Profile */}
            <div className={styles.profile}>
              <div className={styles.imageContainer}>
                <Image
                  src="/tim-leehealy-headshot.jpg"
                  alt="Tim Leehealy"
                  fill
                  className={styles.profileImage}
                />
              </div>
              <h3 className={styles.profileName}>Tim Leehealy</h3>
              <p className={styles.profileTitle}>
                Founder & Vice President, Strategy and Operations
              </p>

              <div
                className={`${styles.bioContent} ${timExpanded ? styles.bioExpanded : styles.bioCollapsed}`}
              >
                <div className={styles.bioText}>
                  <p>
                    Tim Leehealy represents a rare breed of technology executive, one who seamlessly bridges the
                    worlds of financial strategy and technological innovation. As Strike48's Vice President of
                    Strategy and Operations, Tim brings a uniquely valuable perspective that has repeatedly translated
                    into market-defining products and exceptional business results.
                  </p>
                  <p>
                    Beginning his career at JPMorgan Investment Management, he mastered the rigorous analytical
                    frameworks that continue to inform his approach to business strategy. Technology needs to deliver
                    real financial impact or it is just another pointless checkbox waiting to be replaced by whatever
                    is next.
                  </p>
                  <p>
                    His subsequent executive leadership as Chief Marketing and Business Development Officer at
                    Guidance Software and as CEO and Chairman at AccessData represents more than impressive titles; it
                    demonstrates Tim's ability to orchestrate complex business transformations in competitive
                    technology markets. This hands-on experience navigating the enterprise security landscape provides
                    Strike48 with strategic insights that transcend typical market analysis.
                  </p>
                  <p>
                    At Strike48, Tim has engineered the company's operational framework to maximize innovation
                    velocity while maintaining disciplined execution. His dual expertise in finance and technology has
                    proven instrumental in aligning Strike48's product roadmap with emerging market opportunities that
                    deliver exceptional ROI for customers.
                  </p>
                  <p>
                    His leadership exemplifies Strike48's commitment to delivering not just cutting-edge technology,
                    but measurable business impact for our customers in an increasingly complex threat landscape.
                  </p>
                </div>
                <button
                  className={styles.linkedinButton}
                >
                  <LinkedinIcon className={styles.linkedinIcon} />
                  Connect on LinkedIn
                </button>
              </div>

              <button
                onClick={() => setTimExpanded(!timExpanded)}
                className={styles.bioToggle}
              >
                {timExpanded ? (
                  <>
                    Hide Bio
                    <ChevronUpIcon className={styles.toggleIcon} />
                  </>
                ) : (
                  <>
                    Read Bio
                    <ChevronDownIcon className={styles.toggleIcon} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// SVG Icon Components
const LinkedinIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const ChevronDownIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

const ChevronUpIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <polyline points="18 15 12 9 6 15"/>
  </svg>
)