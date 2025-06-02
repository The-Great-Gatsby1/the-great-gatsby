
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, ArrowRight, Target, CheckCircle } from "lucide-react";

const Plot = () => {
  const plotPoints = [
    {
      title: "Setup & Introduction",
      icon: Play,
      content: "We meet Cam O'Mara, a fourteen-year-old boy living in the shadow of his family's rodeo legacy. His father Ben is a former champion, and there's an expectation that Cam will follow in his footsteps.",
      color: "blue"
    },
    {
      title: "Rising Action",
      icon: ArrowRight,
      content: "Cam struggles with his fear of bull riding while dealing with family pressure. He faces internal conflict between wanting to please his father and following his own desires and abilities.",
      color: "orange"
    },
    {
      title: "Climax",
      icon: Target,
      content: "The story reaches its peak when Cam must confront his fears and make a crucial decision about his future, testing both his courage and his relationship with his father.",
      color: "red"
    },
    {
      title: "Resolution",
      icon: CheckCircle,
      content: "Cam finds his own path, learning that true courage isn't about meeting others' expectations but about being true to yourself while honoring family bonds.",
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
            Plot Summary
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow Cam's journey through courage, family expectations, and self-discovery
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
              <CardTitle>Key Scenes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-semibold">The First Ride</h4>
                  <p className="text-gray-600 text-sm">Cam's initial encounter with bull riding sets the tone for his internal struggle</p>
                </div>
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-semibold">Father-Son Confrontation</h4>
                  <p className="text-gray-600 text-sm">A pivotal moment where family expectations clash with personal desires</p>
                </div>
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-semibold">The Decision</h4>
                  <p className="text-gray-600 text-sm">Cam must choose between tradition and his own path forward</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Setting & Atmosphere</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                The story takes place in the American West, immersed in rodeo culture and rural traditions. 
                The setting serves as both backdrop and metaphor for the challenges Cam faces.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Symbolic Elements</h4>
                <p className="text-orange-700 text-sm">
                  The rodeo arena represents both opportunity and danger, while the bulls symbolize 
                  the fears and challenges that must be faced in growing up.
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
