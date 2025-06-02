
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Heart, Eye, DollarSign, Users2, Crown } from "lucide-react";

const Characters = () => {
  const characters = [
    {
      name: "Jay Gatsby",
      icon: Crown,
      color: "emerald",
      role: "Main Character",
      description: "A rich, mysterious man who throws huge parties to try to win back his lost love, Daisy.",
      traits: ["Hopeful", "Wealthy", "Mysterious", "Romantic"]
    },
    {
      name: "Daisy Buchanan",
      icon: Heart,
      color: "pink",
      role: "Gatsby's Love",
      description: "A beautiful, wealthy woman who is married to Tom but was Gatsby's girlfriend years ago.",
      traits: ["Beautiful", "Careless", "Wealthy", "Charming"]
    },
    {
      name: "Nick Carraway",
      icon: Eye,
      color: "blue",
      role: "Narrator",
      description: "The person telling the story. He lives next to Gatsby and watches everything happen.",
      traits: ["Honest", "Observer", "Thoughtful", "Outsider"]
    },
    {
      name: "Tom Buchanan",
      icon: DollarSign,
      color: "red",
      role: "Daisy's Husband",
      description: "Daisy's rich, powerful husband who is mean and thinks he's better than everyone else.",
      traits: ["Wealthy", "Arrogant", "Strong", "Unfaithful"]
    },
    {
      name: "Jordan Baker",
      icon: Users2,
      color: "purple",
      role: "Daisy's Friend",
      description: "A professional golfer and Daisy's friend who becomes involved with Nick.",
      traits: ["Athletic", "Dishonest", "Independent", "Cynical"]
    },
    {
      name: "Myrtle Wilson",
      icon: User,
      color: "orange",
      role: "Tom's Mistress",
      description: "A woman from a poor area who has an affair with Tom Buchanan.",
      traits: ["Desperate", "Passionate", "Working-class", "Dreamer"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "emerald": return "from-emerald-100 to-emerald-200 text-emerald-600 border-emerald-200";
      case "pink": return "from-pink-100 to-pink-200 text-pink-600 border-pink-200";
      case "blue": return "from-blue-100 to-blue-200 text-blue-600 border-blue-200";
      case "red": return "from-red-100 to-red-200 text-red-600 border-red-200";
      case "purple": return "from-purple-100 to-purple-200 text-purple-600 border-purple-200";
      case "orange": return "from-orange-100 to-orange-200 text-orange-600 border-orange-200";
      default: return "from-gray-100 to-gray-200 text-gray-600 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-[Playfair_Display]">
            Characters
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the people in "The Great Gatsby" and learn what makes them important
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character, index) => {
            const IconComponent = character.icon;
            return (
              <Card 
                key={character.name} 
                className={`hover-lift enhanced-card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`bg-gradient-to-br ${getColorClasses(character.color)} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border-2`}>
                    <IconComponent size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold">{character.name}</CardTitle>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {character.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {character.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Key Traits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {character.traits.map((trait) => (
                        <span 
                          key={trait}
                          className={`bg-gradient-to-r ${getColorClasses(character.color)} px-3 py-1 rounded-full text-xs font-medium border`}
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 hover-lift enhanced-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-center justify-center">
              <Users2 className="text-emerald-600" />
              Character Relationships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-gray-800">Love Triangle</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">Gatsby loves Daisy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">Daisy is married to Tom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Tom has an affair with Myrtle</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-gray-800">Friendships</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Nick is Gatsby's neighbor and friend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Jordan is Daisy's best friend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Nick and Jordan date briefly</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Characters;
