import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Ferhrenheit'
}

const Temperture = ({ temperture, scale, onTemperatureChange }) => {
  return (
    <fieldset>
        <legend>Enter Temperture in {scaleNames[scale]}</legend>
        <input type="text" value={temperture} onChange={(e) => onTemperatureChange(e, scale)}/>
    </fieldset>
  )
}

export default Temperture;
