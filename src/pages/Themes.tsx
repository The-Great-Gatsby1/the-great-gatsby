
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Heart, Eye, DollarSign, Clock, Palette, Target, Award } from "lucide-react";

const Themes = () => {
  const themes = [
    {
      title: "The American Dream",
      icon: Star,
      color: "blue",
      description: "The belief that anyone can achieve success and happiness through hard work, but Fitzgerald shows how this dream is corrupted by materialism and inequality.",
      examples: [
        "Gatsby's transformation from James Gatz to Jay Gatsby",
        "His belief that wealth can win back Daisy's love",
        "The contrast between East Egg (old money) and West Egg (new money)",
        "Myrtle's desperate attempts to escape her social class"
      ],
      analysis: "Fitzgerald critiques the American Dream by showing how it becomes about material wealth rather than genuine happiness or moral growth.",
      symbols: ["The green light", "Gatsby's mansion", "The valley of ashes"]
    },
    {
      title: "Love vs. Obsession",
      icon: Heart,
      color: "red",
      description: "Gatsby's 'love' for Daisy is revealed to be an unhealthy obsession with an idealized version of her from the past.",
      examples: [
        "Gatsby's five-year wait for Daisy",
        "His purchase of the mansion across from her dock",
        "His elaborate parties hoping she'll attend",
        "His inability to accept that Daisy has changed"
      ],
      analysis: "True love requires accepting someone as they are, but Gatsby loves a fantasy version of Daisy from five years ago.",
      symbols: ["The green light", "Daisy's voice 'full of money'", "The photograph of Daisy"]
    },
    {
      title: "Social Class & Inequality",
      icon: DollarSign,
      color: "yellow",
      description: "The novel exposes the rigid class system in 1920s America and how wealth determines social worth and moral behavior.",
      examples: [
        "Tom and Daisy's careless destruction of others' lives",
        "Gatsby's desperate attempts to fit into high society",
        "The contrast between the wealthy areas and the valley of ashes",
        "How the poor (like the Wilsons) suffer for the rich's mistakes"
      ],
      analysis: "Fitzgerald shows how the wealthy use their privilege to avoid consequences while the poor pay the price for their actions.",
      symbols: ["East Egg vs. West Egg", "The valley of ashes", "Gatsby's pink suit"]
    },
    {
      title: "The Past vs. Present",
      icon: Clock,
      color: "purple",
      description: "The impossibility of recreating the past and the danger of living in nostalgia rather than accepting reality.",
      examples: [
        "Gatsby's famous line: 'Can't repeat the past? Why of course you can!'",
        "His attempt to recreate his romance with Daisy",
        "Nick's final reflection on being 'borne back ceaselessly into the past'",
        "The contrast between Gatsby's memories and present reality"
      ],
      analysis: "The novel suggests that clinging to the past prevents us from growing and finding genuine happiness in the present.",
      symbols: ["The green light", "Gatsby's car", "The clock Gatsby knocks over"]
    },
    {
      title: "Moral Decay",
      icon: Eye,
      color: "gray",
      description: "The corruption of moral values in the pursuit of wealth and pleasure, showing the emptiness behind the glamorous facade.",
      examples: [
        "Tom's racism and affair with Myrtle",
        "Daisy's hit-and-run accident and lack of remorse",
        "Jordan's dishonesty in golf and relationships",
        "The superficial nature of Gatsby's party guests"
      ],
      analysis: "Beneath the glittering surface of the Jazz Age lies moral emptiness and spiritual poverty.",
      symbols: ["The eyes of Doctor T.J. Eckleburg", "The valley of ashes", "The green light fading"]
    },
    {
      title: "Appearance vs. Reality",
      icon: Palette,
      color: "teal",
      description: "Nothing is as it seems - characters, relationships, and the American Dream itself are all illusions.",
      examples: [
        "Gatsby's mysterious wealth and criminal connections",
        "Daisy's beautiful appearance hiding her shallow nature",
        "The glamorous parties masking Gatsby's loneliness",
        "The American Dream promising equality but delivering inequality"
      ],
      analysis: "Fitzgerald constantly reveals the gap between how things appear and what they really are, showing the danger of living in illusions.",
      symbols: ["Gatsby's mansion", "The green light", "Daisy's white dresses"]
    }
  ];

  const quotes = [
    {
      text: "So we beat on, boats against the current, borne back ceaselessly into the past.",
      speaker: "Nick Carraway",
      analysis: "The final line captures the human struggle against time and our tendency to romanticize the past."
    },
    {
      text: "I hope she'll be a fool—that's the best thing a girl can be in this world, a beautiful little fool.",
      speaker: "Daisy Buchanan",
      analysis: "Reveals the limited options for women in the 1920s and Daisy's cynical view of life."
    },
    {
      text: "They're a rotten crowd... You're worth the whole damn bunch put together.",
      speaker: "Nick to Gatsby",
      analysis: "Nick recognizes Gatsby's genuine nature despite his flaws, contrasting him with the moral emptiness of Tom and Daisy."
    },
    {
      text: "He had come a long way to this blue lawn, and his dream must have seemed so close that he could hardly fail to grasp it.",
      speaker: "Nick Carraway",
      analysis: "Captures the tragedy of Gatsby's hope and the American Dream itself - so close yet unattainable."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
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
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display] art-deco-title">
            THEMES & SYMBOLS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Exploring the deeper meanings and powerful symbols in "The Great Gatsby"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {themes.map((theme) => {
            const IconComponent = theme.icon;
            return (
              <Card key={theme.title} className="hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-yellow-400 font-[Playfair_Display]">
                    <div className={`p-2 rounded-lg bg-${theme.color}-500/30 border border-${theme.color}-500/50 text-${theme.color}-300`}>
                      <IconComponent size={20} />
                    </div>
                    {theme.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 leading-relaxed mb-4 text-sm">
                    {theme.description}
                  </p>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-yellow-300 mb-2 text-sm">Examples in the Novel:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {theme.examples.map((example, idx) => (
                        <li key={idx} className="text-gray-200 text-sm">{example}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-500/20 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-yellow-300 mb-2 flex items-center gap-2 text-sm">
                      <Award size={16} className="text-yellow-400" />
                      Literary Analysis:
                    </h4>
                    <p className="text-gray-200 text-sm">{theme.analysis}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-yellow-300 mb-2 text-sm">Related Symbols:</h4>
                    <div className="flex flex-wrap gap-2">
                      {theme.symbols.map((symbol) => (
                        <span 
                          key={symbol}
                          className="bg-gray-800 border border-yellow-500/30 text-yellow-200 px-3 py-1 rounded-full text-xs"
                        >
                          {symbol}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Target className="text-yellow-400" />
              Key Symbols Explained
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-green-400 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  The Green Light
                </h4>
                <p className="text-gray-200 text-sm">
                  Located at the end of Daisy's dock, this represents Gatsby's dreams, hopes, and desire for Daisy. 
                  Its color symbolizes jealousy, money, and the unattainable nature of his dream.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-400 flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  The Valley of Ashes
                </h4>
                <p className="text-gray-200 text-sm">
                  A desolate industrial area between West Egg and New York City that represents the moral and social decay hidden 
                  beneath the beautiful façade of wealth. It's where the poor suffer for the rich's sins.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-400 flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  The Eyes of Dr. T.J. Eckleburg
                </h4>
                <p className="text-gray-200 text-sm">
                  A faded billboard with giant eyes watching over the Valley of Ashes. They represent God watching the moral corruption 
                  of society or the absence of spiritual values in the materialistic world.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-yellow-400 flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  Gatsby's Mansion
                </h4>
                <p className="text-gray-200 text-sm">
                  His enormous house represents his artificial creation of identity and wealth. It's impressive but lacks genuine 
                  warmth or meaning - beautiful on the outside but ultimately empty.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  White/Gold Colors
                </h4>
                <p className="text-gray-200 text-sm">
                  White (Daisy's clothes, her name suggesting flowers) represents false purity and innocence. 
                  Gold symbolizes wealth and corruption - both the promise and the poison of money.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-red-400 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  East/West Egg
                </h4>
                <p className="text-gray-200 text-sm">
                  The geographic division represents America's social division. East Egg (old money) vs West Egg (new money) shows how class 
                  differences persist despite the American Dream's promise of equality.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="improved-art-deco-card hover-lift bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-[Playfair_Display]">Significant Quotes & Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {quotes.map((quote, index) => (
                <div key={index} className="border-l-4 border-yellow-400 pl-4 py-1">
                  <p className="text-lg text-yellow-200 italic mb-2">"{quote.text}"</p>
                  <p className="text-sm text-yellow-400">— {quote.speaker}</p>
                  <p className="text-sm text-gray-300 mt-2">{quote.analysis}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Themes;
