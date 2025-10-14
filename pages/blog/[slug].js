import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BlogPost from '../../components/Blog/BlogPost';
import { client } from "@/lib/sanity.client";

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "author": author->name,
  mainImage{asset->{url}},
  "categories": categories[]->{
    title
  },
  publishedAt,
  body,
  excerpt
}`;

const postsQuery = `*[_type == "post"] | order(publishedAt desc){
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

export default function BlogPostPage({ post, posts, categories, authors }) {
  return (
    <div>
      <Header />
      <BlogPost post={post} posts={posts} categories={categories} authors={authors} />
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