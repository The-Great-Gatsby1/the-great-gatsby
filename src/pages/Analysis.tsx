
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Lightbulb, Target, Quote, Eye, Pen } from "lucide-react";

const Analysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-[Playfair_Display]">
            Why This Book Is Good
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A deeper look at the writing techniques and importance of "Bull Rider"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-lift fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pen className="text-orange-600" />
                How Williams Writes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Story Voice</h4>
                  <p className="text-gray-600 text-sm">Williams tells the story from an outside view that lets readers know Cam's thoughts and feelings while keeping the story fair.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">How Characters Talk</h4>
                  <p className="text-gray-600 text-sm">Real dialogue that shows how people in rural Western communities actually speak, making the story feel true.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Story Speed</h4>
                  <p className="text-gray-600 text-sm">Careful pacing that builds tension slowly, just like Cam's own journey of learning about himself.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="text-orange-600" />
                Symbols & Pictures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Bulls as Symbols</h4>
                  <p className="text-gray-600 text-sm">Bulls represent both the fears that must be faced and the dangerous expectations that can hurt people who aren't ready.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">The Arena</h4>
                  <p className="text-gray-600 text-sm">The rodeo arena represents life's challenges and how family expectations and personal failures happen in public.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Rural Setting</h4>
                  <p className="text-gray-600 text-sm">The Western setting emphasizes themes of tradition, masculinity, and the tension between old and new ways of thinking.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Quote className="text-orange-600" />
              How Characters Grow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">How Cam Changes</h4>
                <div className="space-y-2">
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-300">
                    <p className="text-sm"><strong>Beginning:</strong> Unsure, scared, wanting approval</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-300">
                    <p className="text-sm"><strong>Middle:</strong> Confused, questioning, learning more about himself</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-300">
                    <p className="text-sm"><strong>End:</strong> Self-aware, confident in his choices, being himself</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Ben's Complexity</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Ben isn't just a bad guy but a complex character dealing with his own disappointments and love for his son.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Shows differences between generations</li>
                  <li>• Shows how love can become pressure</li>
                  <li>• Shows growth and understanding</li>
                  <li>• Shows the conflict between tradition and change</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="text-orange-600" size={20} />
                Why It's Important
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Bull Rider" adds to young adult literature by showing real rural Western culture while exploring themes everyone can relate to about identity and family.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BookOpen className="text-orange-600" size={20} />
                Cultural Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                The book gives readers a look into rodeo culture and rural American life, helping people understand and appreciate different ways of life and family structures.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="text-orange-600" size={20} />
                Educational Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                Great for discussing growing-up themes, family relationships, cultural traditions, and the importance of being yourself.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 hover-lift">
          <CardHeader>
            <CardTitle className="text-center">Why "Bull Rider" Connects with Readers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-gray-700 leading-relaxed mb-6">
                Suzanne M. Williams has created a story that speaks to the experience everyone has of growing up and finding your place in the world. 
                While the setting is specifically Western and the culture is rodeo-centered, the emotional truths at the heart of the story 
                are ones that readers from all backgrounds can understand and relate to.
              </p>
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-3">Final Thought</h4>
                <p className="text-orange-700 italic">
                  "Bull Rider" reminds us that the greatest courage isn't about conquering outside challenges, 
                  but about having the bravery to be true to ourselves while honoring the people we love."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analysis;
