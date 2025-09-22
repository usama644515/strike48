import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    agentic: false,
    strike48: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const handleDropdownEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Dropdown menu data
  const dropdownMenus = {
    agentic: [
      { name: 'Overview', href: '/agentic-solutions/overview' },
      { name: 'Features', href: '/agentic-solutions/features' },
      { name: 'Use Cases', href: '/agentic-solutions/use-cases' },
      { name: 'Pricing', href: '/agentic-solutions/pricing' },
    ],
    strike48: [
      { name: 'About Strike48', href: '/strike48/about' },
      { name: 'Methodology', href: '/strike48/methodology' },
      { name: 'Case Studies', href: '/strike48/case-studies' },
      { name: 'Results', href: '/strike48/results' },
    ],
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">Strike48</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            {/* Agentic Solutions Dropdown */}
            <div 
              className={styles.navItem}
              onMouseEnter={() => handleDropdownEnter('agentic')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className={styles.dropdownTrigger}>
                <Link href="/agentic-solutions">Agentic Solutions</Link>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {activeDropdown === 'agentic' && (
                <div className={styles.dropdown}>
                  {dropdownMenus.agentic.map((item) => (
                    <Link key={item.name} href={item.href}>{item.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/testimonials">Testimonials</Link>
            <Link href="/technology">Technology</Link>
            <Link href="/knowledge-center">Knowledge Center</Link>

            {/* Strike48 Dropdown */}
            <div 
              className={styles.navItem}
              onMouseEnter={() => handleDropdownEnter('strike48')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className={styles.dropdownTrigger}>
                <Link href="/strike48">Strike48</Link>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {activeDropdown === 'strike48' && (
                <div className={styles.dropdown}>
                  {dropdownMenus.strike48.map((item) => (
                    <Link key={item.name} href={item.href}>{item.name}</Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right side actions */}
          <div className={styles.actions}>
            {/* Search functionality */}
            <div className={styles.searchContainer}>
              <button 
                className={styles.searchIcon}
                onClick={toggleSearch}
                aria-label="Search"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {isSearchVisible && (
                <div className={styles.searchBar}>
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className={styles.searchInput}
                  />
                  <button className={styles.searchClose} onClick={toggleSearch}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
            
            <Link href="/demo" className={styles.demoButton}>Demo</Link>
            <Link href="/get-started" className={styles.ctaButton}>Get Started</Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className={styles.menuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={isMobileMenuOpen ? styles.open : ''}></span>
            <span className={isMobileMenuOpen ? styles.open : ''}></span>
            <span className={isMobileMenuOpen ? styles.open : ''}></span>
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className={styles.mobileOverlay} onClick={toggleMobileMenu}></div>
        )}

        {/* Mobile menu drawer */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileNav}>
            <div className={styles.mobileDropdown}>
              <div 
                className={styles.mobileDropdownHeader}
                onClick={() => toggleMobileDropdown('agentic')}
              >
                <span>Agentic Solutions</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className={mobileDropdowns.agentic ? styles.rotated : ''}
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {mobileDropdowns.agentic && (
                <div className={styles.mobileDropdownContent}>
                  {dropdownMenus.agentic.map((item) => (
                    <Link key={item.name} href={item.href} className={styles.mobileDropdownItem}>{item.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/testimonials" className={styles.mobileNavItem} onClick={toggleMobileMenu}>Testimonials</Link>
            <Link href="/technology" className={styles.mobileNavItem} onClick={toggleMobileMenu}>Technology</Link>
            <Link href="/knowledge-center" className={styles.mobileNavItem} onClick={toggleMobileMenu}>Knowledge Center</Link>

            <div className={styles.mobileDropdown}>
              <div 
                className={styles.mobileDropdownHeader}
                onClick={() => toggleMobileDropdown('strike48')}
              >
                <span>Strike48</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className={mobileDropdowns.strike48 ? styles.rotated : ''}
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {mobileDropdowns.strike48 && (
                <div className={styles.mobileDropdownContent}>
                  {dropdownMenus.strike48.map((item) => (
                    <Link key={item.name} href={item.href} className={styles.mobileDropdownItem}>{item.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/demo" className={styles.mobileNavItem} onClick={toggleMobileMenu}>Demo</Link>
            
            <div className={styles.mobileActions}>
              <Link href="/get-started" className={styles.mobileCtaButton} onClick={toggleMobileMenu}>Get Started</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;