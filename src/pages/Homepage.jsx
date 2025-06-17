import Product from "../components/Product";

const Homepage = () => {
  const featuredProducts = [
    {
      name: "Rose Candle",
      description: "A calming rose-scented candle.",
      price: "$12.99",
      image: "https://via.placeholder.com/300x200?text=Rose+Candle",
    },
    {
      name: "Lavender Bliss",
      description: "Perfect for relaxing evenings.",
      price: "$14.99",
      image: "https://via.placeholder.com/300x200?text=Lavender+Bliss",
    },
    {
      name: "Peony Dreams",
      description: "Soft floral notes and pastel design.",
      price: "$16.50",
      image: "https://via.placeholder.com/300x200?text=Peony+Dreams",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 px-4 py-12">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <div className="bg-white bg-opacity-80 rounded-3xl p-12 shadow-2xl border border-pink-200">
          <h1 className="text-5xl font-bold mb-6 text-pink-600">
            Pink Sample Homepage
          </h1>
          <p className="text-pink-800 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            consequat dui semper eleifend finibus. Maecenas sagittis nibh id
            purus vehicula, vitae fermentum purus condimentum. Maecenas
            hendrerit purus a pretium mattis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Fusce feugiat, dolor eu aliquet
            placerat, risus massa mollis orci, sit amet viverra metus massa eu
            urna. Vivamus tempus non arcu quis convallis. Vivamus porta, massa
            id tempus vulputate, neque enim tempus sapien, id sodales metus
            lectus ac lorem.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-pink-300 rounded-full"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, idx) => (
            <Product key={idx} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
