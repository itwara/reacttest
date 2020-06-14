import React from 'react'

class ToDoInput extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
    }
  }
  inputChange = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }
  add() {
    this.props.add(this.state.inputValue)
    this.setState({ inputValue: '' })
  }
  render() {
    console.log('ToDoInput render')
    return (
      <div className="todoinput">
        <input
          type="text"
          onChange={this.inputChange}
          value={this.state.inputValue}
          style={{ marginRight: '10px' }}
        ></input>
        <button onClick={this.add.bind(this)}>新增</button>
      </div>
    )
  }
}

export default ToDoInput
