
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Star, Users, Compass, Award } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Themes = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".theme-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });

      gsap.from(".theme-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

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
        "Can't repeat the past? Why of course you can!",
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
        "Tom and Daisy retreating into their money",
        "The eyes of Dr. T.J. Eckleburg watching over the moral wasteland"
      ],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "bg-emerald-500/30 text-emerald-300 border-emerald-400/50",
      blue: "bg-blue-500/30 text-blue-300 border-blue-400/50",
      red: "bg-red-500/30 text-red-300 border-red-400/50",
      teal: "bg-teal-500/30 text-teal-300 border-teal-400/50",
      purple: "bg-purple-500/30 text-purple-300 border-purple-400/50",
      indigo: "bg-indigo-500/30 text-indigo-300 border-indigo-400/50"
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-black">
      <Navigation />
      
      {/* Art Deco Background Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-32 left-10 w-32 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        <div className="absolute top-52 right-20 w-24 h-1 bg-gradient-to-l from-yellow-400 to-transparent"></div>
        <div className="absolute bottom-40 left-20 w-40 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        <div className="absolute bottom-20 right-10 w-28 h-1 bg-gradient-to-l from-yellow-400 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 fade-in">
          <h1 className="theme-title text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display] art-deco-title">
            Big Ideas in the Story
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Explore the deeper meanings and important themes in "The Great Gatsby"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {themes.map((theme, index) => {
            const IconComponent = theme.icon;
            return (
              <Card key={theme.title} className="theme-card hover-lift fade-in art-deco-card bg-gray-900/95 border-yellow-500/40 backdrop-blur-sm group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-yellow-400 font-[Playfair_Display]">
                    <div className={`p-2 rounded-lg ${getColorClasses(theme.color)} border group-hover:scale-110 transition-transform`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{theme.title}</h3>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    {theme.description}
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-semibold mb-2 text-yellow-300">Examples:</h4>
                    <ul className="space-y-1">
                      {theme.examples.map((example, idx) => (
                        <li key={idx} className="text-gray-200 text-sm flex items-start gap-2">
                          <span className={`w-2 h-2 rounded-full mt-2 ${getColorClasses(theme.color).split(' ')[0].replace('bg-', 'bg-').replace('/30', '/70')}`}></span>
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

        <Card className="hover-lift art-deco-card bg-gray-900/95 border-yellow-500/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-yellow-400 font-[Playfair_Display]">Why These Ideas Matter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-yellow-300">Still Relevant Today</h4>
                <p className="text-gray-200 leading-relaxed text-sm">
                  These themes connect with readers today because we still care about the American Dream, 
                  social differences, and the emptiness that can come with focusing too much on money and status.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-yellow-300">Why It's a Classic</h4>
                <p className="text-gray-200 leading-relaxed text-sm">
                  Fitzgerald weaves these themes together with beautiful writing and unforgettable symbols 
                  like the green light, the eyes of Dr. T.J. Eckleburg, and the Valley of Ashes.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-yellow-500/15 p-6 rounded-lg border border-yellow-500/30">
              <h4 className="font-semibold text-yellow-300 mb-2 text-center">Main Message</h4>
              <p className="text-gray-200 text-center">
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
