"use client"

import { useState, useEffect } from "react"
import { Calendar, User, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { client } from "@/lib/sanity.client"
import styles from "./BlogPage.module.css"

function BlogPostCard({ post }) {
  return (
    <article className={styles.postCard}>
      <div className={styles.postImage}>
        <Image
          src={post.mainImage?.asset?.url || "/placeholder.svg"}
          alt={post.title}
          fill
          className={styles.postImageImg}
        />
      </div>

      <div className={styles.postContent}>
        <h2 className={styles.postTitle}>
          <Link href={`/blog/${post.slug.current}`}>
            {post.title}
          </Link>
        </h2>

        <div className={styles.postMeta}>
          <div className={styles.postAuthor}>
            <User className={styles.postMetaIcon} />
            <span>{post.author}</span>
          </div>
          <div className={styles.postDate}>
            <Calendar className={styles.postMetaIcon} />
            <span>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>

        <p className={styles.postExcerpt}>{post.excerpt}</p>

        <div className={styles.postTags}>
          {post.categories?.slice(0, 3).map((category, index) => (
            <span key={index} className={styles.postTag}>
              {category.title}
            </span>
          ))}
        </div>

        <Link href={`/blog/${post.slug.current}`} className={styles.readMoreButton}>
          Read More
        </Link>
      </div>
    </article>
  )
}

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const postsPerPage = 9

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
          title,
          slug,
          "author": author->name,
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
        }`

        const postsData = await client.fetch(postsQuery)
        setPosts(postsData)
      } catch (error) {
        console.error("Error fetching posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Loading articles...</p>
      </div>
    )
  }

  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Strike48 Blog</h1>
          <p className={styles.heroSubtitle}>
            Insights, trends, and expert perspectives on AI-powered solutions for modern enterprises
          </p>
        </div>
      </section>

      <section className={styles.blogGridSection}>
        <div className={styles.container}>
          <div className={styles.blogGrid}>
            {currentPosts.map((post) => (
              <BlogPostCard key={post.slug.current} post={post} />
            ))}
          </div>

          <div className={styles.pagination}>
            <button
              className={`${styles.paginationButton} ${currentPage === 1 ? styles.paginationButtonDisabled : ''}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <ChevronLeft className={styles.paginationIcon} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`${styles.paginationButton} ${currentPage === page ? styles.paginationButtonActive : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}

            <button
              className={`${styles.paginationButton} ${currentPage === totalPages ? styles.paginationButtonDisabled : ''}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <ChevronRight className={styles.paginationIcon} />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContainer}>
          <h2 className={styles.newsletterTitle}>Never Miss an Update</h2>
          <p className={styles.newsletterDescription}>
            Join thousands of professionals who receive our latest insights, case studies, and industry news directly
            in their inbox.
          </p>

          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}