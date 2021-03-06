import React from 'react'
import { getTopStories, getNewStories } from '../utils/api'
import Story from './Story'

export default class Stories extends React.Component {
  state = {
    stories: []
  }

  componentDidMount() {
    const { type } = this.props

    if (type === 'top') {
      getTopStories().then((stories) => this.setState({stories: stories}))
    } else {
      getNewStories().then((stories) => this.setState({stories: stories}))
    }
  }

  render() {
    const { stories } = this.state

    return (
      <div>
        {stories.map((story) => <Story key={story.id} story={story} />)}
      </div>
    )
  }
}
