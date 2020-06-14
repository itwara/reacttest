import React from 'react'
import ToDoList from '../ToDoList'
import ToDoInput from '../ToDoInput'

class ToDoBox extends React.Component {
  constructor() {
    super()
    this.state = {
      todolist: [],
    }
  }
  addItem(item) {
    const { todolist } = this.state
    todolist.push(item)
    this.setState({ todolist })
  }
  delItem(index) {
    const { todolist } = this.state
    todolist.splice(index, 1)
    this.setState({ todolist })
  }
  render() {
    console.log('ToDoBox render')

    return (
      <div className="todobox" style={{ padding: '10px' }}>
        <ToDoInput add={this.addItem.bind(this)}></ToDoInput>
        <ToDoList
          items={this.state.todolist}
          del={this.delItem.bind(this)}
        ></ToDoList>
      </div>
    )
  }
}

export default ToDoBox
