
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Award, Pen } from "lucide-react";

const Author = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-[Playfair_Display]">
            Suzanne M. Williams
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Acclaimed author bringing authentic stories of courage and family to young adult literature
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pen className="text-orange-600" />
                About the Author
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Suzanne M. Williams is a talented author who specializes in young adult fiction that explores themes of identity, family, and personal growth. Her writing often features authentic portrayals of rural American life and the challenges faced by teenagers navigating complex family dynamics.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With "Bull Rider," Williams demonstrates her ability to craft compelling narratives that resonate with readers while addressing important themes about courage, tradition, and finding one's own path in life.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="text-orange-600" />
                Writing Style & Themes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-semibold text-gray-800">Authentic Voice</h4>
                  <p className="text-gray-600">Williams writes with genuine understanding of rodeo culture and rural life</p>
                </div>
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-semibold text-gray-800">Character Development</h4>
                  <p className="text-gray-600">Complex, relatable characters facing real-world challenges</p>
                </div>
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-semibold text-gray-800">Emotional Depth</h4>
                  <p className="text-gray-600">Explores deep themes while maintaining accessibility for young readers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="text-orange-600" />
              Impact of "Bull Rider"
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="text-orange-600" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Cultural Authenticity</h4>
                <p className="text-gray-600 text-sm">Provides genuine insight into rodeo culture and Western traditions</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Award className="text-orange-600" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Literary Merit</h4>
                <p className="text-gray-600 text-sm">Combines engaging storytelling with meaningful themes</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Pen className="text-orange-600" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Reader Connection</h4>
                <p className="text-gray-600 text-sm">Resonates with readers facing their own coming-of-age challenges</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Author;
