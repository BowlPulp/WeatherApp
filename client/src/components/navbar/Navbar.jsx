import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-[#070707dc] text-white border-b border-white w-full">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">WeatherVerse</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/signup" className="hover:text-gray-200">SIGN UP</Link>
          <Link to="/login" className="hover:text-gray-200">LOGIN</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
