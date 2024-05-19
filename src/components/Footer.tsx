const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-600">ACME</h2>
        </div>
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="font-semibold text-gray-800 mb-2">First column</h3>
          <ul className="text-gray-600">
            <li className="mb-1">
              <a href="#">First page</a>
            </li>
            <li className="mb-1">
              <a href="#">Second page</a>
            </li>
            <li className="mb-1">
              <a href="#">Third</a>
            </li>
            <li className="mb-1">
              <a href="#">Fourth</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="font-semibold text-gray-800 mb-2">Second</h3>
          <ul className="text-gray-600">
            <li className="mb-1">
              <a href="#">Fifth page</a>
            </li>
            <li className="mb-1">
              <a href="#">Sixth page</a>
            </li>
            <li className="mb-1">
              <a href="#">Eighth</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="font-semibold text-gray-800 mb-2">Third</h3>
          <ul className="text-gray-600">
            <li className="mb-1">
              <a href="#">Fifth page</a>
            </li>
            <li className="mb-1">
              <a href="#">Sixth page</a>
            </li>
            <li className="mb-1">
              <a href="#">Eighth</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <h3 className="font-semibold text-gray-800 mb-2">Subscribe</h3>
          <div className="flex mb-4">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              placeholder="Placeholder"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
          <p className="text-gray-600">
            Join our newsletter to stay up to date on features and releases
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
