// components/Blog/BlogPage.js
"use client"

import { useState, useEffect } from "react"
import { Search, X, Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { client } from "@/lib/sanity.client"
import styles from "./BlogPage.module.css"

function BlogPostCard({ post }) {
  return (
    <article className={styles.postCard}>
      {post.mainImage && (
        <div className={styles.postImage}>
          <img 
            src={post.mainImage.asset.url} 
            alt={post.title}
            loading="lazy"
          />
        </div>
      )}
      <div className={styles.postContent}>
        <div className={styles.postMeta}>
          <span className={styles.postDate}>
            <Calendar size={14} />
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className={styles.postAuthor}>
            <User size={14} />
            {post.author}
          </span>
        </div>
        <h3 className={styles.postTitle}>
          <Link href={`/blog/${post.slug.current}`}>
            {post.title}
          </Link>
        </h3>
        <p className={styles.postExcerpt}>
          {post.excerpt}
        </p>
        {post.categories && post.categories.length > 0 && (
          <div className={styles.postCategories}>
            {post.categories.slice(0, 2).map((category, index) => (
              <span key={index} className={styles.postCategory}>
                {category.title}
              </span>
            ))}
          </div>
        )}
        <Link href={`/blog/${post.slug.current}`} className={styles.readMore}>
          Read More <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}

const Button = ({ children, className = "", onClick, variant = "default", ...props }) => {
  const baseStyle = styles.button;
  const variantStyle = variant === "outline" ? styles.buttonOutline : styles.buttonPrimary;
  
  return (
    <button 
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortOption, setSortOption] = useState("newest")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc){
          title,
          slug,
          "author": author->name,
          "categories": categories[]->{
            title
          },
          mainImage{
            asset->{
              url
            }
          },
          publishedAt,
          excerpt
        }`

        const postsData = await client.fetch(query)
        setPosts(postsData)
        
        const allCategories = postsData.flatMap((post) => 
          post.categories?.map((c) => c.title) || []
        )
        const uniqueCategories = Array.from(new Set(allCategories))
        setCategories(uniqueCategories)
        
      } catch (error) {
        console.error("Error fetching posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    let filtered = posts

    if (selectedCategory) {
      filtered = filtered.filter(post => 
        post.categories?.some((c) => c.title === selectedCategory)
      )
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(post =>
        post.title?.toLowerCase().includes(query) ||
        post.author?.toLowerCase().includes(query) ||
        post.categories?.some((c) => c.title?.toLowerCase().includes(query)) ||
        post.excerpt?.toLowerCase().includes(query)
      )
    }

    let sorted = [...filtered]
    if (sortOption === "newest") {
      sorted.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    } else if (sortOption === "oldest") {
      sorted.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt))
    }

    setFilteredPosts(sorted)
  }, [posts, selectedCategory, searchQuery, sortOption])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery, sortOption])

  const indexOfLastPost = currentPage * postsPerPage
  const currentPosts = filteredPosts.slice(0, indexOfLastPost)

  const loadMore = () => {
    setCurrentPage(prev => prev + 1)
  }

  const clearFilters = () => {
    setSelectedCategory("")
    setSearchQuery("")
    setSortOption("newest")
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

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.layoutGrid}>
            
            <div className={styles.sidebarColumn}>
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
                    <button
                      onClick={() => setSelectedCategory("")}
                      className={`${styles.categoryButton} ${!selectedCategory ? styles.activeCategory : ''}`}
                    >
                      All Articles
                      <span className={styles.categoryCount}>({posts.length})</span>
                    </button>
                  </li>
                  {categories.map((category) => {
                    const count = posts.filter(post => 
                      post.categories?.some((c) => c.title === category)
                    ).length;
                    return (
                      <li key={category} className={styles.categoryItem}>
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className={`${styles.categoryButton} ${selectedCategory === category ? styles.activeCategory : ''}`}
                        >
                          {category}
                          <span className={styles.categoryCount}>({count})</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className={styles.recentPostsSection}>
                <h3 className={styles.recentPostsTitle}>Recent Posts</h3>
                <div className={styles.recentPostsList}>
                  {posts.slice(0, 3).map((post) => (
                    <div key={post.slug.current} className={styles.recentPostItem}>
                      <Link href={`/blog/${post.slug.current}`} className={styles.recentPostLink}>
                        <h4 className={styles.recentPostTitle}>{post.title}</h4>
                        <span className={styles.recentPostDate}>
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.contentColumn}>
              <div className={styles.resultsHeader}>
                <div>
                  <h2 className={styles.resultsTitle}>
                    {selectedCategory ? `${selectedCategory} Articles` : 'All Articles'}
                  </h2>
                  <p className={styles.resultsCount}>
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                    {(selectedCategory || searchQuery) && (
                      <button 
                        onClick={clearFilters}
                        className={styles.clearFiltersButton}
                      >
                        Clear filters
                      </button>
                    )}
                  </p>
                </div>
                
                <div className={styles.sortContainer}>
                  <span className={styles.sortLabel}>Sort by:</span>
                  <select 
                    className={styles.sortSelect}
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>
              </div>

              {currentPosts.length > 0 ? (
                <div className={styles.postsGrid}>
                  {currentPosts.map((post) => (
                    <BlogPostCard key={post.slug.current} post={post} />
                  ))}
                </div>
              ) : (
                <div className={styles.noResults}>
                  <div className={styles.noResultsIcon}>📝</div>
                  <div className={styles.noResultsText}>
                    No articles found matching your criteria
                  </div>
                  <Button 
                    onClick={clearFilters}
                    className={styles.clearFiltersBtn}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}

              {indexOfLastPost < filteredPosts.length && (
                <div className={styles.loadMoreContainer}>
                  <Button 
                    variant="outline"
                    className={styles.loadMoreButton}
                    onClick={loadMore}
                  >
                    Load More Articles
                  </Button>
                </div>
              )}
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
            <Button className={styles.newsletterCtaButton}>
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}