import React, { Component } from 'react';

class Chirdren extends Component {
  constructor() {
    super()
    console.log('Chirdren constructor')
  }
  componentWillMount() {
    console.log('Chirdren componentWillMount')
  }
  componentDidMount() {
    console.log('Chirdren componentDidMount')
  }
  shouldComponentUpdate(){
    console.log('Chirdren shouldComponentUpdate')
    return true
  }
  componentWillReceiveProps() {
    console.log('Chirdren componentWillReceiveProps')
  }
  componentWillUpdate() {
    console.log('Chirdren componentWillUpdate')
  }
  componentDidUpdate(){
    console.log('Chirdren componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('Chirdren componentWillUnmount')
  }
  render() {
    console.log('Chirdren render')
    return (
      <div className="life">
        {this.props.name} 
      </div>
    );
  }
}

export default Chirdren;