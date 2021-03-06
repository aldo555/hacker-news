import React from 'react'
import { getStoryById } from '../utils/api'
import queryString from 'query-string'
import { formatUnixTimestamp } from '../utils/unixFormatter'
import { Link } from 'react-router-dom'
import Comment from './Comment'
import Loading from './Loading'
import { ReactComponent as Yoyo } from  '../assets/yoyo.svg'

export default class Post extends React.Component {
  state = {
    post: null
  }
  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search)

    getStoryById(id).then((post) => this.setState({ post: post }))
  }

  render() {
    const { post } = this.state

    return (
      <React.Fragment>
        {!post && <Loading text="Getting post"/>}

        {post && (
          <React.Fragment>
            <article className="border-b-4 border-black dark:border-gray-100 px-4 sm:px-6 lg:px-8 py-24">
              <h2 className="text-3xl text-pink-600 dark:text-pink-300 font-medium hover:text-pink-500">
                <a target="_blank" rel="noreferrer" href={post.url}>{post.title}</a>
              </h2>
              <div className="mt-4 font-mono text-sm text-gray-700 dark:text-gray-400">
                by <Link className="font-semibold border-b-2 border-pink-400 dark:border-pink-200 group-hover:border-pink-200" to={{ pathname: '/user', search: `?id=${post.by}` }}>{post.by}</Link> on <span className="font-semibold">{formatUnixTimestamp(post.time)}</span> with <Link className="font-semibold border-b-2 border-pink-400 dark:border-pink-200 group-hover:border-pink-100" to={{ pathname: '/post', search: `?id=${post.id}` }}>{post.kids && post.kids.length.toLocaleString()} comments</Link>
              </div>
            </article>
            {post.comments && post.comments.map((comment) => <Comment key={comment.id} comment={comment} />)}

            {!post.comments && (
              <section className="border-b-4 border-black px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center">
                <Yoyo className="text-pink-600 w-24 h-24 mb-4" />
                <p className="text-gray-700 text-2xl text-center">
                  No comments yet. <br /> Have a yoyo.
                </p>
              </section>
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}
