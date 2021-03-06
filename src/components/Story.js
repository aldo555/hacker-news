import React from 'react'
import { formatUnixTimestamp } from '../utils/unixFormatter'

export default function Story({ story }) {
  return (
    <article className="relative group border-b-4 border-black px-4 sm:px-6 lg:px-8 py-16 hover:bg-pink-600 transition duration-100 ease-in-out">
      <h2 className="text-3xl text-pink-600 group-hover:text-white font-medium">
        <a target="_blank" rel="noreferrer" href={story.url}>{story.title}</a>
      </h2>
      <div className="mt-4 font-mono text-sm text-gray-700 group-hover:text-pink-100">
        by <a href="#" className="font-semibold border-b-2 border-pink-400 group-hover:border-pink-200">{story.by}</a> on <span className="font-semibold">{formatUnixTimestamp(story.time)}</span> with <a href="#" className="font-semibold border-b-2 border-pink-400 group-hover:border-pink-100">{Math.ceil(Math.random() * 60)} comments</a>
      </div>
    </article>
  )
}
