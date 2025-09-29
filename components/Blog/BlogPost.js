import { client } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from "./BlogPost.module.css";

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

// Button Component (reusable)
function Button({ children, className = "", onClick, variant = "default", ...props }) {
  const baseClass = styles.button;
  const variantClass = variant === "ghost" ? styles.ghostButton : styles.primaryButton;
  
  return (
    <button 
      className={`${baseClass} ${variantClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default async function BlogPost({ params }) {
  const post = await client.fetch(query, { slug: params.slug });

  if (!post) return (
    <div className={styles.notFound}>
      <div className={styles.notFoundText}>
        Post not found
      </div>
    </div>
  );

  return (
    <div className={styles.pageContainer}>
      <Navigation />
      
      <main className={styles.main}>
        <article className={styles.container}>
          {/* Back Button */}
          <Link href="/blog">
            <button className={styles.backButton}>
              <ArrowLeft size={16} />
              Back to Blog
            </button>
          </Link>

          {/* Header */}
          <header className={styles.header}>
            {post.categories && post.categories.length > 0 && (
              <div className={styles.categories}>
                {post.categories.map((category, index) => (
                  <span
                    key={index}
                    className={styles.category}
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}
            <h1 className={styles.title}>
              {post.title}
            </h1>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <Calendar size={16} />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className={styles.metaItem}>
                <User size={16} />
                {post.author}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.mainImage?.asset?.url && (
            <div className={styles.featuredImage}>
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
              />
              <div className={styles.imageOverlay} />
            </div>
          )}

          {/* Content */}
          <div className={styles.content}>
            <PortableText 
              value={post.body}
              components={{
                block: {
                  h1: ({children}) => <h1>{children}</h1>,
                  h2: ({children}) => <h2>{children}</h2>,
                  h3: ({children}) => <h3>{children}</h3>,
                  normal: ({children}) => <p>{children}</p>,
                  blockquote: ({children}) => <blockquote>{children}</blockquote>,
                },
                list: {
                  bullet: ({children}) => <ul>{children}</ul>,
                  number: ({children}) => <ol>{children}</ol>,
                },
                listItem: {
                  bullet: ({children}) => <li>{children}</li>,
                  number: ({children}) => <li>{children}</li>,
                },
                marks: {
                  link: ({value, children}) => {
                    const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
                    return (
                      <a href={value?.href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : ''}>
                        {children}
                      </a>
                    );
                  },
                },
                types: {
                  image: ({value}) => (
                    <img 
                      src={value.asset.url} 
                      alt={value.alt || 'Image'} 
                    />
                  ),
                }
              }}
            />
          </div>

          {/* CTA Section */}
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
              <button className={styles.ctaButton}>
                Subscribe
              </button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
