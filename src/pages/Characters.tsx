
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Heart, Shield, Star } from "lucide-react";

const Characters = () => {
  const characters = [
    {
      name: "Cam O'Mara",
      role: "Protagonist",
      icon: Star,
      description: "A fourteen-year-old boy struggling with his identity and place in his family's rodeo legacy. Cam faces the pressure of living up to his father's expectations while dealing with his own fears and desires.",
      traits: ["Sensitive", "Intelligent", "Conflicted", "Brave"],
      color: "orange"
    },
    {
      name: "Ben O'Mara",
      role: "Father",
      icon: Shield,
      description: "Cam's father and a former rodeo champion. Ben represents tradition and the pressure of family expectations. His relationship with Cam is complex, driven by love but complicated by his own disappointments.",
      traits: ["Traditional", "Proud", "Demanding", "Loving"],
      color: "blue"
    },
    {
      name: "Kit",
      role: "Mother Figure",
      icon: Heart,
      description: "A supportive presence in Cam's life who provides emotional stability and understanding. She represents compassion and the importance of following one's own path.",
      traits: ["Nurturing", "Understanding", "Wise", "Supportive"],
      color: "green"
    },
    {
      name: "Supporting Characters",
      role: "Community",
      icon: User,
      description: "The rodeo community, friends, and extended family who shape Cam's world and influence his journey of self-discovery.",
      traits: ["Diverse", "Influential", "Authentic", "Complex"],
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
            Meet the compelling characters who bring the world of "Bull Rider" to life
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
                    <h4 className="font-semibold mb-2 text-gray-800">Key Traits:</h4>
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
            <CardTitle className="text-center">Character Relationships</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The relationships between characters in "Bull Rider" form the emotional core of the story. 
                Cam's struggle with his father's expectations, his connection with supportive figures like Kit, 
                and his interactions with the broader rodeo community all contribute to his journey of self-discovery.
              </p>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Central Conflict</h4>
                <p className="text-orange-700">
                  The tension between tradition and individual choice drives the narrative, 
                  as Cam must navigate between honoring his family's legacy and following his own path.
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
