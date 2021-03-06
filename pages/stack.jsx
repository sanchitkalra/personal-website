import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Stack() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Head>
        <title>Stack - Sanchit Kalra</title>
        <link rel="icon" href="/folded-hands.png" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="flex flex-col items-center justify-center p-16">
        <div className="my-16 flex flex-col">
          <div className="flex flex-auto flex-col items-center justify-center">
            <h1 className="text-center text-6xl">the apps and tools I use</h1>
          </div>
        </div>
      </main>
    </div>
  )
}
