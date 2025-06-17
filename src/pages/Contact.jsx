const Contact = () => (
  <div className="min-h-screen bg-gradient-to-bl from-pink-100 to-pink-200 flex items-center justify-center px-4">
    <div className="max-w-md mx-auto w-full">
      <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-2xl border border-pink-200">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-pink-600">Contact</h1>
        </div>
        <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
          <p className="text-pink-900 text-center text-lg">
            Email us at
            <span className="block mt-2 font-semibold text-pink-700">
              contact@example.com
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
