
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Calendar, BookOpen, Star, Clock } from "lucide-react";

const ReadingJourney = () => {
  const journeyEntries = [
    {
      date: "Week 1",
      chapter: "Chapters 1-3",
      thoughts: "First impressions of Nick and the mysterious Gatsby. The green light immediately caught my attention - it seems so symbolic!",
      feeling: "Curious"
    },
    {
      date: "Week 2", 
      chapter: "Chapters 4-6",
      thoughts: "Meeting Gatsby was not what I expected. He seems so nervous and awkward, not the confident party host I imagined.",
      feeling: "Surprised"
    },
    {
      date: "Week 3",
      chapter: "Chapters 7-9", 
      thoughts: "The ending broke my heart. Gatsby's death felt so unfair - he was the only one who truly believed in his dreams.",
      feeling: "Heartbroken"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display]">
            My Reading Journey
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Follow my personal experience reading "The Great Gatsby"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Heart className="text-yellow-400" />
                Why I Chose This Book
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 leading-relaxed mb-4">
                I've always been fascinated by the 1920s - the fashion, the music, the glamour. 
                When I heard "The Great Gatsby" perfectly captured the Jazz Age, I knew I had to read it.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Plus, everyone always talks about how it's a "classic," so I wanted to see what 
                all the fuss was about. I'm glad I did - it lived up to the hype!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <BookOpen className="text-yellow-400" />
                Reading Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="text-yellow-400" size={20} />
                  <span className="text-gray-200">Reading Time: 3 weeks</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-400" size={20} />
                  <span className="text-gray-200">Difficulty: Medium</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="text-yellow-400" size={20} />
                  <span className="text-gray-200">Emotional Impact: High</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Calendar className="text-yellow-400" />
              Week-by-Week Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {journeyEntries.map((entry, index) => (
                <div key={index} className="border-l-4 border-yellow-400 pl-6 relative">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-yellow-400 rounded-full"></div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-semibold text-yellow-300">{entry.date}</h3>
                      <span className="text-sm text-gray-400">{entry.chapter}</span>
                      <span className="text-sm bg-yellow-500/30 px-2 py-1 rounded text-yellow-200">
                        Feeling: {entry.feeling}
                      </span>
                    </div>
                    <p className="text-gray-200">{entry.thoughts}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-[Playfair_Display]">Personal Connection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-200 leading-relaxed mb-4">
              Reading "The Great Gatsby" made me think about my own dreams and goals. Like Gatsby, 
              I sometimes idealize things from my past or create unrealistic expectations for the future.
            </p>
            <p className="text-gray-200 leading-relaxed">
              The book taught me that while it's important to have dreams, we need to be honest 
              about reality and not let our fantasies blind us to what's actually happening around us.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReadingJourney;
