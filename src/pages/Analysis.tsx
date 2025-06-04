
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Quote, BookMarked, Lightbulb } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Analysis = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Improved GSAP animations
      gsap.fromTo(".analysis-card", 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );

      gsap.fromTo(".analysis-title", 
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
          <h1 className="analysis-title text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display] art-deco-title">
            Literary Analysis
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Examining the deeper elements and significance of "The Great Gatsby"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="analysis-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <BookMarked className="text-yellow-400" />
                Style and Language
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 leading-relaxed">
                Fitzgerald's writing in "The Great Gatsby" is known for its beauty and poetic quality. 
                He uses rich descriptions that appeal to all the senses - we see the colorful shirts, 
                hear the music at parties, and feel the summer heat. His sentences flow with a musical 
                quality that makes the book a pleasure to read.
              </p>
              <div className="mt-4 p-4 bg-yellow-500/20 rounded-md border border-yellow-500/30 group-hover:bg-yellow-500/30 transition-colors">
                <h4 className="font-semibold text-yellow-300 mb-2">Famous Quote:</h4>
                <p className="italic text-yellow-200">
                  "So we beat on, boats against the current, borne back ceaselessly into the past."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="analysis-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Quote className="text-yellow-400" />
                Symbolism
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-yellow-400 pl-4 group-hover:border-yellow-300 transition-colors">
                  <h4 className="font-semibold text-yellow-300">The Green Light</h4>
                  <p className="text-gray-200">Represents Gatsby's hopes and dreams - both Daisy and the American Dream</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4 group-hover:border-yellow-300 transition-colors">
                  <h4 className="font-semibold text-yellow-300">The Valley of Ashes</h4>
                  <p className="text-gray-200">A wasteland between wealthy areas that represents moral and social decay</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4 group-hover:border-yellow-300 transition-colors">
                  <h4 className="font-semibold text-yellow-300">The Eyes of Dr. T.J. Eckleburg</h4>
                  <p className="text-gray-200">Billboard eyes that watch over the Valley of Ashes like God watching a morally empty world</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4 group-hover:border-yellow-300 transition-colors">
                  <h4 className="font-semibold text-yellow-300">Weather</h4>
                  <p className="text-gray-200">Heat during tense scenes, rain during emotional moments - the weather matches the mood</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="analysis-card hover-lift mb-12 improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Lightbulb className="text-yellow-400" />
              Narrative Perspective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-200 leading-relaxed mb-4">
              The story is told by Nick Carraway, who isn't the main character but observes everything. 
              This choice is important because Nick is both inside the story (friends with Gatsby and Daisy) 
              and outside it (watching and judging). He starts by saying he doesn't judge people but ends up 
              judging the characters and their choices.
            </p>
            <p className="text-gray-200 leading-relaxed">
              Nick isn't always a reliable narrator. Sometimes his views are colored by his own feelings 
              about the people he's describing. This makes readers think more deeply about what's really happening.
            </p>
          </CardContent>
        </Card>

        <Card className="analysis-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <BookOpen className="text-yellow-400" />
              Historical and Cultural Context
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-yellow-300">The Jazz Age</h4>
                <p className="text-gray-200 leading-relaxed text-sm">
                  The story happens in the 1920s, nicknamed the "Jazz Age" or "Roaring Twenties." 
                  This was a time of celebration after World War I, with wild parties, new music, 
                  and economic boom. Gatsby's parties represent this carefree atmosphere.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-yellow-300">Prohibition</h4>
                <p className="text-gray-200 leading-relaxed text-sm">
                  Alcohol was illegal during this time, leading to bootlegging (illegal alcohol sales) 
                  and organized crime. Gatsby's mysterious wealth likely comes from illegal activities, 
                  showing how Prohibition created new paths to wealth.
                </p>
              </div>
            </div>
            <div className="mt-6 p-5 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
              <h4 className="font-semibold text-yellow-300 mb-2">Why This Book Matters</h4>
              <p className="text-gray-200">
                "The Great Gatsby" captures a specific moment in American history while telling a timeless 
                story about dreams, love, and social class. It helps us understand both 1920s America and 
                universal human experiences. The book was not popular when first published but is now considered 
                one of the greatest American novels ever written.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analysis;
