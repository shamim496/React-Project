import React, { Component } from 'react'

class HoverCounter extends Component {
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
        const { count } = this.state;
        return (
            <div>
                <h1 type='button' onMouseOver={this.incrementCount}>Click {count} times</h1>
            </div>
        )
    }
}

export default HoverCounter;