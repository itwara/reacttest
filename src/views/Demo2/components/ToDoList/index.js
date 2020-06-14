import React from 'react'
import ToDoItem from '../ToDoItem'
class ToDoList extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }
  render() {
    console.log('ToDoList render')
    console.log(this.props.items)
    const items = []
    this.props.items.forEach((item, idx) => {
      items.push(
        <ToDoItem
          item={item}
          key={idx}
          index={idx}
          del={this.props.del}
        ></ToDoItem>,
      )
    })
    return <ul>{items}</ul>
  }
}

export default ToDoList
