import {Provider } from "react-redux"
import { CartContext } from "./react/components/contexts/CartContext"

const Providers =({ children}) => {
    return (
        <>
        <Providers store={store}>
            <CartContextProvider>
            {children} 
            </CartContextProvider>
        </Providers>
            
        </>
    )
}
export default Providers