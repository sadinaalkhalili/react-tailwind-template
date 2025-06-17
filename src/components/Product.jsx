const Product = ({ name, description, price, image }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-rose-100 hover:shadow-xl transition">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-pink-700">{name}</h3>
      <p className="text-pink-600 text-sm mt-1">{description}</p>
      <p className="mt-2 text-pink-800 font-bold">{price}</p>
    </div>
  </div>
);

export default Product;
