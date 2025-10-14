"use client"

import { useState, useEffect, useRef } from "react"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from '../styles/testimonials.module.css'

const testimonials = [
  {
    id: 1,
    quote: "We tasked AI Assist with hunting for a phishing campaign based on a single email. It tracked down the phishing email our analyst recently received, AND it tied it to other targets who also received phishing emails with SLIGHTLY different subject lines and senders.",
    company: "TE Connectivity",
  },
  {
    id: 2,
    quote: "A customer asked us about data exfiltration risks in Salesforce, elevated privileges, admin accounts, and so on. I turned to AI Assist for a risk analysis and got a ton of excellent information and reports back. I sent the information to our SOC, and have a meeting with the customer in under an hour.",
    company: "Deepdesk",
  },
  {
    id: 3,
    quote: "We are running a Purple Teams exercise and are investigating a suspicious web connection to an address in North Korea. The user was questioned and denied the action, but after a preliminary investigation, the analyst was not so sure. He asked AI Assist to investigate the event, and after querying the tables, the Analyst and AI Assist came to the same conclusion: the user lied!",
    company: "TE Connectivity",
  },
  {
    id: 4,
    quote: "One of the biggest tasks for SOC teams is Alert generation and testing. Log Sources with no alerts cost resources and provide no value! We asked AI Assist to identify any log sources that had no alerts associated with them. Not only did it identify the new sources but a collection of existing log sources! We tasked AI Assist with generating alerts for all these identified log sources and shortly we had 50 new alerts created and ready for validation!!",
    company: "Ibanera",
  },
  {
    id: 5,
    quote: "Seeing a rise in Scattered Spider attacks targeting our teams, I asked AI Assist to investigate these events by listing all users who had more than 10 MFA prompts in the last few days. I received a very thorough summary of users who fit the criteria, as well as excellent follow-up suggestions and priority of actions. Very good!",
    company: "CSG",
  },
  {
    id: 6,
    quote: "Thanks for the update! I tested it out and it's absolutely AMAZING, feels like having my own little SOC minions at work.",
    company: "Vitra Health",
  },
]

function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={`${styles.card} ${className || ''}`}
      {...props}
    />
  )
}

export default function TestimonialsPage() {
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]
  const [currentIndex, setCurrentIndex] = useState(testimonials.length)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const containerRef = useRef(null)

  const handleTransitionEnd = () => {
    if (!isTransitioning) return

    if (currentIndex >= testimonials.length * 2) {
      setIsTransitioning(false)
      requestAnimationFrame(() => {
        setCurrentIndex(testimonials.length)
        requestAnimationFrame(() => {
          setIsTransitioning(true)
        })
      })
    }
    else if (currentIndex < testimonials.length) {
      setIsTransitioning(false)
      requestAnimationFrame(() => {
        setCurrentIndex(testimonials.length * 2 - 1)
        requestAnimationFrame(() => {
          setIsTransitioning(true)
        })
      })
    }
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      goToNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [currentIndex, isPaused])

  const goToNext = () => {
    setIsPaused(true)
    setCurrentIndex((prev) => prev + 1)
    setTimeout(() => setIsPaused(false), 500)
  }

  const goToPrevious = () => {
    setIsPaused(true)
    setCurrentIndex((prev) => prev - 1)
    setTimeout(() => setIsPaused(false), 500)
  }

  const goToSlide = (index) => {
    setIsPaused(true)
    setCurrentIndex(testimonials.length + index)
    setTimeout(() => setIsPaused(false), 500)
  }

  const getScale = (index) => {
    const distance = Math.abs(index - currentIndex)
    if (distance === 0) return 1.08
    return 1.0
  }

  const getOpacity = (index) => {
    const distance = Math.abs(index - currentIndex)
    if (distance === 0) return 1
    if (distance === 1) return 0.85
    return 0.4
  }

  const cardWidth = 400
  const gap = 32

  return (
    <div className={styles.container}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Client Success Stories</h1>
          <p className={styles.heroDescription}>
            Discover how leading organizations are transforming their log data into actionable insights with Strike48's
            AI-powered platform.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className={styles.carouselSection}>
        <div className={styles.carouselContainer} style={{ maxWidth: `${cardWidth * 3 + gap * 2}px` }}>
          <div
            ref={containerRef}
            className={styles.carousel}
            style={{
              transform: `translateX(calc(50% - ${cardWidth / 2}px - ${currentIndex * (cardWidth + gap)}px))`,
              transition: isTransitioning ? "transform 700ms ease-in-out" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={styles.carouselItem}
                style={{
                  width: `${cardWidth}px`,
                  marginRight: `${gap}px`,
                  transform: `scale(${getScale(index)})`,
                  opacity: getOpacity(index),
                  transition: "all 700ms ease-in-out",
                }}
              >
                <Card className={styles.testimonialCard}>
                  <div className={styles.cardContent}>
                    <svg 
                      className={styles.quoteIcon} 
                      width="40" 
                      height="40" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4zm-12 9v-8h-2v-6h6v8h-4v6h-2zm8 0v-8h-2v-6h6v8h-4v6h-2z"/>
                    </svg>
                    <p className={styles.quoteText}>{testimonial.quote}</p>
                    <div className={styles.companyBadge}>
                      {testimonial.company}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className={styles.navButton}
          style={{ left: '16px' }}
          aria-label="Previous testimonial"
        >
          <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button
          onClick={goToNext}
          className={styles.navButton}
          style={{ right: '16px' }}
          aria-label="Next testimonial"
        >
          <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Dot indicators */}
        <div className={styles.dotsContainer}>
          {testimonials.map((_, index) => {
            const isActive = currentIndex % testimonials.length === index
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.dot} ${isActive ? styles.dotActive : ''}`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={isActive ? "true" : "false"}
              />
            )
          })}
        </div>
      </section>

      <Footer />
    </div>
  )
}