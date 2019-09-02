import React, { Component } from 'react';
import Children from '../children'

class Parent extends Component {
  constructor() {
    super()
    this.state = {
      name: 'andy',
      isNeedMounted: true
    }
  }
  changePropsName() {
    this.setState({
      name: 'kiki'
    })
  }
  changeMounted() {
    this.setState({
      isNeedMounted: !this.state.isNeedMounted
    })
  }
  render() {
    let  chirdren = null 
    const isNeedMounted = this.state.isNeedMounted
    if (isNeedMounted) {
      chirdren = (<Children name={this.state.name}></Children>)
    } else {
      chirdren = null
    }
    return (
      <div>
        {chirdren}
        <hr></hr>
        <button onClick={this.changePropsName.bind(this)}>更新props</button>
        <button onClick={this.changeMounted.bind(this)}>(un)mounting</button>
      </div>
    );
  }
}

export default Parent;