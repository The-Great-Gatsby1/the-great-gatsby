
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Heart, Shield, Star } from "lucide-react";

const Characters = () => {
  const characters = [
    {
      name: "Cam O'Mara",
      role: "Main Character",
      icon: Star,
      description: "A fourteen-year-old boy who is trying to figure out who he is. His family expects him to be a bull rider like his father, but Cam has his own fears and dreams.",
      traits: ["Caring", "Smart", "Confused", "Brave"],
      color: "orange"
    },
    {
      name: "Ben O'Mara",
      role: "Father",
      icon: Shield,
      description: "Cam's dad who used to be a champion bull rider. Ben loves his son but puts a lot of pressure on him to follow the family tradition.",
      traits: ["Old-fashioned", "Proud", "Tough", "Loving"],
      color: "blue"
    },
    {
      name: "Kit",
      role: "Mother Figure",
      icon: Heart,
      description: "A caring person in Cam's life who helps him feel better and understand himself. She shows him it's okay to be different.",
      traits: ["Kind", "Understanding", "Wise", "Helpful"],
      color: "green"
    },
    {
      name: "Other People",
      role: "Community",
      icon: User,
      description: "The rodeo community, friends, and family members who are part of Cam's world and help shape his story.",
      traits: ["Different", "Important", "Real", "Complex"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      orange: "bg-orange-100 text-orange-600 border-orange-300",
      blue: "bg-blue-100 text-blue-600 border-blue-300",
      green: "bg-green-100 text-green-600 border-green-300",
      purple: "bg-purple-100 text-purple-600 border-purple-300"
    };
    return colors[color as keyof typeof colors] || colors.orange;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-[Playfair_Display]">
            Characters
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the people who make "Bull Rider" come to life
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
                The relationships between characters in "Bull Rider" are what make the story so good. 
                Cam's problems with his father's expectations, his friendship with Kit, 
                and how he deals with the rodeo community all help him grow up and learn about himself.
              </p>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Main Problem</h4>
                <p className="text-orange-700">
                  The biggest conflict is between family tradition and being yourself. 
                  Cam has to choose between making his family happy and following his own dreams.
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
