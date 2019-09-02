import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Chirdren extends Component {
  constructor() {
    super()
    this.state = {}
    console.log('Chirdren constructor')
  }
  // componentWillMount() {
  //   console.log('Chirdren componentWillMount')
  // }
  static getDerivedStateFromProps(props, state) {
    console.log('Chirdren getDerivedStateFromProps')
    return Object.assign({}, state)
  }
  componentDidMount() {
    console.log('Chirdren componentDidMount')
  }
  shouldComponentUpdate(){
    console.log('Chirdren shouldComponentUpdate')
    return true
  }
  // componentWillReceiveProps() {
  //   console.log('Chirdren componentWillReceiveProps')
  // }
  // componentWillUpdate() {
  //   console.log('Chirdren componentWillUpdate')
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Chirdren getSnapshotBeforeUpdate')
    return Object.assign({}, prevState)
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

Chirdren.propTypes = {
  name: PropTypes.string
}
export default Chirdren;