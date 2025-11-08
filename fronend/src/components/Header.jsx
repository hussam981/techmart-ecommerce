import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="bg-blue-600 dark:bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">TechMart</Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/shop" className="hover:underline">Shop</Link>
          <Link to="/cart" className="hover:underline">Cart</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
        <button onClick={toggleDarkMode} className="ml-4 p-2 bg-gray-700 rounded">
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </header>
  );
};

export default Header;