
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Heart, Shield, Star } from "lucide-react";

const Characters = () => {
  const characters = [
    {
      name: "Jay Gatsby",
      role: "Main Character",
      icon: Star,
      description: "A mysterious millionaire who throws lavish parties. Gatsby made his money to win back his old love, Daisy. He represents the American Dream and its problems.",
      traits: ["Hopeful", "Mysterious", "Romantic", "Ambitious"],
      color: "emerald"
    },
    {
      name: "Nick Carraway",
      role: "Narrator",
      icon: Shield,
      description: "Our storyteller who moves next door to Gatsby. Nick is honest and observant, watching the drama unfold around him while trying to understand everyone.",
      traits: ["Honest", "Observant", "Judgmental", "Thoughtful"],
      color: "blue"
    },
    {
      name: "Daisy Buchanan",
      role: "Gatsby's Dream",
      icon: Heart,
      description: "Gatsby's love interest who married Tom Buchanan for money. She's beautiful and charming but selfish and careless with others' feelings.",
      traits: ["Beautiful", "Careless", "Selfish", "Charming"],
      color: "teal"
    },
    {
      name: "Tom Buchanan",
      role: "Antagonist",
      icon: User,
      description: "Daisy's wealthy, unfaithful husband. Tom is powerful, aggressive, and represents old money and privilege in America.",
      traits: ["Powerful", "Arrogant", "Cruel", "Privileged"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "bg-emerald-100 text-emerald-600 border-emerald-300",
      blue: "bg-blue-100 text-blue-600 border-blue-300",
      teal: "bg-teal-100 text-teal-600 border-teal-300",
      purple: "bg-purple-100 text-purple-600 border-purple-300"
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-[Playfair_Display]">
            Characters
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the key people who bring "The Great Gatsby" to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {characters.map((character, index) => {
            const IconComponent = character.icon;
            return (
              <Card key={character.name} className="hover-lift fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${getColorClasses(character.color)}`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{character.name}</h3>
                      <p className="text-sm text-gray-500 font-normal">{character.role}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {character.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">What They're Like:</h4>
                    <div className="flex flex-wrap gap-2">
                      {character.traits.map((trait) => (
                        <span
                          key={trait}
                          className={`px-3 py-1 rounded-full text-sm border ${getColorClasses(character.color)}`}
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

        <Card className="mt-12 hover-lift">
          <CardHeader>
            <CardTitle className="text-center">How Characters Connect</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The relationships between characters in "The Great Gatsby" show the different sides of 1920s 
                American society. Each character represents something bigger - old money, new money, 
                the American Dream, or the moral center watching it all.
              </p>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h4 className="font-semibold text-emerald-800 mb-2">Main Conflicts</h4>
                <p className="text-emerald-700">
                  The biggest problems are between Gatsby (new money) and Tom (old money), 
                  both fighting over Daisy. This shows the clash between different social classes 
                  and how money affects relationships.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Characters;
