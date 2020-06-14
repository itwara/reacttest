import React from 'react'
import './index.css'

class Demo1 extends React.Component {
  state = {
    tag: 1,
  }
  toggleClass() {
    this.setState({
      tag: Number(!this.state.tag),
    })
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.timer = setInterval(() => {
      this.toggleClass()
    }, 1000)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    this.timer && clearInterval(this.timer)
  }
  render() {
    console.log('render')
    const helloClass = this.state.tag ? 'show' : 'hide'
    return (
      <p className={helloClass} onClick={this.toggleClass.bind(this)}>
        hello world!
      </p>
    )
  }
}

export default Demo1
