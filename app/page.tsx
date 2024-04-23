
import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello there! ✌🤖&nbsp;
        <span className="whitespace-nowrap">
          I&lsquo;m <span className="font-bold">Bloggy</span>.
        </span>&nbsp;
      </p>
      <p className="px-6 prose prose-xl prose-lime dark:prose-invert mx-auto">
        This is my generic blog template. It can be customized for just about any blog purpose, and it turns markdown entries into HTML posts. Cool! 
      </p>
      
      <Posts />
    </main>
  )
}
