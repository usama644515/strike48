import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Header.module.css';

const Header = () => {
  const router = useRouter();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    agentic: false,
    knowledge: false,
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

  // Check if a menu item is active
  const isActive = (href) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  // Check if dropdown contains active item
  const isDropdownActive = (dropdownItems) => {
    return dropdownItems.some(item => isActive(item.href));
  };

  // SVG Icons
  const ChevronDownIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Dropdown menu data
  const dropdownMenus = {
    agentic: [
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' },
      { name: 'Finance', href: '/finance' },
      { name: 'Marketing', href: '/marketing' },
      { name: 'Build your own Agent', href: '/build-your-own-agent' },
    ],
    knowledge: [
      { name: 'Blog', href: '/blog' },
      { name: 'Education Videos', href: '/knowledge-center' },
      { name: 'Agentic Log Management', href: '/agentic-log-management' },
    ],
    strike48: [
      { name: 'About Us', href: '/about' },
      { name: 'Trust & Security', href: '/trust-security' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact Us', href: '/contact' },
    ],
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">
              <Image 
                src="/images/logo.png" 
                alt="Strike48" 
                width={140} 
                height={50}
                className={styles.logoImage}
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            {/* Agentic Solutions Dropdown */}
            <div 
              className={styles.navItem}
              onMouseEnter={() => handleDropdownEnter('agentic')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className={`${styles.dropdownTrigger} ${isDropdownActive(dropdownMenus.agentic) ? styles.active : ''}`}>
                <Link href="">Agentic Solutions</Link>
                <ChevronDownIcon />
              </div>
              {activeDropdown === 'agentic' && (
                <div className={styles.dropdown}>
                  {dropdownMenus.agentic.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.href}
                      className={isActive(item.href) ? styles.active : ''}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/testimonials" 
              className={isActive('/testimonials') ? styles.active : ''}
            >
              Testimonials
            </Link>
            <Link 
              href="/technology" 
              className={isActive('/technology') ? styles.active : ''}
            >
              Technology
            </Link>

            {/* Knowledge Center Dropdown */}
            <div 
              className={styles.navItem}
              onMouseEnter={() => handleDropdownEnter('knowledge')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className={`${styles.dropdownTrigger} ${isDropdownActive(dropdownMenus.knowledge) ? styles.active : ''}`}>
                <Link href="">Knowledge Center</Link>
                <ChevronDownIcon />
              </div>
              {activeDropdown === 'knowledge' && (
                <div className={styles.dropdown}>
                  {dropdownMenus.knowledge.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.href}
                      className={isActive(item.href) ? styles.active : ''}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Strike48 Dropdown */}
            <div 
              className={styles.navItem}
              onMouseEnter={() => handleDropdownEnter('strike48')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className={`${styles.dropdownTrigger} ${isDropdownActive(dropdownMenus.strike48) ? styles.active : ''}`}>
                <Link href="">Strike48</Link>
                <ChevronDownIcon />
              </div>
              {activeDropdown === 'strike48' && (
                <div className={styles.dropdown}>
                  {dropdownMenus.strike48.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.href}
                      className={isActive(item.href) ? styles.active : ''}
                    >
                      {item.name}
                    </Link>
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
                <SearchIcon />
              </button>
              
              {isSearchVisible && (
                <div className={styles.searchBar}>
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className={styles.searchInput}
                  />
                  <button className={styles.searchClose} onClick={toggleSearch}>
                    <CloseIcon />
                  </button>
                </div>
              )}
            </div>
            
            <Link 
              href="/demo" 
              className={`${styles.demoButton} ${isActive('/demo') ? styles.active : ''}`}
            >
              Demo
            </Link>
            <Link 
              href="/get-started" 
              className={`${styles.ctaButton} ${isActive('/get-started') ? styles.active : ''}`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className={styles.menuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className={styles.mobileOverlay} onClick={toggleMobileMenu}></div>
        )}

        {/* Mobile menu drawer */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileNav}>
            {/* Mobile Logo */}
            <div className={styles.mobileLogo}>
              <Link href="/" onClick={toggleMobileMenu}>
                <Image 
                  src="/images/logo.png" 
                  alt="Strike48" 
                  width={140} 
                  height={45}
                  className={styles.logoImage}
                />
              </Link>
            </div>

            <div className={styles.mobileDropdown}>
              <div 
                className={`${styles.mobileDropdownHeader} ${isDropdownActive(dropdownMenus.agentic) ? styles.active : ''}`}
                onClick={() => toggleMobileDropdown('agentic')}
              >
                <span>Agentic Solutions</span>
                <ChevronDownIcon />
              </div>
              {mobileDropdowns.agentic && (
                <div className={styles.mobileDropdownContent}>
                  {dropdownMenus.agentic.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.href} 
                      className={`${styles.mobileDropdownItem} ${isActive(item.href) ? styles.active : ''}`}
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/testimonials" 
              className={`${styles.mobileNavItem} ${isActive('/testimonials') ? styles.active : ''}`}
              onClick={toggleMobileMenu}
            >
              Testimonials
            </Link>
            <Link 
              href="/technology" 
              className={`${styles.mobileNavItem} ${isActive('/technology') ? styles.active : ''}`}
              onClick={toggleMobileMenu}
            >
              Technology
            </Link>

            <div className={styles.mobileDropdown}>
              <div 
                className={`${styles.mobileDropdownHeader} ${isDropdownActive(dropdownMenus.knowledge) ? styles.active : ''}`}
                onClick={() => toggleMobileDropdown('knowledge')}
              >
                <span>Knowledge Center</span>
                <ChevronDownIcon />
              </div>
              {mobileDropdowns.knowledge && (
                <div className={styles.mobileDropdownContent}>
                  {dropdownMenus.knowledge.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.href} 
                      className={`${styles.mobileDropdownItem} ${isActive(item.href) ? styles.active : ''}`}
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.mobileDropdown}>
              <div 
                className={`${styles.mobileDropdownHeader} ${isDropdownActive(dropdownMenus.strike48) ? styles.active : ''}`}
                onClick={() => toggleMobileDropdown('strike48')}
              >
                <span>Strike48</span>
                <ChevronDownIcon />
              </div>
              {mobileDropdowns.strike48 && (
                <div className={styles.mobileDropdownContent}>
                  {dropdownMenus.strike48.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.href} 
                      className={`${styles.mobileDropdownItem} ${isActive(item.href) ? styles.active : ''}`}
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/demo" 
              className={`${styles.mobileNavItem} ${isActive('/demo') ? styles.active : ''}`}
              onClick={toggleMobileMenu}
            >
              Demo
            </Link>
            
            <div className={styles.mobileActions}>
              <Link 
                href="/get-started" 
                className={`${styles.mobileCtaButton} ${isActive('/get-started') ? styles.active : ''}`}
                onClick={toggleMobileMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;