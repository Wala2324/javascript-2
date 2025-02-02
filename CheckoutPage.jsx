import ShoppingCart from "../components/ShppingCart"

const CheckoutPage = () => {
    return(
        <div className="mt-10">
          <div className="bg-white rounded-lg">
          <ShoppingCart isCheckoutPage />
          </div>
        </div>
    )
}
export default CheckoutPage