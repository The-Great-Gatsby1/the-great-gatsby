
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Award, Pen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Author = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Improved GSAP animations to ensure proper visibility
      gsap.fromTo(".author-card", 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );

      gsap.fromTo(".author-title", 
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
          <h1 className="author-title text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display] art-deco-title">
            F. Scott Fitzgerald
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            The American author who captured the Jazz Age in "The Great Gatsby"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="author-card hover-lift lg:col-span-1 improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-yellow-400 font-[Playfair_Display]">F. Scott Fitzgerald</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/e92f05a3-7a3c-420d-abdc-5ab022c64945.png" 
                  alt="F. Scott Fitzgerald" 
                  className="w-48 h-64 object-cover rounded-lg mx-auto shadow-lg border-2 border-yellow-500/50"
                />
              </div>
              <p className="text-gray-200 mb-4 text-sm">
                (1896-1940)
              </p>
              <Button 
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                onClick={() => window.open('https://en.wikipedia.org/wiki/F._Scott_Fitzgerald', '_blank')}
              >
                <ExternalLink size={16} className="mr-2" />
                Read Full Biography
              </Button>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-8">
            <Card className="author-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                  <Pen className="text-yellow-400" />
                  About the Author
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 leading-relaxed mb-4">
                  F. Scott Fitzgerald (1896-1940) was an American writer famous for writing about the 
                  Jazz Age of the 1920s. He lived during this exciting time and wrote about the parties, 
                  wealth, and problems of rich people in America.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Fitzgerald had money problems and struggled with drinking, which helped him understand both 
                  the fun and sad sides of American life. His own life experiences made "The Great Gatsby" 
                  feel real and meaningful.
                </p>
              </CardContent>
            </Card>

            <Card className="author-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                  <BookOpen className="text-yellow-400" />
                  His Writing Style
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-yellow-300">Beautiful Language</h4>
                    <p className="text-gray-200">Fitzgerald writes with poetic, flowing sentences that paint clear pictures</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-yellow-300">Symbols and Hidden Meanings</h4>
                    <p className="text-gray-200">He uses objects like the green light to represent bigger ideas</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-yellow-300">Shows Society's Problems</h4>
                    <p className="text-gray-200">He shows both the beauty and ugliness of wealthy American society</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="author-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Award className="text-yellow-400" />
              Why "The Great Gatsby" Is Important
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-yellow-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-yellow-500/50">
                  <BookOpen className="text-yellow-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-300">American Classic</h4>
                <p className="text-gray-200 text-sm">Shows the American Dream and its problems</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-yellow-500/50">
                  <Award className="text-yellow-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-300">Perfect Writing</h4>
                <p className="text-gray-200 text-sm">Beautiful language that many consider perfect</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-yellow-500/50">
                  <Pen className="text-yellow-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-300">Still Important Today</h4>
                <p className="text-gray-200 text-sm">Themes about wealth and dreams still matter now</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Author;
