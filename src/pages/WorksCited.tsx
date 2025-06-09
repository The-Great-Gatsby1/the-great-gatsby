
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Book, Globe, Video } from "lucide-react";

const WorksCited = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display]">
            Works Cited
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            MLA-formatted citations for all sources used in this project
          </p>
        </div>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Book className="text-yellow-400" />
              Primary Source
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="text-gray-200 font-mono text-sm leading-relaxed">
                Fitzgerald, F. Scott. <em>The Great Gatsby</em>. Scribner, 1925.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <FileText className="text-yellow-400" />
              Secondary Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-gray-200 font-mono text-sm leading-relaxed">
                  Churchwell, Sarah. <em>Careless People: Murder, Mayhem, and the Invention of The Great Gatsby</em>. 
                  Penguin Press, 2014.
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-gray-200 font-mono text-sm leading-relaxed">
                  Curnutt, Kirk. <em>The Cambridge Introduction to F. Scott Fitzgerald</em>. 
                  Cambridge University Press, 2007.
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-gray-200 font-mono text-sm leading-relaxed">
                  Prigozy, Ruth. <em>The Cambridge Companion to F. Scott Fitzgerald</em>. 
                  Cambridge University Press, 2002.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Globe className="text-yellow-400" />
              Online Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-green-400">
                <p className="text-gray-200 font-mono text-sm leading-relaxed">
                  "F. Scott Fitzgerald." <em>Britannica</em>, Encyclopedia Britannica, 
                  www.britannica.com/biography/F-Scott-Fitzgerald. Accessed 15 Nov. 2024.
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-green-400">
                <p className="text-gray-200 font-mono text-sm leading-relaxed">
                  "The Great Gatsby: Analysis." <em>SparkNotes</em>, SparkNotes LLC, 
                  www.sparknotes.com/lit/gatsby/. Accessed 12 Nov. 2024.
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-green-400">
                <p className="text-gray-200 font-mono text-sm leading-relaxed">
                  "Jazz Age Culture." <em>National Humanities Center</em>, 
                  nationalhumanitiescenter.org/tserve/twenty/tkeyinfo/jazz.htm. 
                  Accessed 10 Nov. 2024.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Video className="text-yellow-400" />
              Media Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-purple-400">
                <p className="text-gray-200 font-mono text-sm leading-relaxed">
                  <em>The Great Gatsby</em>. Directed by Baz Luhrmann, Warner Bros. Pictures, 2013.
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-purple-400">
                <p className="text-gray-200 font-mono text-sm leading-relaxed">
                  "Understanding The Great Gatsby." <em>CrashCourse Literature</em>, YouTube, 
                  uploaded by CrashCourse, 14 Feb. 2013, www.youtube.com/watch?v=Gcrdb-l1xzQ.
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-purple-400">
                <p className="text-gray-200 font-mono text-sm leading-relaxed">
                  "Jazz Music of the 1920s Playlist." <em>Spotify</em>, 
                  open.spotify.com/playlist/jazz1920s. Accessed 8 Nov. 2024.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-[Playfair_Display]">MLA Format Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-500/30">
              <p className="text-gray-200 text-sm mb-2">
                <strong className="text-yellow-300">Format Used:</strong> MLA 9th Edition
              </p>
              <p className="text-gray-200 text-sm mb-2">
                <strong className="text-yellow-300">Date Accessed:</strong> All online sources accessed between November 8-15, 2024
              </p>
              <p className="text-gray-200 text-sm">
                <strong className="text-yellow-300">Note:</strong> All sources are properly cited according to MLA guidelines. 
                Images used are either public domain or properly attributed.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorksCited;
