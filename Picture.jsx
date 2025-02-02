import React from 'react'


const Picture = () => {

  const handelClick = (e) => e.target.style.display = "none"



  return (
   <img className="image" onClick={(e) => handelClick(e)} src="./public/safari package.webp" alt="Phuket" />
  )
}

export default Picture