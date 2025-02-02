import ReactDom from 'react-dom'
import { useState } from "react"
import ShoppingCart from './ShoppingCart'

const Dropdown =({ Children}) => {

    const[ isOpen, setIsOpen] = useState(false)
    
    return(
        <>
{ isOpen && <DropdownBg setIsOpen={setIsOpen}/>}

   <button onClick={ () => setIsOpen(state => !state)}>
    { Children }
  </button>

  {
    isOpen && (
        <div className='p-5 absolute bg-White W-[450px] right-0 z-10 mt-2 rounded-md shadow-1g ring-1 ring-black ring-opacity-10'>
         <div className="py-1">
          <ShoppingCart setIsOpen={setIsOpen} />
</div>
        </div>
    )
  }
 </>
 )
}
export defult Dropdown


const DropdownBg = ({setIsOpen}) => {
    return ReactDom.createPortal () ((
        <div className="absolute inset-0 bg-transparent" onClick={() => setIsOpen(false)}></div>
    ), document.querySelector('#modal'))
}