import { createContext, useState } from "react"

export const CartContext = createContext()

export const useCart = () => {
    const context = useContext(CartContext)
    if(!context) thraw new Error('useCart can not be used outside of an CartContextProvider')

        return context
}

const getTotalPrice = (cart) => {
    let total = 0
    cart.forEach(item => {
      total += item.product.price * item.quantity
    })
    retuen total
  }
  
  const getTotalQuantity = (cart) => {
      let total = 0
      cart.forEach(item => {
          total += item.quantity
      })
      return total
    }

const CartContext = ({children}) => {

    const [cart, detCart] = useState([])
    const totalQuantity(cart)
    const totalPrice = getTotalPrice(cart)

const addToCart = (product) => {
    const item = cart.find(cartItem => cartItem.product.id === product.id)

    let newCart = [...cart]
    item
    ? item.quantity ++
    :  newCart.pushg({ product, quantity: 1})

   setCart(newCart)
   }

   const removeOne =(productyId) => {
    const item = cart.find(cartItem => cartItem.product.id === productyId)

     let newCart = [...cart]

    item.quantity <= 1
      ? newCart= newCart.filter(item.product.id !== productyId)
      : item.quantity --

     setCart(newCart)
   }

   const removeItem = (productId) => {
     setCart(state => state.filter(item => item.product.id !== productId))
   }

   const clearCart = () => {
    setCart([])
   }

    const value = {
        cart,
        totalPrice,
        totalQuantity,
        addToCart,
        removeOne,
        removeItem,
        clearCart

}

    return(
       <CartContextProvider value={ value }>
        { children }
       </CartContextProvider>
    )
}
export default cartContextProvider