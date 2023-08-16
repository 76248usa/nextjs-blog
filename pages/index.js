import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getPosts } from '../lib/posts'
import ThemesSwitch from '../components/ThemesSwitch';

export async function getStaticProps(){
  const posts = await getPosts();
  return {
    props: {posts}
  }
}

function HomePage({posts}) {
 //console.log(posts)
  return (
  <>
  <Head>
    <title>My Blog</title>
     <meta name="description" value="This is my traveling blog"></meta>

  </Head>
  <main>
    <h1>My Blog</h1>
    <ul>
      {posts.map((post) => {
        return <li key={post.slug}>
        <Link href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </li>
      })}
    </ul>
    <ThemesSwitch />
  </main>
    
   
  </>
     
  )
}

export default HomePage
