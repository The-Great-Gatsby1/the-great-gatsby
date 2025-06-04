
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Map, Palette, BarChart3, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation - improved to avoid visibility issues
      gsap.fromTo(".hero-title", 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      // Hero subtitle animation
      gsap.fromTo(".hero-subtitle", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
      );

      // Cards staggered animation - ensure opacity reaches 1
      gsap.fromTo(".hero-card", 
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.6, ease: "power2.out" }
      );

      // Floating animation for decorative elements
      gsap.to(".float-element", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const sections = [
    {
      title: "Author",
      icon: Users,
      description: "Learn about F. Scott Fitzgerald and why he wrote this famous story",
      path: "/author",
      color: "emerald"
    },
    {
      title: "Characters",
      icon: Users,
      description: "Meet Gatsby, Daisy, Nick, and the other important people in the story",
      path: "/characters",
      color: "blue"
    },
    {
      title: "Plot",
      icon: Map,
      description: "Follow the exciting events of the summer of 1922",
      path: "/plot",
      color: "teal"
    },
    {
      title: "Themes",
      icon: Palette,
      description: "Discover the big ideas about dreams, love, and money",
      path: "/themes",
      color: "purple"
    },
    {
      title: "Analysis",
      icon: BarChart3,
      description: "Understand the deeper meanings and why this book is important",
      path: "/analysis",
      color: "indigo"
    },
    {
      title: "Quiz",
      icon: Trophy,
      description: "Test what you learned with a fun quiz game",
      path: "/game",
      color: "red"
    }
  ];

  return (
    <div ref={heroRef} className="min-h-screen bg-black relative overflow-hidden">
      {/* Art Deco Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-1 bg-gradient-to-r from-yellow-400 to-transparent float-element"></div>
        <div className="absolute top-40 right-20 w-24 h-1 bg-gradient-to-l from-yellow-400 to-transparent float-element"></div>
        <div className="absolute bottom-40 left-20 w-40 h-1 bg-gradient-to-r from-yellow-400 to-transparent float-element"></div>
        <div className="absolute bottom-20 right-10 w-28 h-1 bg-gradient-to-l from-yellow-400 to-transparent float-element"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="hero-title text-6xl md:text-8xl font-bold text-yellow-400 mb-6 font-[Playfair_Display] art-deco-title">
            THE GREAT GATSBY
          </h1>
          <div className="w-40 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 float-element"></div>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Explore F. Scott Fitzgerald's masterpiece about dreams, love, and the American Dream in the Jazz Age
          </p>
        </div>

        {/* Navigation Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Link key={section.path} to={section.path}>
                <Card className="hero-card improved-art-deco-card hover-lift bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm group cursor-pointer h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={28} className="text-black" />
                    </div>
                    <CardTitle className="text-xl font-bold text-yellow-400 font-[Playfair_Display] group-hover:text-yellow-300 transition-colors">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors">
                      {section.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Quick Facts Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hero-card bg-gray-900/80 border border-yellow-500/30 rounded-lg p-6 backdrop-blur-sm">
              <BookOpen className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Published 1925</h3>
              <p className="text-gray-200 text-sm">Written during the Jazz Age</p>
            </div>
            <div className="hero-card bg-gray-900/80 border border-yellow-500/30 rounded-lg p-6 backdrop-blur-sm">
              <Map className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Set in 1922</h3>
              <p className="text-gray-200 text-sm">Long Island, New York</p>
            </div>
            <div className="hero-card bg-gray-900/80 border border-yellow-500/30 rounded-lg p-6 backdrop-blur-sm">
              <Palette className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">American Classic</h3>
              <p className="text-gray-200 text-sm">One of the greatest novels ever written</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
