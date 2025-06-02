
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Star, Users, Compass, Award } from "lucide-react";

const Themes = () => {
  const themes = [
    {
      title: "Coming of Age",
      icon: Star,
      description: "Cam's journey from adolescence to young adulthood, learning to make his own decisions and define his identity separate from family expectations.",
      examples: [
        "Cam's internal struggle with his identity",
        "Learning to make independent choices",
        "Developing personal values and beliefs"
      ],
      color: "blue"
    },
    {
      title: "Family Expectations vs. Individual Choice",
      icon: Shield,
      description: "The tension between honoring family traditions and following one's own path, exploring how family legacy can both support and constrain personal growth.",
      examples: [
        "Ben's expectations for Cam to be a bull rider",
        "The weight of family tradition in rodeo culture",
        "Cam's struggle to please his father while being true to himself"
      ],
      color: "orange"
    },
    {
      title: "Courage and Fear",
      icon: Award,
      description: "Examining different types of courage - physical bravery in the rodeo ring and emotional courage to stand up for one's beliefs and choices.",
      examples: [
        "Physical courage required for bull riding",
        "Emotional courage to disappoint family",
        "The courage to be authentic to oneself"
      ],
      color: "red"
    },
    {
      title: "Identity and Self-Discovery",
      icon: Compass,
      description: "Cam's process of discovering who he is beyond others' expectations, learning that identity comes from within rather than external achievements.",
      examples: [
        "Questioning predetermined life paths",
        "Discovering personal strengths and interests",
        "Understanding that worth isn't tied to others' approval"
      ],
      color: "green"
    },
    {
      title: "Father-Son Relationships",
      icon: Heart,
      description: "The complex dynamics between fathers and sons, exploring love, disappointment, understanding, and the challenge of communication across generations.",
      examples: [
        "Ben's struggle to connect with Cam",
        "Generational differences in values and priorities",
        "Learning to love and accept each other as individuals"
      ],
      color: "purple"
    },
    {
      title: "Tradition vs. Change",
      icon: Users,
      description: "The balance between preserving cultural traditions and allowing for personal evolution and change within family and community structures.",
      examples: [
        "Rodeo as a cultural tradition",
        "Changing attitudes toward masculinity and success",
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
            Major Themes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the deeper meanings and universal themes that make "Bull Rider" resonate with readers
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
                    <h4 className="font-semibold mb-2 text-gray-800">Key Examples:</h4>
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
            <CardTitle className="text-center">Why These Themes Matter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-gray-800">Universal Relevance</h4>
                <p className="text-gray-700 leading-relaxed text-sm">
                  These themes resonate with readers because they reflect universal human experiences: 
                  the struggle to find one's identity, the challenge of meeting family expectations, 
                  and the courage required to be authentic to oneself.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-gray-800">Literary Significance</h4>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Williams weaves these themes together skillfully, creating a narrative that works 
                  on multiple levels - as an exciting story about rodeo culture and as a deeper 
                  exploration of growing up and family relationships.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2 text-center">Central Message</h4>
              <p className="text-orange-700 text-center">
                "Bull Rider" ultimately suggests that true courage lies not in meeting others' expectations, 
                but in having the bravery to be authentic to yourself while maintaining respect for family and tradition.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Themes;
