
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
            The author who wrote "Bull Rider" - a story about courage and family
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
                Suzanne M. Williams writes books for teenagers. She likes to write about young people 
                growing up and dealing with family problems. Her stories often take place in rural 
                America, where people live on farms and in small towns.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In "Bull Rider," Williams shows how good she is at telling stories that feel real. 
                She writes about important topics like being brave, family traditions, and finding 
                your own way in life.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="text-orange-600" />
                How She Writes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-semibold text-gray-800">Real Voice</h4>
                  <p className="text-gray-600">Williams understands rodeo life and writes about it in a true way</p>
                </div>
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-semibold text-gray-800">Good Characters</h4>
                  <p className="text-gray-600">Her characters feel like real people with real problems</p>
                </div>
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-semibold text-gray-800">Deep Feelings</h4>
                  <p className="text-gray-600">She writes about serious topics in a way young people can understand</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="text-orange-600" />
              Why "Bull Rider" Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="text-orange-600" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Real Culture</h4>
                <p className="text-gray-600 text-sm">Shows what rodeo life is really like</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Award className="text-orange-600" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Good Story</h4>
                <p className="text-gray-600 text-sm">Fun to read and teaches important lessons</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Pen className="text-orange-600" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Connects with Readers</h4>
                <p className="text-gray-600 text-sm">Helps readers who are facing their own growing-up challenges</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Author;
