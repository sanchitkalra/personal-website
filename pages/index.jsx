import Head from 'next/head'
import avatar from './../public/folded-hands.png'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/folded-hands.png" />
      </Head>

      <main className="flex flex-grow flex-col items-center justify-center p-16">
        <div class="mb-4 flex flex-col">
          <div class="grid flex-auto place-items-center pb-4">
            <div class="h-24 w-24">
              <Image src={avatar} alt="Picture of the author"></Image>
            </div>
          </div>
          <div class="flex flex-auto flex-col items-center justify-center">
            <h1 class="text-center text-6xl">Sanchit Kalra</h1>
            <h3 class="text-center text-2xl">
              full stack developer, student, little nerd
            </h3>
          </div>
        </div>

        <div className="grid max-w-lg flex-auto place-items-center p-6 text-xl sm:text-lg">
          <p>Something about meeeeeee </p>
        </div>

        <div className="mt-16 flex max-w-lg flex-col text-xl sm:flex-row sm:text-left sm:text-lg">
          <div className="mr-6 flex-auto text-stone-400">Work</div>
          <div className="flex-auto">
            <div className="pb-5">
              <h3 className="text-xl">bp-hc.xyz</h3>
              <p>
                A URL shortener for the students of BPHC. Uses Firebase and
                React.
              </p>
              <a
                className="text-sky-400 underline"
                href="https://bp-hc.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
            <div className="pb-5">
              <h3 className="text-xl">E-Cell Launchpad Backend</h3>
              <p>
                Wrote the backend and led the dev team for the annual Launchpad
                event. Used Next, Express, MongoDB, JWT.
              </p>
              <a
                className="text-sky-400 underline"
                href="https://ecellbphc.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
            <div className="pb-5">
              <h3 className="text-xl">Timekeeper</h3>
              <p>
                A to-do list app for iOS devices. Uses SwiftUI and MongoDB
                Realm.
              </p>
              <a
                className="text-sky-400 underline"
                href="https://github.com/sanchitkalra/timekeeper"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center text-stone-200">
        <p className="flex items-center justify-center">
          Feel free to reach out at&nbsp;{' '}
          <a
            className="text-sky-400 underline"
            href="https://github.com/sanchitkalra"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sanchitkara
          </a>
        </p>
      </footer>
    </div>
  )
}
