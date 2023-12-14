import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}

function HomePage({ posts }) {
  console.log("[HomePage] render : ", posts);
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="descrption" value=" This is my blog"></meta>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts &&
            posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}
export default HomePage;
