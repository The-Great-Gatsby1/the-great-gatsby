
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Users, Map, Palette, BarChart3, Gamepad2, FileText, Heart, Mic, Video, BookmarkCheck } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: BookOpen },
    { path: "/author", label: "Author", icon: Users },
    { path: "/summary", label: "Summary", icon: FileText },
    { path: "/characters", label: "Characters", icon: Users },
    { path: "/plot", label: "Plot", icon: Map },
    { path: "/themes", label: "Themes", icon: Palette },
    { path: "/reading-journey", label: "Journey", icon: Heart },
    { path: "/reflections", label: "Reflections", icon: Mic },
    { path: "/media", label: "Media", icon: Video },
    { path: "/recommendations", label: "Recommendations", icon: BookmarkCheck },
    { path: "/works-cited", label: "Works Cited", icon: FileText },
    { path: "/game", label: "Quiz", icon: Gamepad2 }
  ];

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-yellow-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-gradient font-[Playfair_Display]">
            GATSBY
          </Link>
          <div className="hidden lg:flex space-x-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1 px-2 py-2 rounded-lg transition-all duration-300 hover:bg-yellow-500/10 hover:text-yellow-400 text-sm ${
                    location.pathname === item.path
                      ? "text-yellow-400 bg-yellow-500/10"
                      : "text-gray-300"
                  }`}
                >
                  <IconComponent size={16} />
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="lg:hidden">
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
