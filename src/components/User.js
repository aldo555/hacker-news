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
            <div className="border-b-4 border-black px-4 sm:px-6 lg:px-8 py-24 transition">
              <h2 className="text-3xl text-gray-900 font-medium">
                {user.id}
              </h2>
              <div className="mt-2 flex flex-row items-center">
                <Heart className="text-pink-500 w-5 h-5 mr-2" />
                <span className="text-pink-700">{user.karma.toLocaleString()}</span>
              </div>
              <div className="mt-6 font-mono text-lg" dangerouslySetInnerHTML={{ __html: user.about }}></div>
              <div className="mt-6 font-mono text-sm text-gray-700">
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
