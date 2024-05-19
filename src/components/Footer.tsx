const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-600">SharingSphere</h2>
        </div>
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="font-semibold text-gray-800 mb-2">PRODUCT</h3>
          <ul className="text-gray-600">
            <li className="mb-1">
              <a href="#">Updates</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="font-semibold text-gray-800 mb-2">RESOURCES</h3>
          <ul className="text-gray-600">
            <li className="mb-1">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <h3 className="font-semibold text-gray-800 mb-2">LEGAL</h3>
          <ul className="text-gray-600">
            <li className="mb-1">
              <a href="#">Terms of use</a>
            </li>
            <li className="mb-1">
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <h3 className="font-semibold text-gray-800 mb-2">Subscribe</h3>
          <div className="flex mb-4">
            <iframe
              src="https://embeds.beehiiv.com/80011444-abe0-4d3a-beb8-67699f5e0c24?slim=true"
              data-test-id="beehiiv-embed"
              height="52"
              frameBorder="0"
              scrolling="no"
              style={{
                margin: 0,
                borderRadius: 0,
                backgroundColor: "transparent",
              }}
            />
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
