import React, { useState } from 'react';
import './index.css';

function ColourPicker() {
    const [color, setColor] = useState("#FFFFFF");

    const hanldeColorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color: </label>
            <input type="color" value={color} onChange={hanldeColorChange}/>
        </div>
    )
}

export default ColourPicker;