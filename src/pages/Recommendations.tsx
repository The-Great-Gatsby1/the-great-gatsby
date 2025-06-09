
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookmarkCheck, Star, Heart, Users } from "lucide-react";

const Recommendations = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display]">
            Book Recommendations
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            If you loved "The Great Gatsby," you'll love these books too
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <BookmarkCheck className="text-yellow-400" />
                "Tender Is the Night" by F. Scott Fitzgerald
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div className="w-24 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded border border-blue-400/30 flex items-center justify-center">
                  <span className="text-blue-300 text-xs text-center">Book Cover</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-gray-300 text-sm ml-2">5/5 stars</span>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Another Fitzgerald masterpiece about wealthy Americans living in Europe. 
                    Like Gatsby, it explores themes of love, wealth, and the American Dream gone wrong.
                  </p>
                </div>
              </div>
              <div className="bg-yellow-500/20 p-3 rounded-lg border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-300 mb-1">Why You'll Love It:</h4>
                <p className="text-gray-200 text-sm">
                  Same beautiful writing style, complex characters dealing with love and loss, 
                  and a critique of wealth and privilege in American society.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <BookmarkCheck className="text-yellow-400" />
                "The Sun Also Rises" by Ernest Hemingway
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div className="w-24 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded border border-orange-400/30 flex items-center justify-center">
                  <span className="text-orange-300 text-xs text-center">Book Cover</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[1,2,3,4].map(i => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm ml-2">4/5 stars</span>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Set in 1920s Paris and Spain, following a group of American and British expatriates. 
                    Explores similar themes of disillusionment and lost dreams.
                  </p>
                </div>
              </div>
              <div className="bg-yellow-500/20 p-3 rounded-lg border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-300 mb-1">Why You'll Love It:</h4>
                <p className="text-gray-200 text-sm">
                  Same time period as Gatsby, explores the aftermath of WWI on the American psyche, 
                  and features complex relationships and moral ambiguity.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Heart className="text-yellow-400" />
              Why These Recommendations?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-yellow-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-yellow-500/50">
                  <Users className="text-yellow-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-300">Similar Characters</h4>
                <p className="text-gray-200 text-sm">Complex, flawed characters struggling with love and identity</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-yellow-500/50">
                  <Heart className="text-yellow-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-300">Similar Themes</h4>
                <p className="text-gray-200 text-sm">Love, loss, the American Dream, and social class differences</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-yellow-500/50">
                  <Star className="text-yellow-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-300">Literary Quality</h4>
                <p className="text-gray-200 text-sm">Beautiful prose and timeless stories that are still relevant today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-[Playfair_Display]">More Books to Explore</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-300 mb-3">If you want more 1920s atmosphere:</h4>
                <ul className="text-gray-200 space-y-2 text-sm">
                  <li>• "Z: A Novel of Zelda Fitzgerald" by Therese Anne Fowler</li>
                  <li>• "The Paris Wife" by Paula McLain</li>
                  <li>• "Beautiful and Damned" by F. Scott Fitzgerald</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-300 mb-3">If you want similar themes:</h4>
                <ul className="text-gray-200 space-y-2 text-sm">
                  <li>• "An American Tragedy" by Theodore Dreiser</li>
                  <li>• "Sister Carrie" by Theodore Dreiser</li>
                  <li>• "The Age of Innocence" by Edith Wharton</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Recommendations;
