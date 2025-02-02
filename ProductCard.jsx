import { Link } from "react-router"

const ProductCard =({ products }) => {
    return(
        <Link to={'/products/${product.id'} classname="bg-White rounded-lg overflow-hidden">
            <div className="w-full aspect-square">
                <img src={products.image} alt="" className="object-contain w-full h-full" />
            </div>
            <div className="text-black p-4">
                <p className="truncate font-semibold">(Product.title)</p>
                <p className="font-semibold text-red-600">(product.price):-</p>

            </div>
        </Link>
    )
}
export defult ProductCard 