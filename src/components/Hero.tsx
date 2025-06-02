
import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 western-bg opacity-90"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
        <div className="mb-6">
          <Award className="mx-auto mb-4 text-yellow-300" size={60} />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-[Playfair_Display] drop-shadow-lg">
            Bull Rider
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-light">
            by Suzanne M. Williams
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            A powerful coming-of-age story about courage, family, and finding your own path in the world of rodeo.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/plot">
            <Button 
              size="lg" 
              className="bg-white text-orange-800 hover:bg-orange-50 transition-all duration-300 hover-lift shadow-xl"
            >
              Explore the Story
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
          <Link to="/characters">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-orange-800 transition-all duration-300 hover-lift"
            >
              Meet the Characters
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="hover-lift">
            <h3 className="text-2xl font-bold mb-2">Coming of Age</h3>
            <p className="opacity-90">A young man's journey to find his identity</p>
          </div>
          <div className="hover-lift">
            <h3 className="text-2xl font-bold mb-2">Family Legacy</h3>
            <p className="opacity-90">Wrestling with tradition and expectations</p>
          </div>
          <div className="hover-lift">
            <h3 className="text-2xl font-bold mb-2">Courage</h3>
            <p className="opacity-90">Finding strength in the face of danger</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
