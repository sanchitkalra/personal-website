import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'

import avatar from '../public/folded-hands.png'
import projects from '../data/projects'
import Project from '../components/project'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Head>
        <title>Sanchit Kalra</title>
        <link rel="icon" href="/folded-hands.png" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="flex flex-grow flex-col items-center justify-center p-16">
        <div className="mb-4 flex flex-col">
          <div className="grid flex-auto place-items-center pb-4">
            <div className="h-24 w-24">
              <Image src={avatar} alt="Picture of the author"></Image>
            </div>
          </div>
          <div className="flex flex-auto flex-col items-center justify-center">
            <h1 className="text-center text-6xl">Sanchit Kalra</h1>
            <h3 className="text-center text-2xl">
              full stack developer, student, little nerd
            </h3>
          </div>
        </div>

        <div className="grid max-w-xl flex-auto text-xl">
          <p className="py-2">
            I am Sanchit Kalra. I'm currently in my sophomore year double
            majoring in Math and Electrical Engineering at BITS Pilani,
            Hyderabad Campus.
          </p>
          <p className="py-2">
            I mostly work with Node and Express but occasionally tip into the
            land of CSS and frontend development, but my real love still is
            backend development. I'm working on learning TailwindCSS and
            Typescript at the moment. I've started learning SwiftUI too and find
            it pretty interesting, feels quite similar to React.
          </p>
          <p className="py-2">
            I know HTML, CSS, JavaScript, Firebase, Express, Node, MongoDB and
            would love to work on any project that involves these technologies.
          </p>
          <p className="py-2">
            Also, feel free to go through my{' '}
            <Link href="/blog">
              <a className="text-sky-400 underline">blog</a>
            </Link>
            .
          </p>
        </div>

        <div className="mt-16 flex max-w-xl flex-col text-lg sm:text-left">
          <div className="flex-auto pb-4 text-xl text-stone-400">Projects</div>
          <div className="flex-auto">
            {projects.map((project) => {
              return (
                <Project
                  name={project.name}
                  description={project.description}
                  links={project.links}
                />
              )
            })}
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full flex-col items-center justify-center text-stone-200">
        <p className="flex items-center justify-center text-xl">
          Built with 🤍{' '}
          {/* <a
            className="text-sky-400 underline"
            href="https://github.com/sanchitkalra"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sanchitkara
          </a> */}
        </p>
        <div className="mt-2 mb-8 flex flex-row">
          <SocialIcon className="mx-2" url="https://github.com/sanchitkalra" />
          <SocialIcon
            className="mx-2"
            url="https://twitter.com/sanchit_kalra1"
          />
          <SocialIcon
            className="mx-2"
            url="https://www.linkedin.com/in/sanchitkalraa/"
          />
        </div>
      </footer>
    </div>
  )
}
