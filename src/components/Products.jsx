
const Products = ({data}) => {

  return (
    <div className="bg-gray-700 grid sm:grid-cols-2 lg:grid-cols-3">

      {data.map((product, index) => (

        <div key={index} className="bg-[#00000099] m-3">

            <img src={product.image} alt={product.title} className="w-full h-64" />

            <div className="p-3">
                <h2 className="text-white font-bold text-xl">{product.title}</h2>
                <p className="text-orange-400"> Price : {product.price} </p>
                <p className="text-orange-400"> Rating : {product.rating.rate} </p>
                <p className="text-white font-medium"> {product.description} </p>
                <button className="bg-yellow-50 mt-3 mb-1.5 font-medium text-sm transition px-2 py-0.5 rounded-xl text-orange-500 hover:bg-orange-500 hover:text-white"> Add to Cart </button>
            </div>

        </div>

      ))}

    </div>
  )
}

export default Products
