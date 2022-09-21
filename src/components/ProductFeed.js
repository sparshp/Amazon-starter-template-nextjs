import Product from "./Product"


function ProductFeed({products}) {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
            {products.slice(0,4).map((product) => (
                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                />
            ))}
            <img className='md:col-span-full h-72 w-full object-fill' src="/images/banner2.jpg" alt="" />
            <div className='md:col-span-2'>
            {products.slice(4,5).map((product, key) => (
                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                />
            ))}
            </div>
            {products.slice(5,products.length).map((product) => (
                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                />
            ))}
        </div>
    )
}

export default ProductFeed
