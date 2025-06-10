
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Heart, Eye, DollarSign, Users2, Crown, Quote } from "lucide-react";

const Characters = () => {
  const characters = [
    {
      name: "Jay Gatsby",
      icon: Crown,
      color: "emerald",
      role: "Main Character",
      description: "A rich, mysterious man who throws huge parties to try to win back his lost love, Daisy. Born James Gatz, he transformed himself into Jay Gatsby to escape his poor past.",
      traits: ["Hopeful", "Wealthy", "Mysterious", "Romantic", "Idealistic", "Obsessive"],
      analysis: "Gatsby represents the American Dream corrupted by materialism. His unwavering hope and belief that he can repeat the past makes him both admirable and tragic.",
      keyQuote: "So we beat on, boats against the current, borne back ceaselessly into the past.",
      image: "/lovable-uploads/e89e38e7-465a-4b7f-a2a7-a527ba83ce99.png"
    },
    {
      name: "Daisy Buchanan",
      icon: Heart,
      color: "pink",
      role: "Gatsby's Love",
      description: "A beautiful, wealthy woman who is married to Tom but was Gatsby's girlfriend years ago. She represents everything Gatsby desires but can never truly possess.",
      traits: ["Beautiful", "Careless", "Wealthy", "Charming", "Shallow", "Indecisive"],
      analysis: "Daisy symbolizes the corrupted American Dream. Her voice 'full of money' represents how wealth has replaced genuine emotion and moral values.",
      keyQuote: "Her voice is full of money.",
      image: "/lovable-uploads/97d253c9-9e39-44de-aa39-b1edab547c29.png"
    },
    {
      name: "Nick Carraway",
      icon: Eye,
      color: "blue",
      role: "Narrator",
      description: "The person telling the story. He lives next to Gatsby and watches everything happen. From the Midwest, he's both fascinated and repulsed by the East Coast elite.",
      traits: ["Honest", "Observer", "Thoughtful", "Outsider", "Moral", "Judgmental"],
      analysis: "Nick serves as our moral compass and window into the story. His Midwestern values clash with East Coast corruption, making him a reliable narrator.",
      keyQuote: "I was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life.",
      image: "/lovable-uploads/2eb8edbc-c815-46a0-8d43-4698ef0410ea.png"
    },
    {
      name: "Tom Buchanan",
      icon: DollarSign,
      color: "red",
      role: "Daisy's Husband",
      description: "Daisy's rich, powerful husband who is mean and thinks he's better than everyone else. A former Yale football player who represents old money and inherited privilege.",
      traits: ["Wealthy", "Arrogant", "Strong", "Unfaithful", "Racist", "Hypocritical"],
      analysis: "Tom represents the worst of the established upper class - entitled, cruel, and morally bankrupt while maintaining social respectability.",
      keyQuote: "I suppose the latest thing is to sit back and let Mr. Nobody from Nowhere make love to your wife.",
      image: "/lovable-uploads/abbd58a8-7b3d-4c72-b45c-28abb802ae65.png"
    },
    {
      name: "Jordan Baker",
      icon: Users2,
      color: "purple",
      role: "Daisy's Friend",
      description: "A professional golfer and Daisy's friend who becomes involved with Nick. She's modern, independent, but also dishonest and cynical about life.",
      traits: ["Athletic", "Dishonest", "Independent", "Cynical", "Modern", "Self-centered"],
      analysis: "Jordan represents the 'new woman' of the 1920s - independent and career-focused, but morally compromised by the era's values.",
      keyQuote: "I hate careless people. That's why I like you.",
      image: "/lovable-uploads/c4aa98ad-bb1f-44b4-8ab2-d67b7d41cb04.png"
    },
    {
      name: "Myrtle Wilson",
      icon: User,
      color: "orange",
      role: "Tom's Mistress",
      description: "A woman from a poor area who has an affair with Tom Buchanan. She dreams of escaping her lower-class life and sees Tom as her ticket to wealth and status.",
      traits: ["Desperate", "Passionate", "Working-class", "Dreamer", "Ambitious", "Tragic"],
      analysis: "Myrtle represents the working class's desire for upward mobility and the tragic consequences of pursuing the American Dream through the wrong means.",
      keyQuote: "I married him because I thought he was a gentleman... I thought he knew something about breeding, but he wasn't fit to lick my shoe.",
      image: "/lovable-uploads/def3cd7f-f296-4cec-be53-71d45ee72060.png"
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
            CHARACTERS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Meet the complex people in "The Great Gatsby" and understand their deeper meanings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character, index) => {
            const IconComponent = character.icon;
            return (
              <Card 
                key={character.name} 
                className={`improved-art-deco-card hover-lift bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-yellow-500/70">
                    <img 
                      src={character.image} 
                      alt={character.name}
                      className="w-full h-full object-cover brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <CardTitle className="text-xl font-bold text-yellow-400 font-[Playfair_Display]">
                    {character.name}
                  </CardTitle>
                  <p className="text-sm font-medium text-yellow-300/90 uppercase tracking-wide">
                    {character.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 leading-relaxed mb-4 text-sm">
                    {character.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-yellow-400 text-sm mb-2">Character Traits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {character.traits.map((trait) => (
                          <span 
                            key={trait}
                            className="bg-yellow-500/30 border border-yellow-500/50 text-yellow-200 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/50 p-3 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-300 text-sm mb-1">Literary Analysis:</h4>
                      <p className="text-gray-200 text-xs leading-relaxed">{character.analysis}</p>
                    </div>
                    
                    <div className="bg-yellow-500/20 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Quote size={14} className="text-yellow-400" />
                        <h4 className="font-semibold text-yellow-300 text-sm">Key Quote:</h4>
                      </div>
                      <p className="text-gray-200 text-xs italic">"{character.keyQuote}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Users2 className="text-yellow-400" />
                Character Relationships & Social Dynamics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-yellow-400 mb-2">Love Triangle</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-200 text-sm">Gatsby loves Daisy (one-sided obsession)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-200 text-sm">Daisy is married to Tom (loveless marriage)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-gray-200 text-sm">Tom has an affair with Myrtle (exploitation)</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg text-yellow-400 mb-2">Social Connections</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-200 text-sm">Nick observes and judges everyone</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-200 text-sm">Jordan connects the social circles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-200 text-sm">Myrtle exists outside elite society</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-[Playfair_Display]">Character Symbolism</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-400 pl-4">
                  <h4 className="font-semibold text-emerald-300">Gatsby = The American Dream</h4>
                  <p className="text-gray-200 text-sm">His rise from poverty to wealth represents both the promise and corruption of American idealism.</p>
                </div>
                <div className="border-l-4 border-pink-400 pl-4">
                  <h4 className="font-semibold text-pink-300">Daisy = Wealth & Status</h4>
                  <p className="text-gray-200 text-sm">She embodies the hollow, materialistic nature of the upper class that Gatsby desperately wants to join.</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-blue-300">Nick = Moral Compass</h4>
                  <p className="text-gray-200 text-sm">His Midwestern values provide contrast to East Coast corruption, serving as our guide through the story.</p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-red-300">Tom = Old Money Power</h4>
                  <p className="text-gray-200 text-sm">Represents the established elite who maintain power through cruelty and social manipulation.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Characters;
