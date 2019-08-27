import React, {Component} from 'react'
import './index.css'

export default class Input extends Component {
  constructor(props) {
      super(props);
      // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      // this.renderComponent = this.renderComponent.bind(this)
  }

  render() {
      return (
          <div className="input-wrap">
            <label htmlFor="name" className="input-label">姓名：</label>
            <input type="text" id="name" value={this.props.name} placeholder="用户名" onChange={(e) => this.props.change(e)}/>
          </div>
      )
  }
}