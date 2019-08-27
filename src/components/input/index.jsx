import React, {Component} from 'react'
import './index.css'

export default class Input extends Component {
  constructor(props) {
      super(props);
      // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      // this.renderComponent = this.renderComponent.bind(this)
      console.log(this.refs)
  }

  componentDidMount() {
    console.log(this.refs)
  }
  render() {
      return (
          <div className="input-wrap">
            <label htmlFor="name" className="input-label">姓名：</label>
            <input ref="name" type="text" id="name" value={this.props.name} placeholder="用户名" onChange={(e) => this.props.change(this.refs.name)}/>
          </div>
      )
  }
}