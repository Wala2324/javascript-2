import { useSelector } from "react-redux"
import { link } from "react-router"
import CartItem from "./CartItem"
import { clearCart } from "../../store/features/shoppingCart/shoppingCartSlice"
import { useCart } from "./contexts/CartContext"

const ShoppingCart = ({ setIsOpen, isCheckoutPage }) => {

   //const { cart, totalPrice } = useSelector(state => state.shoppingCart)

    //const dispatch = useDispatch()

    const {cart,totalPrice, clearCart} = useCart()
    
    return (
        <div className="text-black">
            <div>
                {
                    cart.length <= 0 && (
                        <div className="p-2 text-center">
                            <p>Your cart is empty</p>
                        </div>
                    )
                  }
                  {
                    cart.map(item =>(
                        <CartItem key={'cart-'+ item.product.id} item />
                    ))
                  }
            </div>
            <div className="flex justify-between items-center p-2">
                <div>
                    <p>Total: {totalPrice }</p>
                    <p className="text-gray-600 text-sm">inc tax</p>
                </div>
                {
                    isCheckoutPage
                    ?<button OnClick={() => clearCart()} className="bg-slate-800 text-white py-l,5 px-6 rounded-lg">Place Order</button>
                    :<link onClick={ () => setIsOpen(false)}  to="/checkout" className="bg-slate-800 text-white py-l,5 px-6 rounded-lg">Checkout</link>
                }
            <link onClick={ () => setIsOpen(false)}  to="/checkout" className="bg-slate-800 text-white py-l,5 px-6 rounded-lg">Checkout</link>
            </div>
            
            
        </div>
    )
}
export defult ShoppingCart