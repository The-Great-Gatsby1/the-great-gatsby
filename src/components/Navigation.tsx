
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-emerald-700 hover:text-emerald-800 transition-colors group">
            <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
              <BookOpen size={28} className="group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-[Playfair_Display]">The Great Gatsby</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`text-lg font-medium transition-all hover:text-emerald-600 relative ${
                isActive('/') ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 rounded-full"></span>
              )}
            </Link>
            <Link 
              to="/author" 
              className={`text-lg font-medium transition-all hover:text-emerald-600 relative ${
                isActive('/author') ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              Author
              {isActive('/author') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 rounded-full"></span>
              )}
            </Link>
            <Link 
              to="/characters" 
              className={`text-lg font-medium transition-all hover:text-emerald-600 relative ${
                isActive('/characters') ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              Characters
              {isActive('/characters') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 rounded-full"></span>
              )}
            </Link>
            <Link 
              to="/plot" 
              className={`text-lg font-medium transition-all hover:text-emerald-600 relative ${
                isActive('/plot') ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              Plot
              {isActive('/plot') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 rounded-full"></span>
              )}
            </Link>
            <Link 
              to="/themes" 
              className={`text-lg font-medium transition-all hover:text-emerald-600 relative ${
                isActive('/themes') ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              Themes
              {isActive('/themes') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 rounded-full"></span>
              )}
            </Link>
            <Link 
              to="/analysis" 
              className={`text-lg font-medium transition-all hover:text-emerald-600 relative ${
                isActive('/analysis') ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              Analysis
              {isActive('/analysis') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 rounded-full"></span>
              )}
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-emerald-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-100">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                onClick={toggleMenu}
                className={`text-lg font-medium transition-colors hover:text-emerald-600 py-2 ${
                  isActive('/') ? 'text-emerald-600' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/author" 
                onClick={toggleMenu}
                className={`text-lg font-medium transition-colors hover:text-emerald-600 py-2 ${
                  isActive('/author') ? 'text-emerald-600' : 'text-gray-700'
                }`}
              >
                Author
              </Link>
              <Link 
                to="/characters" 
                onClick={toggleMenu}
                className={`text-lg font-medium transition-colors hover:text-emerald-600 py-2 ${
                  isActive('/characters') ? 'text-emerald-600' : 'text-gray-700'
                }`}
              >
                Characters
              </Link>
              <Link 
                to="/plot" 
                onClick={toggleMenu}
                className={`text-lg font-medium transition-colors hover:text-emerald-600 py-2 ${
                  isActive('/plot') ? 'text-emerald-600' : 'text-gray-700'
                }`}
              >
                Plot
              </Link>
              <Link 
                to="/themes" 
                onClick={toggleMenu}
                className={`text-lg font-medium transition-colors hover:text-emerald-600 py-2 ${
                  isActive('/themes') ? 'text-emerald-600' : 'text-gray-700'
                }`}
              >
                Themes
              </Link>
              <Link 
                to="/analysis" 
                onClick={toggleMenu}
                className={`text-lg font-medium transition-colors hover:text-emerald-600 py-2 ${
                  isActive('/analysis') ? 'text-emerald-600' : 'text-gray-700'
                }`}
              >
                Analysis
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
