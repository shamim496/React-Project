import React, { Component } from 'react';
import Temperature from './Temperture';
import {convert, toCelsius, toFarhrenheit} from './Converter';
import Boiling from './Boiling';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature: '',
            scale: 'C',
        }
    }

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        })
    }

  render() {
    const {temperature, scale} = this.state;
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const ferhrenheit = scale === 'c' ? convert(temperature, toFarhrenheit) : temperature;


    return (
        <div>
            <Temperature scale='c' temperture={celsius} onTemperatureChange={this.handleChange}/>
            <Temperature scale='f' temperture={ferhrenheit} onTemperatureChange={this.handleChange}/>
            <Boiling celsius={parseFloat(temperature)}/>
        </div>
    )
  }
}

export default Calculator;
