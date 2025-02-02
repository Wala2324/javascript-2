import React from 'react'
import {useState} from 'react';

const ColorPicker = () => {

    const [color, setColor] = useState('ffffff')


    const handleColorChange = (e) => {
        setColor(e.target.value);

    }


  return (
    <div className='color-picker-container'>
        <h1>Color Picker</h1>

        <div className="color-display" style={{backgroundColor: color}}>
           <p className='color'>Selected color: {color}</p>
        </div>

        <label> select a color:   </label>
        <input type="color"  value={color} onChange={handleColorChange}/>
    </div>
  )
}

export default ColorPicker