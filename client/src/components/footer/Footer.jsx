function Footer() {
    return (
      <footer className="bg-[#070707dc] text-white py-8 border-t border-white w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="text-2xl font-bold mb-2">WeatherVerse</Link>
            <p className="text-sm text-gray-400">
              Your trusted source for accurate weather updates.
            </p>
          </div>
  
          {/* Middle Section - Navigation Links */}
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About Us</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
          </div>
  
          {/* Right Section - Social Media Icons */}
          <div className="mt-4 md:mt-0 flex space-x-4">
            {/* Add your social media links here */}
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
          </div>
        </div>
  
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} WeatherVerse. All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  