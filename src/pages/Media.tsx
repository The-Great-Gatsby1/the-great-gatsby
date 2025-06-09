
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Headphones, Camera, Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Media = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display]">
            Media Elements
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Creative multimedia content to enhance the reading experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Video className="text-yellow-400" />
                Book Trailer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="bg-yellow-500/20 w-full h-48 rounded-lg flex items-center justify-center mb-4 border border-yellow-500/30">
                  <Play className="text-yellow-400" size={48} />
                </div>
                <h4 className="font-semibold text-yellow-300 mb-2">My Personal Book Trailer</h4>
                <p className="text-gray-200 text-sm mb-4">
                  A 2-minute video featuring key scenes, themes, and my personal take on why this book matters.
                </p>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Play className="mr-2" size={16} />
                  Watch Trailer
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Headphones className="text-yellow-400" />
                Podcast Discussion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="bg-yellow-500/20 w-full h-48 rounded-lg flex items-center justify-center mb-4 border border-yellow-500/30">
                  <Headphones className="text-yellow-400" size={48} />
                </div>
                <h4 className="font-semibold text-yellow-300 mb-2">"Gatsby & Me" Podcast Episode</h4>
                <p className="text-gray-200 text-sm mb-4">
                  A 15-minute discussion with my book club about our different interpretations and favorite moments.
                </p>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Headphones className="mr-2" size={16} />
                  Listen Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display] text-lg">
                <Camera className="text-yellow-400" />
                Reading Selfies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <img 
                  src="/lovable-uploads/5b10fb0c-de62-4450-8bcf-62aa8dffd7c9.png" 
                  alt="Reading The Great Gatsby" 
                  className="w-full h-32 object-cover rounded-lg"
                />
                <p className="text-gray-200 text-sm">Me reading at my favorite coffee shop</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-[Playfair_Display] text-lg">Book Cover Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <img 
                  src="/lovable-uploads/ec2bfb7d-581b-4ebf-87b0-8bca40369d35.png" 
                  alt="Great Gatsby Book Cover" 
                  className="w-full h-32 object-cover rounded-lg"
                />
                <p className="text-gray-200 text-sm">Different editions I've collected</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-[Playfair_Display] text-lg">Quote Infographic</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 p-4 rounded-lg border border-yellow-500/30">
                <blockquote className="text-yellow-200 text-center italic mb-2">
                  "So we beat on, boats against the current, borne back ceaselessly into the past."
                </blockquote>
                <p className="text-gray-300 text-xs text-center">- F. Scott Fitzgerald</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-[Playfair_Display]">Creative Project: Jazz Age Playlist</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-200 mb-4">
              I created a Spotify playlist of music from the 1920s to listen to while reading. 
              It really helped me feel immersed in Gatsby's world!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-300 mb-2">Featured Songs:</h4>
                <ul className="text-gray-200 text-sm space-y-1">
                  <li>• "Ain't She Sweet" - Ben Bernie</li>
                  <li>• "Charleston" - James P. Johnson</li>
                  <li>• "My Blue Heaven" - Gene Austin</li>
                  <li>• "Rhapsody in Blue" - George Gershwin</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-300 mb-2">Why This Music Matters:</h4>
                <p className="text-gray-200 text-sm">
                  These songs capture the energy and optimism of the Jazz Age that Gatsby embodies, 
                  but also hint at the underlying sadness that runs through the story.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Media;
