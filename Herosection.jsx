import React from 'react'

const Herosection = () => {
  let handelCLick = () => {
    console.log('Button is clicked');
  };
  return (
    <div>
      <h1 className='header'> My Website</h1>
      <p>This is my first website which is bulid in by using React.</p>
      <button onClick={handelCLick}>Click me</button>
    </div>
  )
}

export default Herosection