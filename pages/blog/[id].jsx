import Link from 'next/link'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Head>
        <title>{postData.title} - Sanchit Kalra</title>
        <link rel="icon" href="/folded-hands.png" />
      </Head>
      <main className="flex flex-grow flex-col items-center justify-center p-16">
        <div className="mb-4 flex flex-col">
          <div className="grid max-w-xl flex-auto text-xl">
            <div className="h-24 w-24"></div>
          </div>
        </div>
        <div className="flex max-w-xl flex-auto flex-col text-xl">
          <Link href="/blog">
            <a className="mb-6 text-6xl text-neutral-400">⌘</a>
          </Link>
          <h1 className="text-left text-4xl">{postData.title}</h1>
          <h3 className="mb-16 text-left text-xl text-neutral-400">
            {postData.date}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </main>
    </div>
  )
}
