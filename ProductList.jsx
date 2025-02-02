export const ProductList = ({products }) => {
    return(
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {
                products.map(product => (
                    <ProductCard Key={product.id} product={product} />
                ))
            }
        </div>
    )
}

ProductList.Skeleton =() => {
    return(
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="bg-gray-300/30 aspect-square rounded-lg animate-pulse"/>
            <div className="bg-gray-300/30 aspect-square rounded-lg animate-pulse"/>
            <div className="bg-gray-300/30 aspect-square rounded-lg animate-pulse"/>
            <div className="bg-gray-300/30 aspect-square rounded-lg animate-pulse"/>
            
            </div>
    )
}
