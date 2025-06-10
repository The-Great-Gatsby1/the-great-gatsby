
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, ArrowRight, Target, CheckCircle, Calendar, MapPin, AlertTriangle, Book, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Plot = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Improved GSAP animations
      gsap.fromTo(".plot-card", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );

      gsap.fromTo(".plot-title", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
      
      // Add scroll animations
      gsap.utils.toArray(".chapter-card").forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card as HTMLElement,
          start: "top center+=100",
          end: "bottom center",
          toggleClass: "active-card",
          onEnter: () => setActiveChapter(i),
          onEnterBack: () => setActiveChapter(i),
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const plotPoints = [
    {
      title: "Opening Scene",
      icon: Play,
      content: "Nick Carraway moves to West Egg, Long Island, next to Gatsby's mansion. He has dinner with his cousin Daisy, her husband Tom Buchanan, and Jordan Baker where he learns Tom has a mistress.",
      detail: "Nick is our narrator and moral center. He's from the Midwest and has moved East to learn the bond business after World War I.",
      color: "blue"
    },
    {
      title: "Rising Action",
      icon: ArrowRight,
      content: "Nick attends one of Gatsby's lavish parties and finally meets him. Through Jordan, Nick learns Gatsby knew Daisy years ago and wants Nick to arrange a reunion between them.",
      detail: "Gatsby has built his entire fortune just to impress Daisy, whom he loved five years before. His parties are all attempts to attract her attention.",
      color: "teal"
    },
    {
      title: "Climax & Confrontation",
      icon: Target,
      content: "On the hottest day of summer, tensions explode at the Plaza Hotel. Tom exposes Gatsby's criminal connections and confronts him about Daisy. Driving Gatsby's car, Daisy accidentally hits and kills Myrtle Wilson, Tom's mistress.",
      detail: "This day marks the moment when Gatsby's dream begins to unravel as reality intrudes. Tom's revelation about Gatsby's bootlegging shatters the illusion of respectability.",
      color: "red"
    },
    {
      title: "Falling Action",
      icon: AlertTriangle,
      content: "Daisy and Tom reconcile and leave town. Gatsby waits outside Daisy's house all night, protecting her. George Wilson, believing Gatsby killed his wife Myrtle, finds and shoots Gatsby before killing himself.",
      detail: "Gatsby's death is deeply ironic - he dies taking responsibility for Daisy's actions, while she doesn't even call or send flowers to his funeral.",
      color: "orange"
    },
    {
      title: "Resolution",
      icon: CheckCircle,
      content: "Despite his wealth and famous parties, almost no one comes to Gatsby's funeral except Nick and Gatsby's father. Disillusioned with the East, Nick decides to return to the Midwest.",
      detail: "The absence of mourners reveals the emptiness of Gatsby's social world. Those who eagerly attended his parties abandon him in death, showing the hollowness of wealth and social connections.",
      color: "green"
    }
  ];

  const chapters = [
    {
      number: 1,
      title: "Nick Meets the Buchanans",
      key_events: [
        "Nick introduces himself as the narrator", 
        "Nick has dinner with Daisy, Tom, and Jordan",
        "Tom takes a phone call from his mistress",
        "Nick spots Gatsby reaching toward a green light"
      ],
      analysis: "The chapter establishes the wealthy, careless world of the Buchanans and introduces the mysterious Gatsby figure."
    },
    {
      number: 2,
      title: "Valley of Ashes & Tom's Mistress",
      key_events: [
        "Introduction to the Valley of Ashes",
        "Nick meets Myrtle Wilson (Tom's mistress)",
        "Party at Tom and Myrtle's apartment",
        "Tom breaks Myrtle's nose after she mentions Daisy"
      ],
      analysis: "This chapter shows the moral emptiness beneath the glamorous facade of the rich, particularly through Tom's brutality."
    },
    {
      number: 3,
      title: "Gatsby's Party",
      key_events: [
        "Nick attends Gatsby's lavish party",
        "Many rumors about Gatsby circulate",
        "Nick finally meets Gatsby",
        "Jordan meets with Gatsby privately"
      ],
      analysis: "The extravagant party represents the excessive materialism of the Jazz Age, while the mystery around Gatsby deepens."
    },
    {
      number: 4,
      title: "Gatsby's History Revealed",
      key_events: [
        "Gatsby takes Nick to lunch in New York",
        "Meeting Meyer Wolfsheim, hinting at criminal ties",
        "Jordan reveals Gatsby and Daisy's past romance",
        "Gatsby asks Nick to arrange meeting with Daisy"
      ],
      analysis: "We learn about Gatsby's motivations - his entire empire exists solely to win back Daisy's love."
    },
    {
      number: 5,
      title: "Daisy & Gatsby Reunite",
      key_events: [
        "Nick arranges tea for Gatsby and Daisy",
        "Awkward reunion turns emotional",
        "Gatsby shows Daisy his mansion",
        "Gatsby reveals his dream of recreating the past"
      ],
      analysis: "This chapter represents the peak of Gatsby's hope as his dream seems within reach, but it's already starting to unravel."
    },
    {
      number: 6,
      title: "Gatsby's Real Background",
      key_events: [
        "Revelation of Gatsby's true origins as James Gatz",
        "Tom and Daisy attend Gatsby's party",
        "Tom grows suspicious of Gatsby",
        "Gatsby wants Daisy to erase the past five years"
      ],
      analysis: "Gatsby's true background emerges, showing his complete self-reinvention to become worthy of Daisy."
    },
    {
      number: 7,
      title: "The Plaza Hotel Confrontation",
      key_events: [
        "The group goes to Manhattan on the hottest day",
        "Tom confronts Gatsby about his past and relationship with Daisy",
        "Gatsby's demand that Daisy deny loving Tom fails",
        "Driving home, Daisy hits and kills Myrtle"
      ],
      analysis: "The climax of the novel where Gatsby's dream collapses as reality intrudes. The heat symbolizes the emotional intensity."
    },
    {
      number: 8,
      title: "Gatsby's Vigil & Death",
      key_events: [
        "Gatsby tells Nick about his past with Daisy",
        "Gatsby waits all night for Daisy to call",
        "George Wilson tracks down Gatsby",
        "Wilson shoots Gatsby and himself"
      ],
      analysis: "Gatsby dies still believing in his dream, while Daisy has already reconciled with Tom."
    },
    {
      number: 9,
      title: "Gatsby's Funeral",
      key_events: [
        "Nick struggles to find people to attend Gatsby's funeral",
        "Only Nick, Gatsby's father, and few others attend",
        "Nick meets with Jordan one last time",
        "Nick decides to leave the East and return home"
      ],
      analysis: "The emptiness of Gatsby's funeral reveals how shallow his social connections were despite his wealth and generosity."
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500/30 text-blue-300 border-blue-400/50",
      teal: "bg-teal-500/30 text-teal-300 border-teal-400/50",
      red: "bg-red-500/30 text-red-300 border-red-400/50",
      green: "bg-green-500/30 text-green-300 border-green-400/50",
      orange: "bg-orange-500/30 text-orange-300 border-orange-400/50"
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

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
          <h1 className="plot-title text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display] art-deco-title">
            What Happens in the Story
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Follow along with the dramatic events of summer 1922 on Long Island
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {plotPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card key={point.title} className="plot-card hover-lift group cursor-pointer improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-yellow-400 font-[Playfair_Display]">
                    <div className={`p-2 rounded-lg ${getColorClasses(point.color)} group-hover:scale-110 transition-transform border`}>
                      <IconComponent size={24} />
                    </div>
                    {point.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    {point.content}
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-yellow-500/20 p-3 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-yellow-200 text-sm font-medium">
                      Literary Significance: {point.detail}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mb-12">
          <Card className="hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Book className="text-yellow-400" />
                Chapter-by-Chapter Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline */}
                <div className="absolute top-0 bottom-0 left-8 w-1 bg-yellow-500/30 hidden md:block"></div>
                
                <div className="space-y-8">
                  {chapters.map((chapter, idx) => (
                    <div 
                      key={chapter.number} 
                      className={`chapter-card relative ${
                        activeChapter === idx ? 'ring-2 ring-yellow-400' : ''
                      }`}
                    >
                      <div className="hidden md:flex absolute -left-2 top-6 w-6 h-6 rounded-full bg-yellow-400 z-10 items-center justify-center text-black font-bold text-xs">
                        {chapter.number}
                      </div>
                      
                      <Card className="md:ml-10 bg-gray-900/70 border-yellow-400/30">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            <div className="md:hidden w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xs">
                              {chapter.number}
                            </div>
                            <CardTitle className="text-xl text-yellow-300 font-[Playfair_Display]">
                              {chapter.title}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-4">
                            <h4 className="font-semibold text-sm text-yellow-200 mb-2">Key Events:</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {chapter.key_events.map((event, i) => (
                                <li key={i} className="text-gray-200 text-sm">{event}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-500/10 p-3 rounded-lg border-l-4 border-yellow-400/50">
                            <p className="text-yellow-100 text-sm">{chapter.analysis}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover-lift group improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Award className="text-yellow-400" />
                Literary Elements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-400 pl-4 group-hover:border-pink-300 transition-colors">
                  <h4 className="font-semibold cursor-help text-pink-300">Narrative Structure</h4>
                  <p className="text-gray-200 text-sm">First-person peripheral narrator (Nick) who observes events but isn't the protagonist, creating both intimacy and distance.</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4 group-hover:border-blue-300 transition-colors">
                  <h4 className="font-semibold cursor-help text-blue-300">Foreshadowing</h4>
                  <p className="text-gray-200 text-sm">The green light, the eyes of Dr. T.J. Eckleburg, and Owl Eyes at the library all foreshadow Gatsby's ultimate failure and death.</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4 group-hover:border-green-300 transition-colors">
                  <h4 className="font-semibold cursor-help text-green-300">Symbolism</h4>
                  <p className="text-gray-200 text-sm">Rich with symbols: the green light (hope), the valley of ashes (moral decay), East and West Egg (social divisions), and Gatsby's mansion (artificial identity).</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4 group-hover:border-purple-300 transition-colors">
                  <h4 className="font-semibold cursor-help text-purple-300">Irony</h4>
                  <p className="text-gray-200 text-sm">Gatsby dies protecting Daisy, who doesn't even call or attend his funeral. His wealth and parties attracted hundreds, but almost no one attends his funeral.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift group improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Calendar className="text-yellow-400 mr-1" />
                <MapPin className="text-yellow-400 mr-1" />
                Setting & Context
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 leading-relaxed mb-4">
                "The Great Gatsby" takes place during the summer of 1922, in the height of the Roaring Twenties and 
                Jazz Age - a time of economic prosperity, cultural dynamism, and social change after World War I.
              </p>
              <div className="bg-yellow-500/20 p-4 rounded-lg group-hover:bg-yellow-500/30 transition-colors border border-yellow-500/30 mb-4">
                <h4 className="font-semibold text-yellow-300 mb-2">Key Locations:</h4>
                <p className="text-gray-200 text-sm mb-1">
                  <span className="font-medium text-yellow-400">East Egg:</span> Where old-money aristocracy lives (Tom and Daisy) - represents inherited wealth and privilege
                </p>
                <p className="text-gray-200 text-sm mb-1">
                  <span className="font-medium text-yellow-400">West Egg:</span> Where new-money residents live (Gatsby) - represents self-made wealth often viewed as vulgar
                </p>
                <p className="text-gray-200 text-sm">
                  <span className="font-medium text-yellow-400">Valley of Ashes:</span> Industrial wasteland between Long Island and New York City - represents social and moral decay
                </p>
              </div>
              <p className="text-gray-200 text-sm">
                The novel's setting mirrors America's changing social landscape after WWI, with shifting class 
                structures, prohibition (leading to bootlegging), and changing moral values. The contrast between 
                locations highlights the novel's concern with class division and moral decay beneath prosperity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Plot;
