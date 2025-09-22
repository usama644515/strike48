import ArticleCard from './ArticleCard';
import styles from './ArticlesSection.module.css';

const ArticlesSection = () => {
  const articles = [
    {
      title: "Advanced Log Analysis Techniques for Enterprise",
      description: "Learn how to leverage machine learning algorithms to detect anomalies and threats in your log data streams.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: null
    },
    {
      title: "Data Governance Best Practices for Modern Enterprises",
      description: "Essential strategies for maintaining data quality, compliance, and security across your organization.",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      category: null
    },
    {
      title: "Building Real-Time Data Pipelines with Strike48",
      description: "A comprehensive guide to setting up automated data processing workflows for continuous insights.",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      category: null
    },
    {
      title: "Case Study: Reducing Security Incidents by 85%",
      description: "How a Fortune 500 company transformed their security posture using Strike48's analytics platform.",
      date: "Dec 5, 2024",
      readTime: "15 min read",
      category: null
    },
    {
      title: "AI-Powered Threat Detection: From Logs to Insights",
      description: "Discover how artificial intelligence transforms raw log data into actionable security intelligence.",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "AI-Machine Learning"
    },
    {
      title: "Getting Started with Log Data Visualization",
      description: "Transform complex log data into clear, actionable dashboards that drive business decisions.",
      date: "Dec 3, 2024",
      readTime: "7 min read",
      category: "Data Analytics"
    }
  ];

  return (
    <section className={styles.articles}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Articles & Resources</h2>
        <div className={styles.articlesGrid}>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              date={article.date}
              readTime={article.readTime}
              category={article.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;