const About = () => (
  <div className="min-h-screen bg-gradient-to-tr from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center px-4">
    <div className="max-w-2xl mx-auto w-full">
      <div className="bg-white/75 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-pink-200">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl mb-4">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            About Us
          </h1>
        </div>
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 border border-pink-100">
          <p className="text-pink-800 text-lg leading-relaxed text-center">
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
          <div className="mt-6 flex justify-center">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
              <div className="w-2 h-2 bg-rose-300 rounded-full"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
              <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
