import axios from "react"
import { useEffect, useState } from "react"
import { userParms } from "react-router"
import { BiSolidCartAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addCartCart } from "../../store/features/shoppingCart/shoppingCartSlice";

const ProductDetailsPage =() => {

    const { productId } = useParams()

 const [product, setproduct] =useState(null)
 const [error, setError] =useState(null)
 const [loading, setLoading] =useState(false)

   //const dispatch = useDispatch()
  const { addToCart} = useCart ()

  useEffect(() => {
    const getproduct =asyns () => {
       setloading(true)

               try {
                 const res = await axios.get(`https://fakestoreapi.com/products/${productid}`)
                    setProduct(res.data)
                } catch (error) {
                    setError('Something went wrong!')
                    Console.error(error.message)
                } finally{
                    setloading(false)
                }
            }

            getproduct()
        }, [])

        const hadleClick = () => {
            //dispatch{addToCart(product)}
            addToCart(product)
        }
if(error) {
    
    return(
        <div className="mt-10">
        <p className="text-red-500">{error}</p>
        </div>
    )
}
if(loading || product) {
return (
<div className="mt-5">
    <div className="w-full aspect-video bg-gray-300/30 rounded-lg animate-pulse" />
    </div className="mt-4 w-1/2 h-7 bg-gray-300/30 rounded-lg animate-pulse">
</div>
)
 }

    return(
        <div className="mt-5">
     <div className="w-full aspect-video rounded-lg bg-white">
        <img src="{product.image}" alt="" className="w-full h-full object-contain"/>
     </div>
     <h1 className="text-2xl font-semibold mt-4">{ product.titel }</h1>
     <p className="mt-4">{product.description}</p>
     <div className="flex items-center justify-between mt-10"></div>
     <p>Price: { product.price }</p>
     <button onClick={handleClick} className="flex items-center gap-4 bg-slate-800 px-10 py-2 rounded-lg hover:slate-900 transition-colors">
        Add To Cart
        <BiSolidCartAdd />
     </button>
   </div>
    )
}
export default ProductDetailsPage