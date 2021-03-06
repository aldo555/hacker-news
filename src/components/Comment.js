import React from 'react'
import { Link } from 'react-router-dom'
import { formatUnixTimestamp } from '../utils/unixFormatter'

export default function Comment({ comment }) {
  return (
    <section className="border-b-4 border-black px-4 sm:px-6 lg:px-8 py-16">
      <div className="font-mono text-sm text-gray-700">
        by <Link className="font-semibold border-b-2 border-pink-400 hover:text-pink-500" to={{ pathname: '/user', search: `?id=${comment.by}` }}>{comment.by}</Link> on <span className="font-semibold">{formatUnixTimestamp(comment.time)}</span>
      </div>
      <div className="mt-4 font-mono" dangerouslySetInnerHTML={{ __html: comment.text }}></div>
    </section>
  )
}
