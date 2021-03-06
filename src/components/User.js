import React from 'react'
import queryString from 'query-string'
import { ReactComponent as Heart } from  '../assets/heart.svg'
import { getUser } from '../utils/api'
import { formatUnixTimestamp } from '../utils/unixFormatter'
import Stories from './Stories'
import Loading from './Loading'

export default class User extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search)

    getUser(id).then((user) => this.setState({ user: user }))
  }

  render() {
    const { user } = this.state

    return (
      <React.Fragment>
        {!user && <Loading text="Getting user"/>}

        {user && (
          <React.Fragment>
            <div className="border-b-4 border-black dark:border-gray-100 px-4 sm:px-6 lg:px-8 py-24 transition">
              <h2 className="text-3xl text-gray-900 dark:text-gray-100 font-medium">
                {user.id}
              </h2>
              <div className="mt-2 flex flex-row items-center">
                <Heart className="text-pink-500 dark:text-pink-300 w-5 h-5 mr-2" />
                <span className="text-pink-700 dark:text-pink-100">{user.karma.toLocaleString()}</span>
              </div>
              <div className="mt-6 font-mono text-lg dark:text-gray-100" dangerouslySetInnerHTML={{ __html: user.about }}></div>
              <div className="mt-6 font-mono text-sm text-gray-700 dark:text-gray-400">
                joined on <span className="font-semibold">{formatUnixTimestamp(user.created)}</span> and posted <span className="font-semibold">{user.submitted.length.toLocaleString()}</span> times
              </div>
            </div>
            <Stories user={user.id} />
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}
