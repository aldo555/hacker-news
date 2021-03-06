import React from 'react'
import { getTopStories, getNewStories, getStoriesByUser } from '../utils/api'
import Story from './Story'
import Loading from './Loading'

export default class Stories extends React.Component {
  state = {
    stories: [],
  }

  componentDidMount() {
    console.log('wow')
    if (this.props.type && this.props.type === 'top') {
      getTopStories().then((stories) => this.setState({stories: stories}))
    } else if (this.props.type && this.props.type === 'new') {
      getNewStories().then((stories) => this.setState({stories: stories}))
    } else {
      getStoriesByUser(this.props.user).then((stories) => this.setState({stories: stories}))
    }
  }

  render() {
    const { stories } = this.state

    return (
      <React.Fragment>
        {stories.length < 1 && <Loading text="Getting news"/>}
        {stories.map((story) => <Story key={story.id} story={story} />)}
      </React.Fragment>
    )
  }
}
