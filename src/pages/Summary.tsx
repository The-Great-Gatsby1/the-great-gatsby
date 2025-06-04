
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Star, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Summary = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".summary-card", 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );

      gsap.fromTo(".summary-title", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-black">
      <Navigation />
      
      {/* Art Deco Background Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-32 left-10 w-32 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        <div className="absolute top-52 right-20 w-24 h-1 bg-gradient-to-l from-yellow-400 to-transparent"></div>
        <div className="absolute bottom-40 left-20 w-40 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        <div className="absolute bottom-20 right-10 w-28 h-1 bg-gradient-to-l from-yellow-400 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12 fade-in">
          <h1 className="summary-title text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display] art-deco-title">
            Book Summary
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            A complete overview of "The Great Gatsby"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="summary-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <BookOpen className="text-yellow-400" />
                What's It About?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 leading-relaxed mb-4">
                "The Great Gatsby" tells the story of Jay Gatsby, a mysterious rich man who throws huge parties 
                hoping to win back his lost love, Daisy. The story is told by Nick Carraway, who moves next door 
                to Gatsby and watches everything unfold during the summer of 1922.
              </p>
              <p className="text-gray-200 leading-relaxed">
                It's a story about love, dreams, and the American Dream - but also about how money and social 
                class can divide people and corrupt their values.
              </p>
            </CardContent>
          </Card>

          <Card className="summary-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Users className="text-yellow-400" />
                Main Characters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-yellow-300">Jay Gatsby</h4>
                  <p className="text-gray-200 text-sm">The mysterious millionaire who loves Daisy</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-yellow-300">Nick Carraway</h4>
                  <p className="text-gray-200 text-sm">The narrator who tells us the story</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-yellow-300">Daisy Buchanan</h4>
                  <p className="text-gray-200 text-sm">Gatsby's lost love, now married to Tom</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-yellow-300">Tom Buchanan</h4>
                  <p className="text-gray-200 text-sm">Daisy's wealthy but mean husband</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="summary-card hover-lift mb-12 improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Star className="text-yellow-400" />
              Key Themes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-yellow-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-yellow-500/50">
                  <Star className="text-yellow-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-300">The American Dream</h4>
                <p className="text-gray-200 text-sm">The idea that anyone can become successful and happy in America</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-yellow-500/50">
                  <Users className="text-yellow-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-300">Social Class</h4>
                <p className="text-gray-200 text-sm">How money and family background divide people into groups</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-yellow-500/50">
                  <BookOpen className="text-yellow-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-300">Love vs. Money</h4>
                <p className="text-gray-200 text-sm">Can true love exist when money and status matter so much?</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="summary-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Clock className="text-yellow-400" />
              Quick Facts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-yellow-300">Publication Info</h4>
                <ul className="text-gray-200 space-y-2 text-sm">
                  <li><span className="font-medium text-yellow-400">Published:</span> 1925</li>
                  <li><span className="font-medium text-yellow-400">Author:</span> F. Scott Fitzgerald</li>
                  <li><span className="font-medium text-yellow-400">Pages:</span> About 180 pages</li>
                  <li><span className="font-medium text-yellow-400">Genre:</span> American Literature</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-yellow-300">Setting</h4>
                <ul className="text-gray-200 space-y-2 text-sm">
                  <li><span className="font-medium text-yellow-400">Time:</span> Summer of 1922</li>
                  <li><span className="font-medium text-yellow-400">Place:</span> Long Island, New York</li>
                  <li><span className="font-medium text-yellow-400">Era:</span> The Jazz Age (1920s)</li>
                  <li><span className="font-medium text-yellow-400">Context:</span> After World War I</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-5 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
              <h4 className="font-semibold text-yellow-300 mb-2">Why Read This Book?</h4>
              <p className="text-gray-200">
                "The Great Gatsby" is considered one of the greatest American novels because it perfectly captures 
                the excitement and disappointment of the American Dream. It's beautifully written, with memorable 
                characters and a story that still feels relevant today.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Summary;
