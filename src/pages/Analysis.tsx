
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
            Literary Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A deeper exploration of the literary techniques and significance of "Bull Rider"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-lift fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pen className="text-orange-600" />
                Writing Style & Technique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Narrative Voice</h4>
                  <p className="text-gray-600 text-sm">Williams employs a third-person perspective that allows readers intimate access to Cam's thoughts and emotions while maintaining narrative objectivity.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Dialogue</h4>
                  <p className="text-gray-600 text-sm">Authentic dialogue that captures the speech patterns and cultural nuances of rural Western communities, adding credibility to the story.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Pacing</h4>
                  <p className="text-gray-600 text-sm">Deliberate pacing that builds tension gradually, mirroring Cam's own journey of self-discovery and decision-making.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="text-orange-600" />
                Symbolism & Imagery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Bulls as Symbols</h4>
                  <p className="text-gray-600 text-sm">Bulls represent both the fears that must be conquered and the dangerous expectations that can harm those who aren't ready to face them.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">The Arena</h4>
                  <p className="text-gray-600 text-sm">The rodeo arena serves as a metaphor for life's challenges and the public nature of family expectations and personal failures.</p>
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
              Character Development Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Cam's Character Arc</h4>
                <div className="space-y-2">
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-300">
                    <p className="text-sm"><strong>Beginning:</strong> Uncertain, fearful, seeking approval</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-300">
                    <p className="text-sm"><strong>Middle:</strong> Conflicted, questioning, growing awareness</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-300">
                    <p className="text-sm"><strong>End:</strong> Self-aware, confident in his choices, authentic</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Ben's Complexity</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Ben isn't simply an antagonist but a complex character struggling with his own disappointments and love for his son.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Represents generational differences</li>
                  <li>• Shows how love can become pressure</li>
                  <li>• Demonstrates growth and understanding</li>
                  <li>• Embodies the conflict between tradition and change</li>
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
                Literary Significance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Bull Rider" contributes to young adult literature by providing an authentic portrayal of rural Western culture while exploring universal themes of identity and family relationships.
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
                The novel offers readers insight into rodeo culture and rural American life, promoting understanding and appreciation for diverse ways of life and family structures.
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
                Serves as an excellent text for discussing coming-of-age themes, family dynamics, cultural traditions, and the importance of authentic self-expression.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 hover-lift">
          <CardHeader>
            <CardTitle className="text-center">Why "Bull Rider" Resonates with Readers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-gray-700 leading-relaxed mb-6">
                Suzanne M. Williams has created a story that speaks to the universal experience of growing up and finding one's place in the world. 
                While the setting is specifically Western and the culture distinctly rodeo-centered, the emotional truths at the heart of the story 
                are ones that readers from all backgrounds can understand and relate to.
              </p>
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-3">Final Thought</h4>
                <p className="text-orange-700 italic">
                  "Bull Rider" reminds us that the greatest courage isn't about conquering external challenges, 
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
