function ProductList() {
  const products = [
    { id: 1, name: "Nike Air Max Pulse", price: "$150", img: "/images/product2.png" },
    { id: 2, name: "Nike Air Max 97", price: "$170", img: "/images/product3.png" },
    { id: 3, name: "Nike Air Max 90", price: "$140", img: "/images/product4.png" },
  ];

  return (
    <div className="px-4 sm:px-8 py-12">
      <h2 className="text-2xl font-bold mb-6">Best of Air Max</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="mt-2 text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
