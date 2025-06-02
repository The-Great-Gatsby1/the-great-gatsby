
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Star, Users, Compass, Award } from "lucide-react";

const Themes = () => {
  const themes = [
    {
      title: "Growing Up",
      icon: Star,
      description: "Cam's journey from being a teenager to becoming a young adult. He learns to make his own decisions and figure out who he is, separate from what his family wants.",
      examples: [
        "Cam's struggle with who he wants to be",
        "Learning to make his own choices",
        "Developing his own values and beliefs"
      ],
      color: "blue"
    },
    {
      title: "Family Expectations vs. Personal Choice",
      icon: Shield,
      description: "The conflict between doing what your family wants and following your own dreams. The story shows how family traditions can both help and hurt personal growth.",
      examples: [
        "Ben wanting Cam to be a bull rider",
        "The importance of family tradition in rodeo culture",
        "Cam's struggle to please his father while being true to himself"
      ],
      color: "orange"
    },
    {
      title: "Courage and Fear",
      icon: Award,
      description: "Looking at different types of bravery - physical courage needed for bull riding and emotional courage to stand up for what you believe in.",
      examples: [
        "Physical bravery needed for bull riding",
        "Emotional courage to disappoint family",
        "The courage to be yourself"
      ],
      color: "red"
    },
    {
      title: "Finding Yourself",
      icon: Compass,
      description: "Cam's process of discovering who he really is beyond what others expect. He learns that identity comes from inside, not from what others think.",
      examples: [
        "Questioning life paths others chose for you",
        "Discovering personal strengths and interests",
        "Understanding that your worth isn't tied to others' approval"
      ],
      color: "green"
    },
    {
      title: "Father-Son Relationships",
      icon: Heart,
      description: "The complex relationship between fathers and sons, including love, disappointment, understanding, and the challenge of talking across generations.",
      examples: [
        "Ben's struggle to connect with Cam",
        "Differences in values between generations",
        "Learning to love and accept each other as individuals"
      ],
      color: "purple"
    },
    {
      title: "Tradition vs. Change",
      icon: Users,
      description: "The balance between keeping cultural traditions and allowing for personal growth and change within family and community.",
      examples: [
        "Rodeo as a cultural tradition",
        "Changing ideas about masculinity and success",
        "Adapting traditions to fit individual needs"
      ],
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-300",
      orange: "bg-orange-100 text-orange-600 border-orange-300",
      red: "bg-red-100 text-red-600 border-red-300",
      green: "bg-green-100 text-green-600 border-green-300",
      purple: "bg-purple-100 text-purple-600 border-purple-300",
      teal: "bg-teal-100 text-teal-600 border-teal-300"
    };
    return colors[color as keyof typeof colors] || colors.orange;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-[Playfair_Display]">
            Big Ideas in the Story
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the deeper meanings and important themes that make "Bull Rider" connect with readers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {themes.map((theme, index) => {
            const IconComponent = theme.icon;
            return (
              <Card key={theme.title} className="hover-lift fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${getColorClasses(theme.color)}`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{theme.title}</h3>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {theme.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Examples:</h4>
                    <ul className="space-y-1">
                      {theme.examples.map((example, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className={`w-2 h-2 rounded-full mt-2 ${getColorClasses(theme.color).replace('text-', 'bg-').replace('border-', '').replace('bg-', 'bg-').split(' ')[0]}`}></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="text-center">Why These Ideas Matter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-gray-800">Everyone Can Relate</h4>
                <p className="text-gray-700 leading-relaxed text-sm">
                  These themes connect with readers because they show experiences everyone has: 
                  trying to find out who you are, dealing with family expectations, 
                  and having the courage to be yourself.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-gray-800">Why It's Good Literature</h4>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Williams puts these themes together skillfully, creating a story that works 
                  on many levels - as an exciting story about rodeo culture and as a deeper 
                  look at growing up and family relationships.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2 text-center">Main Message</h4>
              <p className="text-orange-700 text-center">
                "Bull Rider" shows us that real courage isn't about meeting others' expectations, 
                but about having the bravery to be yourself while still respecting family and tradition.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Themes;
