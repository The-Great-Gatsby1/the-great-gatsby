
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Lightbulb, FileText, Sparkles, GamepadIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      // Stagger cards animation
      gsap.from(".nav-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.5,
        ease: "power2.out"
      });

      // Book floating animation
      gsap.to(bookRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      // Background elements animation
      gsap.to(".bg-element", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (element: EventTarget | null) => {
    if (element) {
      gsap.to(element, {
        scale: 1.05,
        rotationY: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleCardLeave = (element: EventTarget | null) => {
    if (element) {
      gsap.to(element, {
        scale: 1,
        rotationY: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <div ref={heroRef} className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="bg-element absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
        <div className="bg-element absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full"></div>
        <div className="bg-element absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-cyan-300 to-emerald-300 rounded-full"></div>
        <div className="bg-element absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
              <Sparkles className="text-emerald-600 animate-pulse" size={24} />
              <span className="text-emerald-600 font-semibold">Famous American Book</span>
            </div>
            <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient mb-6 font-[Playfair_Display]">
              The Great Gatsby
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-[Playfair_Display] italic">
              by F. Scott Fitzgerald
            </p>
            <div className="group relative inline-block mb-8">
              <p className="text-xl text-gray-700 max-w-2xl lg:max-w-none leading-relaxed cursor-help">
                Learn about the American Dream, love, and the 1920s in this famous story 
                about Jay Gatsby who wants to <span className="underline decoration-emerald-300 decoration-wavy">win back Daisy</span> in New York.
              </p>
              <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-white p-3 rounded-lg shadow-lg border max-w-xs">
                <p className="text-sm text-gray-600">
                  The story shows how people chase dreams of money and love, but sometimes these dreams can hurt them.
                </p>
              </div>
            </div>
            <Link to="/analysis">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Start Learning
                <BookOpen className="ml-2" size={20} />
              </Button>
            </Link>
          </div>

          <div className="flex justify-center">
            <div ref={bookRef} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-xl opacity-40 animate-pulse"></div>
              <img 
                src="/lovable-uploads/ec2bfb7d-581b-4ebf-87b0-8bca40369d35.png" 
                alt="The Great Gatsby Book Cover" 
                className="relative w-80 h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => {
                  gsap.to(bookRef.current, {
                    rotation: 360,
                    duration: 1,
                    ease: "power2.inOut"
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          <Link to="/author" className="group nav-card">
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border border-white/20 transition-all duration-300 hover:bg-white"
              onMouseEnter={(e) => handleCardHover(e.currentTarget)}
              onMouseLeave={(e) => handleCardLeave(e.currentTarget)}
            >
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all">
                <FileText className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">The Writer</h3>
              <p className="text-gray-600 text-sm">Learn about F. Scott Fitzgerald</p>
            </div>
          </Link>

          <Link to="/characters" className="group nav-card">
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border border-white/20 transition-all duration-300 hover:bg-white"
              onMouseEnter={(e) => handleCardHover(e.currentTarget)}
              onMouseLeave={(e) => handleCardLeave(e.currentTarget)}
            >
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-teal-200 group-hover:to-teal-300 transition-all">
                <Users className="text-teal-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">People</h3>
              <p className="text-gray-600 text-sm">Meet Gatsby, Daisy, and Nick</p>
            </div>
          </Link>

          <Link to="/plot" className="group nav-card">
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border border-white/20 transition-all duration-300 hover:bg-white"
              onMouseEnter={(e) => handleCardHover(e.currentTarget)}
              onMouseLeave={(e) => handleCardLeave(e.currentTarget)}
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Story</h3>
              <p className="text-gray-600 text-sm">What happens in the book</p>
            </div>
          </Link>

          <Link to="/themes" className="group nav-card">
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border border-white/20 transition-all duration-300 hover:bg-white"
              onMouseEnter={(e) => handleCardHover(e.currentTarget)}
              onMouseLeave={(e) => handleCardLeave(e.currentTarget)}
            >
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-purple-300 transition-all">
                <Lightbulb className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Big Ideas</h3>
              <p className="text-gray-600 text-sm">What the book teaches us</p>
            </div>
          </Link>

          <Link to="/game" className="group nav-card">
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center border border-white/20 transition-all duration-300 hover:bg-white"
              onMouseEnter={(e) => handleCardHover(e.currentTarget)}
              onMouseLeave={(e) => handleCardLeave(e.currentTarget)}
            >
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-pink-200 group-hover:to-pink-300 transition-all">
                <GamepadIcon className="text-pink-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Fun Quiz</h3>
              <p className="text-gray-600 text-sm">Test what you learned!</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
