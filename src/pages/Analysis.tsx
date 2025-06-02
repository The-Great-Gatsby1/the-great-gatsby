
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Quote, BookMarked, Lightbulb } from "lucide-react";

const Analysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-[Playfair_Display]">
            Literary Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Examining the deeper elements and significance of "The Great Gatsby"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookMarked className="text-emerald-600" />
                Style and Language
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Fitzgerald's writing in "The Great Gatsby" is known for its beauty and poetic quality. 
                He uses rich descriptions that appeal to all the senses - we see the colorful shirts, 
                hear the music at parties, and feel the summer heat. His sentences flow with a musical 
                quality that makes the book a pleasure to read.
              </p>
              <div className="mt-4 p-4 bg-emerald-50 rounded-md border border-emerald-100">
                <h4 className="font-semibold text-emerald-700 mb-2">Famous Quote:</h4>
                <p className="italic text-emerald-600">
                  "So we beat on, boats against the current, borne back ceaselessly into the past."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Quote className="text-emerald-600" />
                Symbolism
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-emerald-300 pl-4">
                  <h4 className="font-semibold text-gray-800">The Green Light</h4>
                  <p className="text-gray-600">Represents Gatsby's hopes and dreams - both Daisy and the American Dream</p>
                </div>
                <div className="border-l-4 border-emerald-300 pl-4">
                  <h4 className="font-semibold text-gray-800">The Valley of Ashes</h4>
                  <p className="text-gray-600">A wasteland between wealthy areas that represents moral and social decay</p>
                </div>
                <div className="border-l-4 border-emerald-300 pl-4">
                  <h4 className="font-semibold text-gray-800">The Eyes of Dr. T.J. Eckleburg</h4>
                  <p className="text-gray-600">Billboard eyes that watch over the Valley of Ashes like God watching a morally empty world</p>
                </div>
                <div className="border-l-4 border-emerald-300 pl-4">
                  <h4 className="font-semibold text-gray-800">Weather</h4>
                  <p className="text-gray-600">Heat during tense scenes, rain during emotional moments - the weather matches the mood</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="hover-lift mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="text-emerald-600" />
              Narrative Perspective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              The story is told by Nick Carraway, who isn't the main character but observes everything. 
              This choice is important because Nick is both inside the story (friends with Gatsby and Daisy) 
              and outside it (watching and judging). He starts by saying he doesn't judge people but ends up 
              judging the characters and their choices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nick isn't always a reliable narrator. Sometimes his views are colored by his own feelings 
              about the people he's describing. This makes readers think more deeply about what's really happening.
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="text-emerald-600" />
              Historical and Cultural Context
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-gray-800">The Jazz Age</h4>
                <p className="text-gray-700 leading-relaxed text-sm">
                  The story happens in the 1920s, nicknamed the "Jazz Age" or "Roaring Twenties." 
                  This was a time of celebration after World War I, with wild parties, new music, 
                  and economic boom. Gatsby's parties represent this carefree atmosphere.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-gray-800">Prohibition</h4>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Alcohol was illegal during this time, leading to bootlegging (illegal alcohol sales) 
                  and organized crime. Gatsby's mysterious wealth likely comes from illegal activities, 
                  showing how Prohibition created new paths to wealth.
                </p>
              </div>
            </div>
            <div className="mt-6 p-5 bg-emerald-50 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">Why This Book Matters</h4>
              <p className="text-emerald-700">
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
