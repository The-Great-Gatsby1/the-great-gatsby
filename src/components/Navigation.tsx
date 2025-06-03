
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Users, Map, Palette, BarChart3, Gamepad2 } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: BookOpen },
    { path: "/author", label: "Author", icon: Users },
    { path: "/characters", label: "Characters", icon: Users },
    { path: "/plot", label: "Plot", icon: Map },
    { path: "/themes", label: "Themes", icon: Palette },
    { path: "/analysis", label: "Analysis", icon: BarChart3 },
    { path: "/game", label: "Quiz", icon: Gamepad2 }
  ];

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-yellow-500/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-gradient font-[Playfair_Display]">
            GATSBY
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-yellow-500/10 hover:text-yellow-400 ${
                    location.pathname === item.path
                      ? "text-yellow-400 bg-yellow-500/10"
                      : "text-gray-300"
                  }`}
                >
                  <IconComponent size={18} />
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-yellow-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
