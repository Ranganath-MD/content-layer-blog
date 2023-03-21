import { allPosts } from "contentlayer/generated";
import styles from "@/app/page.module.css";
import { MDXComp } from "@/components/mdx";

export default async function Post({ params }: { params: { slug: string }}) {
  const post = allPosts.find(post => post.url.split("/").pop() === params.slug)
  return (
    <main className={styles.page}>
      <h1>{post?.title}</h1>
      <div>
        <MDXComp code={post?.body.code} />
      </div>
    </main>
  );
}
