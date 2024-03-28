import React, { Component } from 'react'

class EVENT_HANDLER extends Component {
  constructor(props) {
    super(props)

    this.state = {
       changeValue: "",
    }
  }

  handlerOnChange = (e) => {
    this.setState({
      changeValue: e.target.value
    }, () => {
      console.log(this.state.changeValue);
    })
  }

  render() {

    return (
      <div>
        <input type="text" onChange={this.handlerOnChange}/>
        <p>{this.state.changeValue}</p>
      </div>
    )
  }
}

export default EVENT_HANDLER;