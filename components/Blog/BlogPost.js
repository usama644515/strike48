"use client"

import { useState, useEffect } from "react";
import { Calendar, User, Search, X, ChevronLeft, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import styles from "./BlogPost.module.css";

const slugify = (text) => {
  return text
    ? text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
    : '';
};

export default function BlogPost({ post, posts, categories, authors }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundText}>Post not found</div>
        <Link href="/blog" className={styles.backButton}>
          <ChevronLeft className={styles.backIcon} />
          Back to Blog
        </Link>
      </div>
    );
  }

  const headings = post.body
    ? post.body.filter(block => block._type === 'block' && (block.style === 'h2' || block.style === 'h3'))
        .map(block => ({
          level: block.style,
          title: block.children[0]?.text || ''
        }))
    : [];

  return (
    <div className={styles.pageContainer}>
      {/* Mobile Sidebar Toggle */}
      {/* {isMobile && (
        <button 
          className={styles.sidebarToggle}
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={20} />
          <span>Filters</span>
        </button>
      )} */}

      {/* Mobile Sidebar Overlay */}
      {isMobile && isSidebarOpen && (
        <div 
          className={styles.sidebarOverlay}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <Link href="/blog" className={styles.backLink}>
            <ChevronLeft className={styles.backIcon} />
            Back to Blog
          </Link>
          <h1 className={styles.heroTitle}>{post.title}</h1>
          <p className={styles.heroSubtitle}>
            Insights, trends, and expert perspectives on AI-powered solutions for modern enterprises
          </p>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.layoutGrid}>
            {/* Sidebar Column */}
            <div className={`${styles.sidebarColumn} ${isMobile && isSidebarOpen ? styles.sidebarOpen : ''}`}>
              {/* Mobile Sidebar Header */}
              {isMobile && (
                <div className={styles.sidebarHeader}>
                  <h3>Blog Filters</h3>
                  <button 
                    className={styles.sidebarClose}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>
              )}

              <div className={styles.searchBox}>
                <div className={styles.searchHeader}>
                  <Search className={styles.searchIcon} />
                  <h3>Search Articles</h3>
                </div>
                <div className={styles.searchInputContainer}>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                  />
                  {searchQuery && (
                    <button 
                      type="button"
                      onClick={() => setSearchQuery('')} 
                      className={styles.clearSearch}
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>

              <div className={styles.categoriesSection}>
                <h3 className={styles.categoriesTitle}>Categories</h3>
                <ul className={styles.categoriesList}>
                  <li className={styles.categoryItem}>
                    <Link
                      href="/blog"
                      className={styles.categoryButton}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      All Categories
                      <span className={styles.categoryCount}>({posts.length})</span>
                    </Link>
                  </li>
                  {categories.map((category) => (
                    <li key={category.slug.current} className={styles.categoryItem}>
                      <Link
                        href={`/blog?category=${encodeURIComponent(category.title)}`}
                        className={styles.categoryButton}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        {category.title}
                        <span className={styles.categoryCount}>({category.postCount})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.authorsSection}>
                <h3 className={styles.authorsTitle}>Authors</h3>
                <ul className={styles.authorsList}>
                  <li className={styles.authorItem}>
                    <Link
                      href="/blog"
                      className={styles.authorButton}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      All Authors
                      <span className={styles.authorCount}>({posts.length})</span>
                    </Link>
                  </li>
                  {authors.map((author) => (
                    <li key={author.slug.current} className={styles.authorItem}>
                      <Link
                        href={`/blog?author=${encodeURIComponent(author.name)}`}
                        className={styles.authorButton}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        {author.name}
                        <span className={styles.authorCount}>({author.postCount})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.recentPostsSection}>
                <h3 className={styles.recentPostsTitle}>Recent Posts</h3>
                <div className={styles.recentPostsList}>
                  {posts.slice(0, 5).map((post) => (
                    <div key={post.slug.current} className={styles.recentPostItem}>
                      <Link 
                        href={`/blog/${post.slug.current}`} 
                        className={styles.recentPostLink}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        <h4 className={styles.recentPostTitle}>{post.title}</h4>
                        <span className={styles.recentPostDate}>
                          {new Date(post.publishedAt).toLocaleDateString('en-US')}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className={styles.contentColumn}>
              <header className={styles.postHeader}>
                <div className={styles.postMeta}>
                  <div className={styles.metaItem}>
                    <Calendar className={styles.metaIcon} />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className={styles.metaItem}>
                    <User className={styles.metaIcon} />
                    {post.author}
                  </div>
                </div>
                {post.categories && post.categories.length > 0 && (
                  <div className={styles.postCategories}>
                    {post.categories.map((category, index) => (
                      <span key={index} className={styles.postCategory}>
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {post.mainImage?.asset?.url && (
                <div className={styles.featuredImage}>
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    fill
                    className={styles.featuredImageImg}
                    priority
                  />
                </div>
              )}

              <div className={styles.contentLayout}>
                {headings.length > 0 && (
                  <aside className={styles.toc}>
                    <h3 className={styles.tocTitle}>Table of Contents</h3>
                    <ul className={styles.tocList}>
                      {headings.map((heading, index) => (
                        <li 
                          key={index} 
                          className={heading.level === 'h2' ? styles.tocH2 : styles.tocH3}
                        >
                          <a href={`#${slugify(heading.title)}`} className={styles.tocLink}>
                            {heading.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </aside>
                )}

                <div className={styles.content}>
                  <PortableText
                    value={post.body}
                    components={{
                      block: {
                        h2: ({ children }) => <h2 id={slugify(children?.[0])} className={styles.contentH2}>{children}</h2>,
                        h3: ({ children }) => <h3 id={slugify(children?.[0])} className={styles.contentH3}>{children}</h3>,
                        normal: ({ children }) => <p className={styles.contentParagraph}>{children}</p>,
                        blockquote: ({ children }) => <blockquote className={styles.blockquote}>{children}</blockquote>,
                      },
                      list: {
                        bullet: ({ children }) => <ul className={styles.bulletList}>{children}</ul>,
                        number: ({ children }) => <ol className={styles.numberedList}>{children}</ol>,
                      },
                      listItem: {
                        bullet: ({ children }) => <li className={styles.listItem}>{children}</li>,
                        number: ({ children }) => <li className={styles.listItem}>{children}</li>,
                      },
                      marks: {
                        link: ({ value, children }) => {
                          const target = (value?.href || "").startsWith("http")
                            ? "_blank"
                            : undefined;
                          return (
                            <a
                              href={value?.href}
                              target={target}
                              rel={target === "_blank" ? "noopener noreferrer" : ""}
                              className={styles.contentLink}
                            >
                              {children}
                            </a>
                          );
                        },
                      },
                      types: {
                        image: ({ value }) => (
                          <div className={styles.contentImage}>
                            <img src={value.asset.url} alt={value.alt || "Image"} className={styles.contentImageImg} />
                            {value.alt && <p className={styles.imageCaption}>{value.alt}</p>}
                          </div>
                        ),
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className={styles.newsletterCta}>
        <div className={styles.newsletterCtaContainer}>
          <h2 className={styles.newsletterCtaTitle}>
            Never Miss an Update
          </h2>
          <p className={styles.newsletterCtaDescription}>
            Join thousands of professionals who receive our latest insights, 
            case studies, and industry news directly in their inbox.
          </p>
          <div className={styles.newsletterCtaForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.newsletterCtaInput}
            />
            <button className={styles.newsletterCtaButton}>
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}