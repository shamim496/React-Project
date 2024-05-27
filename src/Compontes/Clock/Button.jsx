import React, { Component } from 'react'

class Button extends Component {
    shouldComponentUpdate(nextProps) {
        const {change: currentChange} = this.props;
        const {change: nextChange} = nextProps;

        if (currentChange === nextChange) {
            return false;
        }else{
            return true;
        }
    }
    
    render() {
    const {change} = this.props;
    return (
        <div>
            <button type='button' onClick={change}>Click Here</button>
        </div>
    )
    }
}

export default Button;
