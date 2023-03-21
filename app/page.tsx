import styles from './page.module.css'

import { allPosts } from "contentlayer/generated";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {
          allPosts.map((post, i) => {
            return (
              <Link
                href={post.url}
                className={styles.card}
                key={i}
              >
                <h2>
                  {post.title}<span>-&gt;</span>
                </h2>
                <p>
                  {post.desc}
                </p>
              </Link>
            );
          })
        }
      </div>
    </main>
  )
}
