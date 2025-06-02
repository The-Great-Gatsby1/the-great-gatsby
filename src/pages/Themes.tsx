
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Star, Users, Compass, Award } from "lucide-react";

const Themes = () => {
  const themes = [
    {
      title: "The American Dream",
      icon: Star,
      description: "The book looks at whether anyone can become successful in America through hard work. Gatsby gets rich, but can't win acceptance from old-money families.",
      examples: [
        "Gatsby's rise from poverty to wealth",
        "The green light representing hope and dreams",
        "Gatsby's failure despite his money"
      ],
      color: "emerald"
    },
    {
      title: "Money and Social Class",
      icon: Shield,
      description: "Different types of wealth - old money (inherited) versus new money (earned) - and how they affect relationships and society. The book shows how money doesn't guarantee happiness.",
      examples: [
        "East Egg (old money) versus West Egg (new money)",
        "Tom and Daisy's carelessness with others",
        "The Valley of Ashes showing extreme poverty"
      ],
      color: "blue"
    },
    {
      title: "Love and Dreams",
      icon: Heart,
      description: "Gatsby's dream of being with Daisy represents how people hold onto impossible dreams. His love for Daisy is more about what she represents than who she really is.",
      examples: [
        "Gatsby's idealized view of Daisy",
        "The green light as Gatsby's dream",
        "The failure of reality to match our dreams"
      ],
      color: "red"
    },
    {
      title: "Time and the Past",
      icon: Compass,
      description: "Gatsby believes he can repeat the past and recapture his relationship with Daisy, but learns that time changes everything and people can't go backwards.",
      examples: [
        "\"Can't repeat the past? Why of course you can!\"",
        "The old clock knocking over during Daisy and Gatsby's reunion",
        "Gatsby's inability to see Daisy as she really is now"
      ],
      color: "teal"
    },
    {
      title: "Appearance vs. Reality",
      icon: Users,
      description: "Many characters in the story present false versions of themselves. The gap between who people seem to be and who they really are is a major theme.",
      examples: [
        "Gatsby's invented background story",
        "The empty grandeur of Gatsby's parties",
        "Daisy and Tom's flawed marriage behind their wealth"
      ],
      color: "purple"
    },
    {
      title: "Moral Emptiness",
      icon: Award,
      description: "The Jazz Age's focus on parties and money hides an emptiness underneath. The characters lack real purpose or moral guidance.",
      examples: [
        "The empty houses and meaningless parties",
        "Tom and Daisy \"retreating into their money\"",
        "The eyes of Dr. T.J. Eckleburg watching over the moral wasteland"
      ],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "bg-emerald-100 text-emerald-600 border-emerald-300",
      blue: "bg-blue-100 text-blue-600 border-blue-300",
      red: "bg-red-100 text-red-600 border-red-300",
      teal: "bg-teal-100 text-teal-600 border-teal-300",
      purple: "bg-purple-100 text-purple-600 border-purple-300",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-300"
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-[Playfair_Display]">
            Big Ideas in the Story
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the deeper meanings and important themes in "The Great Gatsby"
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
                <h4 className="font-semibold mb-3 text-gray-800">Still Relevant Today</h4>
                <p className="text-gray-700 leading-relaxed text-sm">
                  These themes connect with readers today because we still care about the American Dream, 
                  social differences, and the emptiness that can come with focusing too much on money and status.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-gray-800">Why It's a Classic</h4>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Fitzgerald weaves these themes together with beautiful writing and unforgettable symbols 
                  like the green light, the eyes of Dr. T.J. Eckleburg, and the Valley of Ashes.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-emerald-50 p-6 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2 text-center">Main Message</h4>
              <p className="text-emerald-700 text-center">
                "The Great Gatsby" shows how the American Dream can fail, and how chasing money and status 
                alone leaves people empty. It warns us about building our dreams on illusions rather than reality.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Themes;
