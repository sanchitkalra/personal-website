import Head from 'next/head'
import Link from 'next/link'

import Navbar from '../../components/navbar'
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Blog({ allPostsData }) {
  // return (
  //   <div className="flex min-h-screen flex-col bg-black text-white">
  //     <main className="flex flex-grow flex-col items-center justify-center p-16">
  //       <div className="mb-4 flex flex-col">
  //         <div className="grid max-w-xl flex-auto text-xl">
  //           <div className="h-24 w-24"></div>
  //         </div>
  //       </div>
  //       <div className="grid max-w-xl flex-auto text-xl">
  //         <Link href="/blog">
  //           <a className="mb-10 text-6xl">⌘</a>
  //         </Link>
  //         <h1 className="text-left text-4xl">{postData.title}</h1>
  //         <h3 className="mb-16 text-left text-xl">{postData.date}</h3>
  //         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  //       </div>
  //     </main>
  //   </div>
  // )
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Head>
        <title>Blog - Sanchit Kalra</title>
        <link rel="icon" href="/folded-hands.png" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="flex flex-col items-center justify-center p-16">
        <div className="my-16 flex flex-col">
          <div className="flex flex-auto flex-col items-center justify-center">
            <h1 className="text-center text-6xl">blog</h1>
          </div>
        </div>
        <div className="grid place-items-start text-xl">
          <ul>
            {allPostsData.map(({ id, date, title }, index) => (
              <li key={index} className="mb-4">
                <Link href={`/blog/${id}`}>
                  <a className="text-left text-sky-400 underline">{title}</a>
                </Link>
                <br />
                <span>{date}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
