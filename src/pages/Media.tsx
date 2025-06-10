
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Film, Mic, Youtube, ExternalLink, Info, Image, Palette, Music } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Media = () => {
  const [activeVideo, setActiveVideo] = useState<string>("https://www.youtube.com/embed/rARN6agiW7o");
  const [activeAudio, setActiveAudio] = useState<string | null>(null);
  
  const mediaItems = [
    {
      type: "video",
      title: "The Great Gatsby - Official Trailer",
      description: "The official trailer for Baz Luhrmann's 2013 adaptation starring Leonardo DiCaprio, which brings the visual splendor of Gatsby's world to life.",
      thumbnail: "https://img.youtube.com/vi/rARN6agiW7o/maxresdefault.jpg",
      source: "https://www.youtube.com/embed/rARN6agiW7o",
      attribution: "Warner Bros. Pictures"
    },
    {
      type: "video",
      title: "The Great Gatsby Explained",
      description: "An educational video that explains the novel's key themes, symbols, and historical context in an engaging way.",
      thumbnail: "https://img.youtube.com/vi/xw9Au9OoN88/maxresdefault.jpg",
      source: "https://www.youtube.com/embed/xw9Au9OoN88",
      attribution: "CrashCourse"
    },
    {
      type: "video",
      title: "Understanding F. Scott Fitzgerald",
      description: "A documentary excerpt about the author's life and how it influenced his most famous work.",
      thumbnail: "https://img.youtube.com/vi/FgH6X9jIl4Y/maxresdefault.jpg",
      source: "https://www.youtube.com/embed/FgH6X9jIl4Y",
      attribution: "Biography Channel"
    }
  ];
  
  const artGallery = [
    {
      title: "Original Book Cover",
      description: "The famous blue eyes and glittering cityscape designed by Francis Cugat for the first edition of the novel.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
      attribution: "Francis Cugat, 1925"
    },
    {
      title: "East and West Egg Map",
      description: "A map showing the geographical layout of the novel's setting on Long Island Sound.",
      image: "/lovable-uploads/5b10fb0c-de62-4450-8bcf-62aa8dffd7c9.png",
      attribution: "Created based on novel descriptions"
    },
    {
      title: "1920s Fashion",
      description: "The fashionable flapper style that characters like Jordan Baker and Daisy would have worn.",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Flapper_girl_in_1928_photo.jpg",
      attribution: "Public domain, 1928"
    },
    {
      title: "Art Deco Style",
      description: "The distinctive architectural and design style that would have been featured in Gatsby's mansion.",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Art_Deco_Chrysler_Building.jpg",
      attribution: "Chrysler Building, New York"
    }
  ];
  
  const audioSelections = [
    {
      title: "1920s Jazz: The Music of Gatsby's Parties",
      description: "Experience the authentic sounds that would have played at Gatsby's lavish parties.",
      source: "https://ia600504.us.archive.org/2/items/FirstThreeMinutesOfRFranklinJazzCabaret/03RFranklinJazzCabaret.mp3",
      attribution: "Public domain jazz recording"
    },
    {
      title: "Audiobook Excerpt - Chapter 1",
      description: "Listen to the opening passages of The Great Gatsby, where Nick Carraway describes his move to West Egg.",
      source: "https://ia800907.us.archive.org/35/items/thegreatgatsby_201603/greatgatsby_01_fitzgerald.mp3",
      attribution: "LibriVox recording, public domain"
    },
    {
      title: "Analysis of Gatsby's Character",
      description: "A podcast-style discussion of Jay Gatsby's complexity as a character and his symbolic meaning.",
      source: "https://ia801002.us.archive.org/5/items/podcast_nonfiction-literature_f-scott-fitzgeralds-the-gre_1000169032123/podcast_nonfiction-literature_f-scott-fitzgeralds-the-gre_1000169032123_itemimage.jpg",
      attribution: "Open University Literature Podcast"
    }
  ];
  
  const bookSelfies = [
    {
      title: "Reading at the Beach",
      description: "Finding parallels between Gatsby's waterfront mansion and my reading spot by the water.",
      image: "/lovable-uploads/ec2bfb7d-581b-4ebf-87b0-8bca40369d35.png"
    },
    {
      title: "Late Night Reading Session",
      description: "Staying up late with Gatsby, much like his character would gaze at the green light into the night.",
      image: "/lovable-uploads/ec2bfb7d-581b-4ebf-87b0-8bca40369d35.png"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display]">
            Media Gallery
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Videos, images, and audio exploring "The Great Gatsby" and its cultural impact
          </p>
        </div>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Film className="text-yellow-400" />
              Video Gallery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src={activeVideo} 
                  title="YouTube video player" 
                  className="w-full h-[400px] rounded-lg"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mediaItems.map((item, index) => (
                <Card 
                  key={index} 
                  className={`cursor-pointer hover:scale-105 transition-transform bg-gray-800/80 border ${activeVideo === item.source ? 'border-yellow-400' : 'border-gray-700'}`}
                  onClick={() => setActiveVideo(item.source)}
                >
                  <div className="relative">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full h-36 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/60 w-12 h-12 rounded-full flex items-center justify-center">
                        <Youtube className="text-red-500" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-yellow-200 mb-1 truncate">{item.title}</h4>
                    <p className="text-gray-400 text-xs">{item.attribution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Mic className="text-yellow-400" />
                Audio Selections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {audioSelections.map((audio, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Button 
                        variant={activeAudio === audio.source ? "default" : "outline"} 
                        size="icon"
                        className={activeAudio === audio.source ? "bg-yellow-500 text-black hover:bg-yellow-600" : "border-yellow-500/50 text-yellow-400"}
                        onClick={() => {
                          if (activeAudio === audio.source) {
                            setActiveAudio(null);
                          } else {
                            setActiveAudio(audio.source);
                          }
                        }}
                      >
                        {activeAudio === audio.source ? (
                          <span className="h-4 w-4">■</span>
                        ) : (
                          <span className="h-4 w-4">▶</span>
                        )}
                      </Button>
                      <div>
                        <h4 className="font-medium text-yellow-200">{audio.title}</h4>
                        <p className="text-gray-300 text-sm mt-1">{audio.description}</p>
                        <p className="text-gray-500 text-xs mt-2">Source: {audio.attribution}</p>
                      </div>
                    </div>
                    
                    {activeAudio === audio.source && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <audio controls className="w-full" autoPlay>
                          <source src={audio.source} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Image className="text-yellow-400" />
                Book Selfies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {bookSelfies.map((selfie, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                    <img 
                      src={selfie.image} 
                      alt={selfie.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-medium text-yellow-200">{selfie.title}</h4>
                      <p className="text-gray-300 text-sm mt-1">{selfie.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Palette className="text-yellow-400" />
              Art & Imagery Gallery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {artGallery.map((art, index) => (
                <div key={index} className="border border-gray-700 rounded-lg overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={art.image} 
                      alt={art.title} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 w-full">
                        <h4 className="font-medium text-yellow-200">{art.title}</h4>
                        <p className="text-gray-300 text-sm">{art.description}</p>
                        <p className="text-gray-400 text-xs mt-1">Source: {art.attribution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-yellow-200">{art.title}</h4>
                    <p className="text-gray-400 text-xs">{art.attribution}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Music className="text-yellow-400" />
              The Jazz Age Playlist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-200 mb-6">
              Music played a crucial role in the atmosphere of the 1920s. Here's a curated playlist that captures 
              the sound of Gatsby's era - the perfect soundtrack to imagine his extravagant parties.
            </p>
            
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-800/50">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3e/LouisArmstrongLive1955.jpg" 
                    alt="Jazz Age Music" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-xl font-semibold text-yellow-300">Gatsby's Party Playlist</h3>
                  
                  <ul className="space-y-3">
                    <li className="border-b border-gray-700 pb-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-yellow-100">Louis Armstrong</p>
                          <p className="text-gray-400 text-sm">West End Blues (1928)</p>
                        </div>
                        <ExternalLink 
                          size={16} 
                          className="text-yellow-500 cursor-pointer"
                          onClick={() => window.open('https://www.youtube.com/watch?v=4WPCBieSESI', '_blank')}
                        />
                      </div>
                    </li>
                    <li className="border-b border-gray-700 pb-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-yellow-100">Duke Ellington</p>
                          <p className="text-gray-400 text-sm">East St. Louis Toodle-O (1927)</p>
                        </div>
                        <ExternalLink 
                          size={16} 
                          className="text-yellow-500 cursor-pointer"
                          onClick={() => window.open('https://www.youtube.com/watch?v=xHXUEfAR8y8', '_blank')}
                        />
                      </div>
                    </li>
                    <li className="border-b border-gray-700 pb-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-yellow-100">Bessie Smith</p>
                          <p className="text-gray-400 text-sm">Nobody Knows You When You're Down and Out (1929)</p>
                        </div>
                        <ExternalLink 
                          size={16} 
                          className="text-yellow-500 cursor-pointer"
                          onClick={() => window.open('https://www.youtube.com/watch?v=6MzU8xM99Uo', '_blank')}
                        />
                      </div>
                    </li>
                    <li className="border-b border-gray-700 pb-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-yellow-100">Jelly Roll Morton</p>
                          <p className="text-gray-400 text-sm">Black Bottom Stomp (1925)</p>
                        </div>
                        <ExternalLink 
                          size={16} 
                          className="text-yellow-500 cursor-pointer"
                          onClick={() => window.open('https://www.youtube.com/watch?v=3lRFDloXSsk', '_blank')}
                        />
                      </div>
                    </li>
                  </ul>
                  
                  <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-500/30">
                    <div className="flex items-start gap-2">
                      <Info size={18} className="text-yellow-400 mt-0.5 shrink-0" />
                      <p className="text-yellow-200 text-sm">
                        These songs exemplify the Jazz Age sound that would have filled Gatsby's mansion during his extravagant parties, 
                        representing the era's exuberance, innovation, and underlying melancholy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Media;
