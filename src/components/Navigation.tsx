
import { Link, useLocation } from "react-router-dom";
import { Home, User, BookOpen, Lightbulb, Star } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/author", label: "Author", icon: User },
    { path: "/characters", label: "Characters", icon: User },
    { path: "/plot", label: "Plot", icon: BookOpen },
    { path: "/themes", label: "Themes", icon: Lightbulb },
    { path: "/analysis", label: "Analysis", icon: Star },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b-2 border-orange-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-2xl text-gradient font-[Playfair_Display]">
              Bull Rider
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === path
                    ? "bg-orange-100 text-orange-800 font-semibold"
                    : "text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-orange-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
