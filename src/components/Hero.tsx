
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Lightbulb, FileText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-300 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left fade-in">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
              <Sparkles className="text-emerald-600" size={24} />
              <span className="text-emerald-600 font-semibold">American Classic</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient mb-6 font-[Playfair_Display]">
              The Great Gatsby
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-[Playfair_Display] italic">
              by F. Scott Fitzgerald
            </p>
            <p className="text-xl text-gray-700 max-w-2xl lg:max-w-none leading-relaxed mb-8">
              Explore the American Dream, love, and the Jazz Age in this timeless classic 
              about Jay Gatsby's quest to win back Daisy Buchanan in 1920s New York.
            </p>
            <Link to="/analysis">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                Start Reading Analysis
                <BookOpen className="ml-2" size={20} />
              </Button>
            </Link>
          </div>

          <div className="flex justify-center fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <img 
                src="/lovable-uploads/ec2bfb7d-581b-4ebf-87b0-8bca40369d35.png" 
                alt="The Great Gatsby Book Cover" 
                className="relative w-80 h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Link to="/author" className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover-lift text-center border border-white/20">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all">
                <FileText className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">About F. Scott Fitzgerald</h3>
              <p className="text-gray-600">Learn about the author and his writing style</p>
            </div>
          </Link>

          <Link to="/characters" className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover-lift text-center border border-white/20">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-teal-200 group-hover:to-teal-300 transition-all">
                <Users className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Characters</h3>
              <p className="text-gray-600">Meet Gatsby, Daisy, Nick, and other key characters</p>
            </div>
          </Link>

          <Link to="/plot" className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover-lift text-center border border-white/20">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Plot Summary</h3>
              <p className="text-gray-600">Follow the story from beginning to end</p>
            </div>
          </Link>

          <Link to="/themes" className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover-lift text-center border border-white/20">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-purple-300 transition-all">
                <Lightbulb className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Themes</h3>
              <p className="text-gray-600">Explore the deeper meanings and messages</p>
            </div>
          </Link>
        </div>

        <div className="text-center fade-in">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-[Playfair_Display]">
              Perfect for Your English Presentation
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Everything you need to understand and present "The Great Gatsby" - from character analysis 
              to themes and literary significance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                Grade 10 Appropriate
              </span>
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                Curriculum Aligned
              </span>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Easy to Understand
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
