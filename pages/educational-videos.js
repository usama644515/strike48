"use client"

import { useState, useEffect, useRef } from "react"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from '../styles/EducationalVideos.module.css'

const videos = [
  {
    id: 1,
    category: "Platform Overview",
    title: "Strike48 Platform Overview: From Data to Insights",
    description: "Get a comprehensive walkthrough of the Strike48 platform and see how it transforms raw log data...",
    date: "Dec 18, 2024",
    thumbnail: styles.thumbnail1,
  },
  {
    id: 2,
    category: "Security",
    title: "Setting Up Your First Security Dashboard",
    description: "Learn how to configure and customize security dashboards to monitor threats and anomalies in...",
    date: "Dec 16, 2024",
    thumbnail: styles.thumbnail2,
  },
  {
    id: 3,
    category: "AI-Machine Learning",
    title: "Advanced Analytics: Machine Learning in Action",
    description: "Discover how Strike48's AI algorithms automatically detect patterns and predict potential...",
    date: "Dec 14, 2024",
    thumbnail: styles.thumbnail3,
  },
]

// SVG Icon Components
const Play = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>
  </svg>
)

const Calendar = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

function Card({ className, ...props }) {
  return (
    <div
      className={`${styles.card} ${className || ''}`}
      {...props}
    />
  )
}

function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
  const baseClass = styles.button
  const variantClass = styles[`button-${variant}`] || ''
  const sizeClass = styles[`button-${size}`] || ''
  
  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${className || ''}`}
      {...props}
    />
  )
}

export default function EducationalVideosPage() {
  return (
    <div className={styles.container}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Knowledge Center</h1>
          <p className={styles.heroDescription}>
            Discover insights, best practices, and expert guidance to maximize your data analytics potential
          </p>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className={styles.videosSection}>
        <div className={styles.videosContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Video Tutorials</h2>
            <p className={styles.sectionDescription}>
              Watch our expert-led tutorials to get the most out of Strike48's powerful analytics platform
            </p>
          </div>

          <div className={styles.videosGrid}>
            {videos.map((video) => (
              <Card key={video.id} className={styles.videoCard}>
                {/* Video Thumbnail with Play Button */}
                <div
                  className={`${styles.videoThumbnail} ${video.thumbnail}`}
                >
                  <div className={styles.playButton}>
                    <Play className={styles.playIcon} />
                  </div>
                </div>

                {/* Video Content */}
                <div className={styles.videoContent}>
                  <div className={styles.videoCategory}>
                    <span className={styles.categoryText}>{video.category}</span>
                  </div>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  <p className={styles.videoDescription}>{video.description}</p>
                  <div className={styles.videoFooter}>
                    <div className={styles.videoDate}>
                      <Calendar className={styles.calendarIcon} />
                      <span>{video.date}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className={styles.watchButton}
                    >
                      Watch Tutorial
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA Section */}
      <section className={styles.supportSection}>
        <div className={styles.supportContainer}>
          <div className={styles.supportContent}>
            <h2 className={styles.supportTitle}>Need Additional Support?</h2>
            <p className={styles.supportDescription}>
              Can't find what you're looking for? Our team is here to help you succeed with Strike48.
            </p>
            <Button
              size="lg"
              className={styles.supportButton}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}