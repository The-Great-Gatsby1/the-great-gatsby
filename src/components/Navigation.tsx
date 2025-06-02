
import { Link, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
            <BookOpen size={28} />
            <span className="font-[Playfair_Display]">The Great Gatsby</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`text-lg font-medium transition-colors hover:text-emerald-600 ${
                isActive('/') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/author" 
              className={`text-lg font-medium transition-colors hover:text-emerald-600 ${
                isActive('/author') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700'
              }`}
            >
              Author
            </Link>
            <Link 
              to="/characters" 
              className={`text-lg font-medium transition-colors hover:text-emerald-600 ${
                isActive('/characters') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700'
              }`}
            >
              Characters
            </Link>
            <Link 
              to="/plot" 
              className={`text-lg font-medium transition-colors hover:text-emerald-600 ${
                isActive('/plot') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700'
              }`}
            >
              Plot
            </Link>
            <Link 
              to="/themes" 
              className={`text-lg font-medium transition-colors hover:text-emerald-600 ${
                isActive('/themes') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700'
              }`}
            >
              Themes
            </Link>
            <Link 
              to="/analysis" 
              className={`text-lg font-medium transition-colors hover:text-emerald-600 ${
                isActive('/analysis') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700'
              }`}
            >
              Analysis
            </Link>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-emerald-600">
              <BookOpen size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
