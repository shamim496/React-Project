import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

  render() {
    const {render} = this.props;
    const {counter} = this.state;

    return render(counter, this.incrementCount);
  }
}

export default Counter;