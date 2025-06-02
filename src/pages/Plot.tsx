
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, ArrowRight, Target, CheckCircle } from "lucide-react";

const Plot = () => {
  const plotPoints = [
    {
      title: "Beginning",
      icon: Play,
      content: "We meet Cam O'Mara, a fourteen-year-old boy whose family expects him to be a bull rider. His father Ben was a champion, and everyone thinks Cam should follow in his footsteps.",
      color: "blue"
    },
    {
      title: "Problems Build Up",
      icon: ArrowRight,
      content: "Cam is scared of bull riding but feels pressure from his family. He struggles between wanting to make his father happy and following his own feelings and abilities.",
      color: "orange"
    },
    {
      title: "Biggest Moment",
      icon: Target,
      content: "The story reaches its most exciting point when Cam has to face his fears and make a big decision about his future. This tests both his courage and his relationship with his father.",
      color: "red"
    },
    {
      title: "How It Ends",
      icon: CheckCircle,
      content: "Cam finds his own path and learns that real courage means being true to yourself while still loving your family.",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-300",
      orange: "bg-orange-100 text-orange-600 border-orange-300",
      red: "bg-red-100 text-red-600 border-red-300",
      green: "bg-green-100 text-green-600 border-green-300"
    };
    return colors[color as keyof typeof colors] || colors.orange;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-[Playfair_Display]">
            What Happens in the Story
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow Cam's journey through courage, family expectations, and finding himself
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
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-semibold">The First Ride</h4>
                  <p className="text-gray-600 text-sm">Cam's first time trying to ride a bull shows us his fears</p>
                </div>
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-semibold">Fight with Father</h4>
                  <p className="text-gray-600 text-sm">An important moment where family expectations clash with what Cam wants</p>
                </div>
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-semibold">The Big Choice</h4>
                  <p className="text-gray-600 text-sm">Cam has to choose between tradition and his own path</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Where It Takes Place</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                The story happens in the American West, where rodeo culture and rural traditions are important. 
                The setting helps show the challenges Cam faces.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">What Things Mean</h4>
                <p className="text-orange-700 text-sm">
                  The rodeo arena represents both opportunity and danger, while the bulls represent 
                  the fears and challenges that everyone must face when growing up.
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
