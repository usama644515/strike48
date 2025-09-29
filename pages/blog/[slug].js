// pages/blog/[slug].js
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { client } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { Calendar, User } from "lucide-react";
import styles from "../../components/Blog/BlogPost.module.css";
import pageStyles from '../../components/Blog/BlogPage.module.css'; // Import BlogPage styles for consistency

const query = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "author": author->name,
  mainImage{asset->{url}},
  "categories": categories[]->{
    title
  },
  publishedAt,
  body
}`;

const slugify = (text) => {
  return text
    ? text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
    : '';
};

export default function BlogPost({ post }) {
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
              {/* Reuse sidebar from BlogPage for similar design */}
              {/* Note: For simplicity, assuming static sidebar content; adjust as needed */}
              <div className={pageStyles.categoriesSection}>
                <h3 className={pageStyles.categoriesTitle}>Categories</h3>
                <ul className={pageStyles.categoriesList}>
                  {post.categories && post.categories.map((category, index) => (
                    <li key={index} className={pageStyles.categoryItem}>
                      <button className={pageStyles.categoryButton}>
                        {category.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={pageStyles.recentPostsSection}>
                <h3 className={pageStyles.recentPostsTitle}>Related Posts</h3>
                {/* Placeholder for related posts; fetch if needed */}
                <div className={pageStyles.recentPostsList}>
                  <div className={pageStyles.recentPostItem}>
                    <a className={pageStyles.recentPostLink}>
                      <h4 className={pageStyles.recentPostTitle}>Example Related Post</h4>
                      <span className={pageStyles.recentPostDate}>Date</span>
                    </a>
                  </div>
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

              <div className={styles.ctaSection}>
                <h3 className={styles.ctaTitle}>Enjoyed this article?</h3>
                <p className={styles.ctaDescription}>
                  Subscribe to our newsletter for more insights.
                </p>
                <div className={styles.ctaForm}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={styles.ctaInput}
                  />
                  <button className={styles.ctaButton}>Subscribe</button>
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
  const post = await client.fetch(query, { slug: params.slug });
  return {
    props: { post: post || null },
  };
}