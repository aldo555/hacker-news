import React from 'react'
import { ReactComponent as Bolt } from  '../assets/bolt-2-hollow.svg'

export default class Loading extends React.Component {
  state = {
    content: this.props.text
  }

  componentDidMount() {
    const { text } = this.props

    this.interval = window.setInterval(() => {
      this.state.content === text + '...'
        ? this.setState({ content: text })
        : this.setState(({content}) => ({ content: content + '.' }))
    }, 200)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  render() {
    return (
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center flex-col pointer-events-none">
        <Bolt className="text-pink-600 w-24 h-24 mb-4" />
        <p className="text-gray-700 text-3xl text-center">
          {this.state.content}
        </p>
      </div>
    )
  }
}
