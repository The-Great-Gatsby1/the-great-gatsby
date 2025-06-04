
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, ArrowRight, Target, CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Plot = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Improved GSAP animations
      gsap.fromTo(".plot-card", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );

      gsap.fromTo(".plot-title", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const plotPoints = [
    {
      title: "How It Starts",
      icon: Play,
      content: "Nick moves next to a rich man named Gatsby. Nick visits his cousin Daisy and her mean husband Tom. Gatsby throws big parties hoping Daisy will come.",
      detail: "Nick is our storyteller. He sees everything that happens and tells us about it.",
      color: "blue"
    },
    {
      title: "Things Get Exciting",
      icon: ArrowRight,
      content: "Nick helps Gatsby meet Daisy again after 5 years apart. They used to love each other. Gatsby bought his big house just to be near her.",
      detail: "Gatsby has been waiting and hoping for this moment for five whole years!",
      color: "teal"
    },
    {
      title: "Everything Goes Wrong",
      icon: Target,
      content: "On a very hot day, Tom finds out about Gatsby and Daisy. They have a big fight. While driving home, Daisy accidentally hits and kills a woman with Gatsby's car.",
      detail: "The woman who dies is Tom's girlfriend. Her husband thinks Gatsby was driving.",
      color: "red"
    },
    {
      title: "Sad Ending",
      icon: CheckCircle,
      content: "The dead woman's husband shoots Gatsby. Even though Gatsby was rich and famous, only Nick and Gatsby's dad come to his funeral. Everyone else forgot about him.",
      detail: "This shows that all of Gatsby's party friends weren't real friends at all.",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500/30 text-blue-300 border-blue-400/50",
      teal: "bg-teal-500/30 text-teal-300 border-teal-400/50",
      red: "bg-red-500/30 text-red-300 border-red-400/50",
      green: "bg-green-500/30 text-green-300 border-green-400/50"
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-black">
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
          <h1 className="plot-title text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display] art-deco-title">
            What Happens in the Story
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Follow along with the summer of 1922 on Long Island
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {plotPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card key={point.title} className="plot-card hover-lift group cursor-pointer improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-yellow-400 font-[Playfair_Display]">
                    <div className={`p-2 rounded-lg ${getColorClasses(point.color)} group-hover:scale-110 transition-transform border`}>
                      <IconComponent size={24} />
                    </div>
                    {point.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    {point.content}
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-yellow-500/20 p-3 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-yellow-200 text-sm font-medium">
                      Learn More: {point.detail}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover-lift group improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-[Playfair_Display]">Cool Scenes to Remember</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 pl-4 group-hover:border-yellow-300 transition-colors">
                  <h4 className="font-semibold cursor-help text-yellow-300">The Green Light</h4>
                  <p className="text-gray-200 text-sm">Gatsby stares at a green light across the water. It shows his hope to be with Daisy.</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4 group-hover:border-yellow-300 transition-colors">
                  <h4 className="font-semibold cursor-help text-yellow-300">Meeting Again</h4>
                  <p className="text-gray-200 text-sm">When Gatsby and Daisy see each other for the first time in 5 years. Very awkward!</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4 group-hover:border-yellow-300 transition-colors">
                  <h4 className="font-semibold cursor-help text-yellow-300">The Big Fight</h4>
                  <p className="text-gray-200 text-sm">Tom and Gatsby argue about who Daisy loves. This changes everything!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift group improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-[Playfair_Display]">When and Where</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 leading-relaxed mb-4">
                The story happens in summer 1922 in New York. This was the "Jazz Age" - 
                a time of parties, new music, and lots of money after World War 1 ended.
              </p>
              <div className="bg-yellow-500/20 p-4 rounded-lg group-hover:bg-yellow-500/30 transition-colors border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-300 mb-2">Important Places</h4>
                <p className="text-gray-200 text-sm">
                  <span className="font-medium text-yellow-400">East Egg:</span> Where old rich families live (like Tom and Daisy)<br/>
                  <span className="font-medium text-yellow-400">West Egg:</span> Where new rich people live (like Gatsby)<br/>
                  <span className="font-medium text-yellow-400">Valley of Ashes:</span> Where poor people live (very sad place)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Plot;
