import { FaMinus, FaPlus, FaTrash} from "react-icons-fa"
import { useDispatch } from "react-redux"
import { addToCart, removeItem, removeOne} from "../store/features/shoppingCartSlice"
import { useCart } from "./contexts/CartContext"

const CartItem = ({ item}) => {

  //const dispatsh = useDispatch()
const { addToCart, removeOne, removeItem } =useCart()

  const addOneToCart =() => {
    //dispatchEvent(addToCart(item.product))
    addToCart(item.product)
  }

  const removeOneFromCart = () => {
    //dispatsh(removeOne(item.product.id))
    removeOne{item.product.id}
  }

  const deleteItem = () => {
    //dispatchEvent(removeItem(item.product.id))
    removeItem(item.product.id)
  }

      return(
        <div className="flex justify-between items-center p-2 border-b">
            <div className="flex items-center gap-1">
                <div className="w-[60-px] aspect-square">
                <img src={item.product.image} className="w-full object-contain" alt={item.product.title}/>
              </div>
              <div>
                <p className="font-semibold turncate max-w-[25ch]">{item.product.title}</p>
                <p className="text-sm">{ item.quantity } X { item.product.price }</p>
              </div>
             </div>

        <div className="flex gap-3 ">
        <div>
         <button onClick ={removeOneFromCart} className="bg-slate-800 text-white px-2 py-2 rounded-s-md border-r border-slate-600"><FaMinus className="size-3" /></button>
         <button onClick={addOneToCart} className="bg-slate-800 text-white px-2 py-2 rounfed-e-md"><FaPlus className="size-3" /></button>
       </div>
       <button onClick={deleteItem} className="p-2"><FaTrash className="text-red-800" /></button>
      </div>

   </div>
  )
}
export default CartItem 