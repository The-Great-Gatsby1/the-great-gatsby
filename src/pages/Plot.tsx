
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, ArrowRight, Target, CheckCircle } from "lucide-react";

const Plot = () => {
  const plotPoints = [
    {
      title: "Beginning",
      icon: Play,
      content: "Nick Carraway moves to West Egg, Long Island, next door to the mysterious millionaire Jay Gatsby. Nick reconnects with his cousin Daisy and her husband Tom, who live across the bay in East Egg.",
      color: "blue"
    },
    {
      title: "Rising Action",
      icon: ArrowRight,
      content: "Nick attends one of Gatsby's lavish parties and meets him. He learns Gatsby and Daisy were once in love, and Gatsby wants Nick to help reunite them. Nick arranges a tea for Daisy and Gatsby to meet again after five years apart.",
      color: "teal"
    },
    {
      title: "Climax",
      icon: Target,
      content: "During a hot summer day in New York City, tensions explode. Tom confronts Gatsby about his relationship with Daisy. Driving Gatsby's car back home, Daisy accidentally hits and kills Tom's mistress Myrtle, but Gatsby takes the blame.",
      color: "red"
    },
    {
      title: "Conclusion",
      icon: CheckCircle,
      content: "Myrtle's husband George, believing Gatsby killed his wife, shoots Gatsby in his swimming pool and then himself. Despite Gatsby's wealth and parties, only Nick and Gatsby's father attend the funeral, showing how shallow Gatsby's relationships were.",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-300",
      teal: "bg-teal-100 text-teal-600 border-teal-300",
      red: "bg-red-100 text-red-600 border-red-300",
      green: "bg-green-100 text-green-600 border-green-300"
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-[Playfair_Display]">
            What Happens in the Story
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow the journey through the summer of 1922 on Long Island
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {plotPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card key={point.title} className="hover-lift fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${getColorClasses(point.color)}`}>
                      <IconComponent size={24} />
                    </div>
                    {point.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {point.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Important Scenes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-300 pl-4">
                  <h4 className="font-semibold">The Green Light</h4>
                  <p className="text-gray-600 text-sm">Gatsby stares at the green light across the bay, representing his dream of being with Daisy</p>
                </div>
                <div className="border-l-4 border-emerald-300 pl-4">
                  <h4 className="font-semibold">The Reunion</h4>
                  <p className="text-gray-600 text-sm">When Gatsby and Daisy meet again for the first time in five years at Nick's house</p>
                </div>
                <div className="border-l-4 border-emerald-300 pl-4">
                  <h4 className="font-semibold">The Plaza Hotel Argument</h4>
                  <p className="text-gray-600 text-sm">The confrontation between Gatsby and Tom over Daisy that changes everything</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Setting and Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                "The Great Gatsby" happens in New York City and Long Island during the summer of 1922. 
                This was during the "Jazz Age" or "Roaring Twenties," when America was celebrating 
                after World War I with wild parties, new music, and economic growth.
              </p>
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h4 className="font-semibold text-emerald-800 mb-2">Important Places</h4>
                <p className="text-emerald-700 text-sm">
                  East Egg (old money), West Egg (new money), and the Valley of Ashes (poverty) 
                  show the different social classes in America and how they're separated.
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
