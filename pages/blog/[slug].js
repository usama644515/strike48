// pages/blog/[slug].js
"use client"

import { useState, useEffect } from "react";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { client } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { Calendar, User, Search, X } from "lucide-react";
import Link from "next/link";
import styles from "./BlogPost.module.css";
import pageStyles from '../../components/Blog/BlogPage.module.css'; // Import BlogPage styles for consistency

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "author": author->name,
  mainImage{asset->{url}},
  "categories": categories[]->{
    title
  },
  publishedAt,
  body
}`;

const postsQuery = `*[_type == "post"] | order(publishedAt desc){
  title,
  slug,
  "author": author->name,
  "authorSlug": author->slug.current,
  "categories": categories[]->{
    title,
    slug
  },
  mainImage{
    asset->{
      url
    }
  },
  publishedAt,
  excerpt
}`;

const categoriesQuery = `*[_type == "category"]{
  title,
  slug,
  "postCount": count(*[_type == "post" && references(^._id)])
} | order(title asc)`;

const authorsQuery = `*[_type == "author"]{
  name,
  slug,
  "postCount": count(*[_type == "post" && references(^._id)])
} | order(name asc)`;

const slugify = (text) => {
  return text
    ? text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
    : '';
};

export default function BlogPost({ post, posts, categories, authors }) {
  const [searchQuery, setSearchQuery] = useState("");

  if (!post) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundText}>Post not found</div>
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
    <div className={pageStyles.pageContainer}>
      <Header />
      <section className={pageStyles.heroSection}>
        <div className={pageStyles.heroContainer}>
          <h1 className={pageStyles.heroTitle}>{post.title}</h1>
          <p className={pageStyles.heroSubtitle}>
            Insights, trends, and expert perspectives on AI-powered solutions for modern enterprises
          </p>
        </div>
      </section>

      <main className={pageStyles.main}>
        <div className={pageStyles.container}>
          <div className={pageStyles.layoutGrid}>
            <div className={pageStyles.sidebarColumn}>
              <div className={pageStyles.searchBox}>
                <div className={pageStyles.searchHeader}>
                  <Search className={pageStyles.searchIcon} />
                  <h3>Search Articles</h3>
                </div>
                <form action="/blog" className={pageStyles.searchInputContainer}>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={pageStyles.searchInput}
                  />
                  {searchQuery && (
                    <button 
                      type="button"
                      onClick={() => setSearchQuery('')} 
                      className={pageStyles.clearSearch}
                    >
                      <X size={16} />
                    </button>
                  )}
                </form>
              </div>

              <div className={pageStyles.categoriesSection}>
                <h3 className={pageStyles.categoriesTitle}>Categories</h3>
                <ul className={pageStyles.categoriesList}>
                  <li className={pageStyles.categoryItem}>
                    <Link
                      href="/blog"
                      className={pageStyles.categoryButton}
                    >
                      All Categories
                      <span className={pageStyles.categoryCount}>({posts.length})</span>
                    </Link>
                  </li>
                  {categories.map((category) => (
                    <li key={category.slug.current} className={pageStyles.categoryItem}>
                      <Link
                        href={`/blog?category=${encodeURIComponent(category.title)}`}
                        className={pageStyles.categoryButton}
                      >
                        {category.title}
                        <span className={pageStyles.categoryCount}>({category.postCount})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={pageStyles.authorsSection}>
                <h3 className={pageStyles.authorsTitle}>Authors</h3>
                <ul className={pageStyles.authorsList}>
                  <li className={pageStyles.authorItem}>
                    <Link
                      href="/blog"
                      className={pageStyles.authorButton}
                    >
                      All Authors
                      <span className={pageStyles.authorCount}>({posts.length})</span>
                    </Link>
                  </li>
                  {authors.map((author) => (
                    <li key={author.slug.current} className={pageStyles.authorItem}>
                      <Link
                        href={`/blog?author=${encodeURIComponent(author.name)}`}
                        className={pageStyles.authorButton}
                      >
                        {author.name}
                        <span className={pageStyles.authorCount}>({author.postCount})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={pageStyles.recentPostsSection}>
                <h3 className={pageStyles.recentPostsTitle}>Recent Posts</h3>
                <div className={pageStyles.recentPostsList}>
                  {posts.slice(0, 3).map((post) => (
                    <div key={post.slug.current} className={pageStyles.recentPostItem}>
                      <Link href={`/blog/${post.slug.current}`} className={pageStyles.recentPostLink}>
                        <h4 className={pageStyles.recentPostTitle}>{post.title}</h4>
                        <span className={pageStyles.recentPostDate}>
                          {new Date(post.publishedAt).toLocaleDateString('en-US')}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={pageStyles.contentColumn}>
              <header className={styles.header}>
                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <Calendar size={16} />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className={styles.metaItem}>
                    <User size={16} />
                    {post.author}
                  </div>
                </div>
              </header>

              {post.mainImage?.asset?.url && (
                <div className={styles.featuredImage}>
                  <img src={post.mainImage.asset.url} alt={post.title} />
                  <div className={styles.imageOverlay} />
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
                          <a href={`#${slugify(heading.title)}`}>{heading.title}</a>
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
                        h2: ({ children }) => <h2 id={slugify(children[0])}>{children}</h2>,
                        h3: ({ children }) => <h3 id={slugify(children[0])}>{children}</h3>,
                        normal: ({ children }) => <p>{children}</p>,
                        blockquote: ({ children }) => <blockquote>{children}</blockquote>,
                      },
                      list: {
                        bullet: ({ children }) => <ul>{children}</ul>,
                        number: ({ children }) => <ol>{children}</ol>,
                      },
                      listItem: {
                        bullet: ({ children }) => <li>{children}</li>,
                        number: ({ children }) => <li>{children}</li>,
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
                            >
                              {children}
                            </a>
                          );
                        },
                      },
                      types: {
                        image: ({ value }) => (
                          <img src={value.asset.url} alt={value.alt || "Image"} />
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

      <section className={pageStyles.newsletterCta}>
        <div className={pageStyles.newsletterCtaContainer}>
          <h2 className={pageStyles.newsletterCtaTitle}>
            Never Miss an Update
          </h2>
          <p className={pageStyles.newsletterCtaDescription}>
            Join thousands of professionals who receive our latest insights, 
            case studies, and industry news directly in their inbox.
          </p>
          <div className={pageStyles.newsletterCtaForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={pageStyles.newsletterCtaInput}
            />
            <button className={pageStyles.newsletterCtaButton}>
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const [post, postsData, categoriesData, authorsData] = await Promise.all([
    client.fetch(postQuery, { slug: params.slug }),
    client.fetch(postsQuery),
    client.fetch(categoriesQuery),
    client.fetch(authorsQuery)
  ]);

  return {
    props: { 
      post: post || null,
      posts: postsData,
      categories: categoriesData,
      authors: authorsData
    },
  };
}