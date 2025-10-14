import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BlogPage from '../../components/Blog/BlogPage';
import styles from '../../styles/Blog.module.css';

const Blog = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <BlogPage />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;