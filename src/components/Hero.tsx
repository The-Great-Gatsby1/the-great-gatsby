
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Lightbulb, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6 font-[Playfair_Display]">
            The Great Gatsby
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-[Playfair_Display] italic">
            by F. Scott Fitzgerald
          </p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore the American Dream, love, and the Jazz Age in this timeless classic 
            about Jay Gatsby's pursuit of Daisy Buchanan in 1920s New York.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Link to="/author" className="group">
            <div className="bg-white rounded-xl shadow-lg p-6 hover-lift text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <FileText className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">About F. Scott Fitzgerald</h3>
              <p className="text-gray-600">Learn about the author and his writing style</p>
            </div>
          </Link>

          <Link to="/characters" className="group">
            <div className="bg-white rounded-xl shadow-lg p-6 hover-lift text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                <Users className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Characters</h3>
              <p className="text-gray-600">Meet Gatsby, Daisy, Nick, and other key characters</p>
            </div>
          </Link>

          <Link to="/plot" className="group">
            <div className="bg-white rounded-xl shadow-lg p-6 hover-lift text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Plot Summary</h3>
              <p className="text-gray-600">Follow the story from beginning to end</p>
            </div>
          </Link>

          <Link to="/themes" className="group">
            <div className="bg-white rounded-xl shadow-lg p-6 hover-lift text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Lightbulb className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Themes</h3>
              <p className="text-gray-600">Explore the deeper meanings and messages</p>
            </div>
          </Link>
        </div>

        <div className="text-center fade-in">
          <Link to="/analysis">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg rounded-lg">
              Literary Analysis
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
