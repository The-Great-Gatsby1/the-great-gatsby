
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Award, Pen } from "lucide-react";

const Author = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-[Playfair_Display]">
            F. Scott Fitzgerald
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The American author who captured the Jazz Age in "The Great Gatsby"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pen className="text-emerald-600" />
                About the Author
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                F. Scott Fitzgerald (1896-1940) was an American writer famous for writing about the 
                Jazz Age of the 1920s. He lived during this exciting time and wrote about the parties, 
                wealth, and problems of rich people in America.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Fitzgerald struggled with money problems and drinking, which helped him understand both 
                the glamorous and sad sides of American life. His own experiences influenced "The Great Gatsby," 
                making the story feel real and meaningful.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="text-emerald-600" />
                His Writing Style
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-emerald-300 pl-4">
                  <h4 className="font-semibold text-gray-800">Beautiful Language</h4>
                  <p className="text-gray-600">Fitzgerald writes with poetic, flowing sentences that paint vivid pictures</p>
                </div>
                <div className="border-l-4 border-emerald-300 pl-4">
                  <h4 className="font-semibold text-gray-800">Symbols and Deeper Meaning</h4>
                  <p className="text-gray-600">He uses objects like the green light to represent bigger ideas</p>
                </div>
                <div className="border-l-4 border-emerald-300 pl-4">
                  <h4 className="font-semibold text-gray-800">Criticism of Society</h4>
                  <p className="text-gray-600">He shows both the beauty and ugliness of wealthy American society</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="text-emerald-600" />
              Why "The Great Gatsby" Is Important
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="text-emerald-600" size={24} />
                </div>
                <h4 className="font-semibold mb-2">American Classic</h4>
                <p className="text-gray-600 text-sm">Shows the American Dream and its problems</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Award className="text-emerald-600" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Perfect Writing</h4>
                <p className="text-gray-600 text-sm">Beautiful language that many consider perfect</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Pen className="text-emerald-600" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Still Relevant Today</h4>
                <p className="text-gray-600 text-sm">Themes about wealth and dreams still matter now</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Author;
