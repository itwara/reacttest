import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class Demo1 extends React.Component {
  render() {
    console.log('render')
    return (
      <div>
        　　
        <ul>
          　　　　
          <li>
            　　　　　　<Link to="/demo1">demo1</Link>
            　　　　
          </li>
          　　　　
          <li>
            　　　　　　<Link to="/demo2">demo2</Link>
            　　　　
          </li>
          　　
        </ul>
      </div>
    )
  }
}

export default Demo1
