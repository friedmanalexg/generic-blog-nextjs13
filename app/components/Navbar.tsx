import React from 'react'
import Link from 'next/link'
import {FaGithub, FaMastodon, FaLinkedin} from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-lime-500 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                <Link href="/" className="text-white/90 no-underline hover:text-white"> My Generic Blog</Link>
            </h1>
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-2xl lg:text-3xl">
                    <Link className="text-white/90 hover:text-white" href="https://time.com/6287012/why-finding-job-is-difficult/">
                        <FaLinkedin />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://www.404media.co/mastodon-is-the-good-one/">
                        <FaMastodon />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://dev.to/niza/alternatives-to-git-4p6m">
                        <FaGithub />
                    </Link>
            </div>
        </div>
    </nav>
  )
}
