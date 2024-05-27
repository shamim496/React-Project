import React, { Component } from 'react'

class CounterClick extends Component {
  render() {
    return (
      <div>
        <button type='button' onClick={this.incrementCount}>Click {count} times</button>
      </div>
    )
  }
}

export default CounterClick;