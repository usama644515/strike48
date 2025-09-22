import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logoColumn}>
            <div className={styles.logo}>
              <span>Strike48</span>
              <p className={styles.tagline}>Intelligent Solutions for the Modern Enterprise</p>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className={styles.navColumns}>
            <div className={styles.navColumn}>
              <h3>Agentic Solutions</h3>
              <Link href="/solutions-overview">Overview</Link>
              <Link href="/testimonials">Testimonials</Link>
              <Link href="/technology">Technology</Link>
              <Link href="/knowledge-center">Knowledge Center</Link>
              <Link href="/strike48">Strike48</Link>
            </div>
            
            <div className={styles.navColumn}>
              <h3>Security</h3>
              <Link href="/client-stories">Client Stories</Link>
              <Link href="/our-platform">Our Platform</Link>
              <Link href="/articles-resources">Articles & Resources</Link>
              <Link href="/about-us">About Us</Link>
            </div>
            
            <div className={styles.navColumn}>
              <h3>Marketing</h3>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/webinars">Webinars</Link>
              <Link href="/newsletter">Newsletter</Link>
            </div>
            
            <div className={styles.navColumn}>
              <h3>Build Your Own Agent</h3>
              <Link href="/developer-docs">Developer Docs</Link>
              <Link href="/api-reference">API Reference</Link>
              <Link href="/tutorials">Tutorials</Link>
              <Link href="/community">Community</Link>
            </div>
            
            
          </div>
        </div>
        
        <div className={styles.middleSection}>
          <div className={styles.newsletter}>
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest updates</p>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Strike48™. All Rights Reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/terms">Terms of Service</Link>
            <span className={styles.separator}>|</span>
            <Link href="/privacy">Privacy Policy</Link>
            <span className={styles.separator}>|</span>
            <Link href="/trafficking">Combating Trafficking</Link>
            <span className={styles.separator}>|</span>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;