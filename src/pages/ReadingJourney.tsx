
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Calendar, BookOpen, Star, Clock, Bookmark, Award, Library } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ReadingJourney = () => {
  const journeyEntries = [
    {
      date: "Week 1",
      chapter: "Chapters 1-3",
      thoughts: "First impressions of Nick and the mysterious Gatsby. The green light immediately caught my attention - it seems so symbolic! I was drawn into the world of the 1920s and found Nick to be a relatable narrator who's both inside and outside the story.",
      feeling: "Curious",
      rating: 4
    },
    {
      date: "Week 2", 
      chapter: "Chapters 4-6",
      thoughts: "Meeting Gatsby was not what I expected. He seems so nervous and awkward, not the confident party host I imagined. His backstory with Daisy explains so much about his mansion and parties. I found myself sympathizing with him despite his questionable business dealings.",
      feeling: "Surprised",
      rating: 4.5
    },
    {
      date: "Week 3",
      chapter: "Chapters 7-9", 
      thoughts: "The ending broke my heart. Gatsby's death felt so unfair - he was the only one who truly believed in his dreams. The contrast between his crowded parties and empty funeral was devastating. I'm still thinking about the final line about 'boats against the current.'",
      feeling: "Heartbroken",
      rating: 5
    }
  ];

  const readingStats = [
    { label: "Pages Read", value: "180/180", percentage: 100 },
    { label: "Comprehension", value: "High", percentage: 90 },
    { label: "Emotional Impact", value: "Profound", percentage: 95 },
    { label: "Literary Merit", value: "Exceptional", percentage: 100 }
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm col-span-1">
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
                Plus, I was intrigued by the themes of dreams and disillusionment. The idea of someone 
                reinventing themselves completely and pursuing their dream no matter the cost resonated with me.
                I wanted to understand what made this novel a timeless classic that still speaks to readers today.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <BookOpen className="text-yellow-400" />
                Reading Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {readingStats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 text-sm">{stat.label}</span>
                      <span className="text-yellow-300 font-medium text-sm">{stat.value}</span>
                    </div>
                    <Progress value={stat.percentage} className="h-2 bg-gray-800" indicatorClassName="bg-yellow-500" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Clock className="text-yellow-400" />
                Reading Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="text-yellow-400" size={20} />
                  <div>
                    <span className="text-gray-200 block">Reading Time:</span>
                    <span className="text-yellow-300 font-medium">3 weeks (about 1 hour daily)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-400" size={20} />
                  <div>
                    <span className="text-gray-200 block">Reading Difficulty:</span>
                    <span className="text-yellow-300 font-medium">Medium (beautiful but dense prose)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Bookmark className="text-yellow-400" size={20} />
                  <div>
                    <span className="text-gray-200 block">Reading Format:</span>
                    <span className="text-yellow-300 font-medium">Paperback with annotations</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Library className="text-yellow-400" size={20} />
                  <div>
                    <span className="text-gray-200 block">Reading Environment:</span>
                    <span className="text-yellow-300 font-medium">Mostly at home in my reading nook</span>
                  </div>
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
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <h3 className="font-semibold text-yellow-300">{entry.date}</h3>
                      <span className="text-sm text-gray-400">{entry.chapter}</span>
                      <span className="text-sm bg-yellow-500/30 px-2 py-1 rounded text-yellow-200">
                        Feeling: {entry.feeling}
                      </span>
                      <div className="flex items-center ml-auto">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            size={14} 
                            className={i < Math.floor(entry.rating) ? "text-yellow-400" : "text-gray-600"}
                            fill={i < Math.floor(entry.rating) ? "#FBBF24" : "none"}
                          />
                        ))}
                        {entry.rating % 1 !== 0 && (
                          <Star size={14} className="text-yellow-400" fill="#FBBF24" strokeWidth={0} style={{ clipPath: 'inset(0 50% 0 0)', marginLeft: '-14px' }} />
                        )}
                      </div>
                    </div>
                    <p className="text-gray-200">{entry.thoughts}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-[Playfair_Display]">Personal Connection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 leading-relaxed mb-4">
                Reading "The Great Gatsby" made me reflect on my own dreams and goals. Like Gatsby, 
                I sometimes idealize things from my past or create unrealistic expectations for the future.
                His determination to reinvent himself resonated with parts of my own journey.
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                I particularly connected with Nick's position as both insider and outsider. As someone who 
                often observes social dynamics from a slight distance, I appreciated his perspective and moral struggle.
              </p>
              <p className="text-gray-200 leading-relaxed">
                The book taught me valuable lessons about the dangers of dwelling in the past and the 
                importance of seeing people as they really are, not as we wish them to be. Gatsby's tragic 
                end is a powerful reminder that dreams need to be grounded in reality.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Award className="text-yellow-400" />
                Reading Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-yellow-300">Favorite Character</h4>
                  <p className="text-gray-200">Nick Carraway - his moral complexity and observant nature make him the perfect narrator.</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-yellow-300">Favorite Scene</h4>
                  <p className="text-gray-200">The reunion between Gatsby and Daisy at Nick's house - the nervous anticipation and emotion were beautifully portrayed.</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-yellow-300">Most Beautiful Passage</h4>
                  <p className="text-gray-200">"So we beat on, boats against the current, borne back ceaselessly into the past." - The final line perfectly captures the novel's themes.</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-yellow-300">Most Surprising Moment</h4>
                  <p className="text-gray-200">The revelation that Gatsby's entire life is built around winning Daisy back - his dedication is both romantic and disturbing.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-[Playfair_Display]">Reading Growth & Reflection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-yellow-300 text-lg mb-2">What I Learned</h3>
                <p className="text-gray-200 leading-relaxed">
                  This book stretched my literary understanding by introducing me to modernist techniques and Fitzgerald's 
                  layered symbolism. I've developed a greater appreciation for how authors use imagery and metaphor to 
                  deepen their themes. The novel's critique of the American Dream also gave me new perspectives on success and ambition.
                </p>
              </div>
              
              <div>
                <h3 className="text-yellow-300 text-lg mb-2">How I've Changed as a Reader</h3>
                <p className="text-gray-200 leading-relaxed">
                  Before reading Gatsby, I tended to focus mostly on plot and characters. Now, I find myself paying more attention 
                  to the author's language choices, narrative techniques, and historical context. I've learned to read more slowly 
                  and appreciate the craftsmanship behind great literature rather than racing through for plot developments.
                </p>
              </div>
              
              <div>
                <h3 className="text-yellow-300 text-lg mb-2">My Reading Goals After Gatsby</h3>
                <p className="text-gray-200 leading-relaxed">
                  This experience has inspired me to explore more American classics and modernist literature. I plan to read more 
                  of Fitzgerald's works, as well as his contemporaries like Hemingway and Faulkner. I also want to improve my 
                  critical reading skills by joining a book club where I can discuss literary themes and techniques with others.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReadingJourney;
