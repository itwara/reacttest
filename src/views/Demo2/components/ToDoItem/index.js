import React from 'react'

class ToDoItem extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  del() {
    this.props.del(this.props.index)
  }
  render() {
    console.log('ToDoItem render')
    return (
      <li>
        {this.props.item}
        <button onClick={this.del.bind(this)} style={{ marginLeft: '100px' }}>
          删除
        </button>
      </li>
    )
  }
}

export default ToDoItem
