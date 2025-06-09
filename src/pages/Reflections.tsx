
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Target, BookOpen, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reflections = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display]">
            Personal Reflections
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            My thoughts on reading, interpretation, and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <BookOpen className="text-yellow-400" />
                What Kind of Reader Am I?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 leading-relaxed mb-4">
                I'm an <strong className="text-yellow-300">emotional reader</strong> - I get really invested in characters 
                and their stories. I find myself rooting for them even when they make bad choices.
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                I also love books with <strong className="text-yellow-300">beautiful language</strong>. Fitzgerald's 
                writing style really spoke to me - the way he describes scenes feels like poetry.
              </p>
              <p className="text-gray-200 leading-relaxed">
                I prefer books that make me <strong className="text-yellow-300">think deeply</strong> about life, 
                society, and human nature rather than just pure entertainment.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Target className="text-yellow-400" />
                My Reading Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-yellow-300">Short-term Goals</h4>
                  <p className="text-gray-200 text-sm">Read 12 classic novels this year, focusing on American literature</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-yellow-300">Long-term Goals</h4>
                  <p className="text-gray-200 text-sm">Develop better analytical skills and write thoughtful book reviews</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-yellow-300">Personal Goal</h4>
                  <p className="text-gray-200 text-sm">Use reading to become more empathetic and understanding of different perspectives</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Heart className="text-yellow-400" />
              My Interpretation of "The Great Gatsby"
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">The Green Light</h4>
                <p className="text-gray-200">
                  To me, the green light represents hope that's always just out of reach. We all have our "green lights" - 
                  dreams that keep us moving forward even when they might be impossible to achieve.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">Gatsby's Character</h4>
                <p className="text-gray-200">
                  I see Gatsby as both admirable and tragic. His dedication to his dream is inspiring, 
                  but his inability to accept reality ultimately destroys him. He represents the best and worst of the American Dream.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">The Ending</h4>
                <p className="text-gray-200">
                  The final line about being "borne back ceaselessly into the past" really resonates with me. 
                  It suggests that we're all shaped by our past, but we shouldn't let it prevent us from moving forward.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Mic className="text-yellow-400" />
              Audio Reflection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <p className="text-gray-200 mb-4">
                Listen to my personal reflection on how this book changed my perspective on dreams, reality, and the American experience.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Mic className="mr-2" size={16} />
                Play Audio Reflection (3:45)
              </Button>
              <p className="text-gray-400 text-sm mt-2">
                *Audio feature coming soon - this would include a personal voiceover reflection
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reflections;
