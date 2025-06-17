import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-100 to-pink-200 shadow-2xl border-b border-pink-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-5xl font-bold mb-6 font-playfair bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 bg-clip-text text-transparent tracking-wide"
          >
            The Red Wick
          </Link>

          <div className="flex space-x-6">
            <Link
              to="/"
              className="bg-white bg-opacity-80 px-4 py-2 rounded-full text-pink-900 font-medium hover:bg-opacity-100 hover:text-pink-800 shadow-sm border border-pink-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="bg-white bg-opacity-80 px-4 py-2 rounded-full text-pink-900 font-medium hover:bg-opacity-100 hover:text-pink-800 shadow-sm border border-pink-200"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="bg-white bg-opacity-80 px-4 py-2 rounded-full text-pink-900 font-medium hover:bg-opacity-100 hover:text-pink-800 shadow-sm border border-pink-200"
            >
              Book Workshop
            </Link>

            <Link
              to="/contact"
              className="bg-white bg-opacity-80 px-4 py-2 rounded-full text-pink-900 font-medium hover:bg-opacity-100 hover:text-pink-800 shadow-sm border border-pink-200"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="bg-white bg-opacity-80 px-4 py-2 rounded-full text-pink-900 font-medium hover:bg-opacity-100 hover:text-pink-800 shadow-sm border border-pink-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
