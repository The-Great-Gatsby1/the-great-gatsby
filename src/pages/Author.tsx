
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Award, Pen, ExternalLink, Landmark, Calendar, Quote, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Author = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Improved GSAP animations to ensure proper visibility
      gsap.fromTo(".author-card", 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );

      gsap.fromTo(".author-title", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const timelineEvents = [
    { year: "1896", event: "Born on September 24 in St. Paul, Minnesota to an upper-middle class family." },
    { year: "1913", event: "Entered Princeton University, where he wrote for the college humor magazine and triangle club musicals." },
    { year: "1917", event: "Left Princeton to join the U.S. Army during World War I. Wrote his first novel while stationed in Alabama." },
    { year: "1918", event: "Met and fell in love with Zelda Sayre, who initially rejected him due to his lack of financial prospects." },
    { year: "1920", event: "Published his first novel, 'This Side of Paradise,' which became an immediate success. Married Zelda a week after publication." },
    { year: "1922", event: "Published 'The Beautiful and Damned,' exploring themes of greed, status, and marriage." },
    { year: "1924", event: "Moved to Paris, where he became friends with other expatriate writers like Ernest Hemingway." },
    { year: "1925", event: "Published 'The Great Gatsby,' now considered his masterpiece, though it wasn't very successful at the time." },
    { year: "1930", event: "Zelda suffered her first mental breakdown, beginning years of hospitalization and treatment." },
    { year: "1934", event: "Published 'Tender Is the Night,' which received mixed reviews and sold poorly." },
    { year: "1937", event: "Moved to Hollywood to work as a screenwriter, struggling with alcoholism and financial problems." },
    { year: "1940", event: "Died of a heart attack on December 21 at the age of 44, leaving his final novel 'The Last Tycoon' unfinished." },
    { year: "1950s-60s", event: "Experienced posthumous recognition as 'The Great Gatsby' was rediscovered and acclaimed as a masterpiece of American literature." }
  ];

  const otherWorks = [
    { 
      title: "This Side of Paradise", 
      year: "1920", 
      description: "His debut novel about a Princeton student's coming of age, heavily autobiographical."
    },
    { 
      title: "The Beautiful and Damned", 
      year: "1922", 
      description: "Chronicles the lives of Anthony and Gloria Patch through their marriage and descent into alcoholism and despair."
    },
    { 
      title: "Tender Is the Night", 
      year: "1934", 
      description: "A psychological novel about an American psychiatrist in France and his deteriorating marriage."
    },
    { 
      title: "The Last Tycoon", 
      year: "1941", 
      description: "Published posthumously and unfinished, about Hollywood film executive Monroe Stahr."
    },
    { 
      title: "Tales of the Jazz Age", 
      year: "1922", 
      description: "A collection of short stories including 'The Diamond as Big as the Ritz'."
    },
    { 
      title: "All the Sad Young Men", 
      year: "1926", 
      description: "A collection featuring 'Winter Dreams,' often considered a preliminary sketch for Gatsby."
    }
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-black">
      <Navigation />
      
      {/* Art Deco Background Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-32 left-10 w-32 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        <div className="absolute top-52 right-20 w-24 h-1 bg-gradient-to-l from-yellow-400 to-transparent"></div>
        <div className="absolute bottom-40 left-20 w-40 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        <div className="absolute bottom-20 right-10 w-28 h-1 bg-gradient-to-l from-yellow-400 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12 fade-in">
          <h1 className="author-title text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display] art-deco-title">
            F. Scott Fitzgerald
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            The American author who captured the Jazz Age in "The Great Gatsby"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="author-card hover-lift lg:col-span-1 improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-yellow-400 font-[Playfair_Display]">F. Scott Fitzgerald</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/e92f05a3-7a3c-420d-abdc-5ab022c64945.png" 
                  alt="F. Scott Fitzgerald" 
                  className="w-48 h-64 object-cover rounded-lg mx-auto shadow-lg border-2 border-yellow-500/50"
                />
              </div>
              <p className="text-gray-200 mb-4 text-sm">
                September 24, 1896 - December 21, 1940 (aged 44)
              </p>
              <div className="flex flex-col gap-2">
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={() => window.open('https://en.wikipedia.org/wiki/F._Scott_Fitzgerald', '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Read Full Biography
                </Button>
                <Button 
                  variant="outline" 
                  className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
                  onClick={() => window.open('https://www.gutenberg.org/ebooks/author/166', '_blank')}
                >
                  <BookOpen size={16} className="mr-2" />
                  View Public Domain Works
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-8">
            <Card className="author-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                  <Pen className="text-yellow-400" />
                  About the Author
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 leading-relaxed mb-4">
                  F. Scott Fitzgerald (1896-1940) was an American writer who defined the Jazz Age with his vivid 
                  portrayals of the glamour, excess, and disillusionment of 1920s America. Born to an upper-middle-class 
                  family in St. Paul, Minnesota, Fitzgerald attended Princeton University but left to join the army 
                  during World War I.
                </p>
                <p className="text-gray-200 leading-relaxed mb-4">
                  His relationship with his wife Zelda Sayre mirrored many themes in his writing - the pursuit of wealth 
                  for love's sake, the destructive nature of ambition, and the hollowness behind glittering facades. Their 
                  tumultuous marriage, fueled by alcohol, fame, and mental illness, became as legendary as his fiction.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Despite critical acclaim, Fitzgerald struggled with alcoholism, financial troubles, and Zelda's mental 
                  illness throughout his life. He died believing himself a failure at age 44, unaware that his work would 
                  experience a dramatic revival and that "The Great Gatsby" would be recognized as one of the greatest 
                  American novels ever written.
                </p>
              </CardContent>
            </Card>

            <Card className="author-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                  <Quote className="text-yellow-400" />
                  Famous Quotes by Fitzgerald
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-400 pl-4 py-1">
                    <p className="text-yellow-200 italic">"Show me a hero and I'll write you a tragedy."</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4 py-1">
                    <p className="text-yellow-200 italic">"The test of a first-rate intelligence is the ability to hold two opposed ideas in the mind at the same time, and still retain the ability to function."</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4 py-1">
                    <p className="text-yellow-200 italic">"Never confuse a single defeat with a final defeat."</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4 py-1">
                    <p className="text-yellow-200 italic">"First you take a drink, then the drink takes a drink, then the drink takes you."</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="author-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Calendar className="text-yellow-400" />
              Fitzgerald's Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-yellow-500/30 hidden md:block"></div>
              
              <div className="space-y-8">
                {timelineEvents.map((event, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="min-w-32 font-bold text-yellow-400 text-right pt-0.5">{event.year}</div>
                    <div className="relative">
                      <div className="absolute -left-6 top-1 h-4 w-4 rounded-full bg-yellow-500"></div>
                      <p className="text-gray-200 pl-4">{event.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="author-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <BookOpen className="text-yellow-400" />
                Other Notable Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {otherWorks.map((work, idx) => (
                  <div key={idx} className="border-l-4 border-yellow-400 pl-4 py-2">
                    <h3 className="text-yellow-300 flex items-center gap-2">
                      <BookOpen size={16} className="text-yellow-400" />
                      <span>{work.title}</span>
                      <span className="text-gray-400 text-sm">({work.year})</span>
                    </h3>
                    <p className="text-gray-200 text-sm">{work.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="author-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Users className="text-yellow-400" />
                Literary Influences & Legacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-yellow-300 mb-2">Influences on Fitzgerald:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li className="text-gray-200">Joseph Conrad's powerful prose style</li>
                  <li className="text-gray-200">T.S. Eliot's modernist techniques</li>
                  <li className="text-gray-200">Oscar Wilde's examination of wealth and beauty</li>
                  <li className="text-gray-200">His own experiences in high society and with wealth</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-yellow-300 mb-2">Fitzgerald's Legacy:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li className="text-gray-200">Defined the Roaring Twenties in American literature</li>
                  <li className="text-gray-200">Heavily influenced writers like J.D. Salinger and Haruki Murakami</li>
                  <li className="text-gray-200">Pioneered the use of lyrical prose in American fiction</li>
                  <li className="text-gray-200">Created enduring examinations of the American Dream</li>
                  <li className="text-gray-200">Multiple film adaptations of his work, including five versions of "The Great Gatsby"</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="author-card hover-lift improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Award className="text-yellow-400" />
              Writing Style & Contributions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-yellow-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-yellow-500/50">
                  <Pen className="text-yellow-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-300">Lyrical Prose</h4>
                <p className="text-gray-200 text-sm">Fitzgerald's sentences have a musical quality with rhythm, imagery, and emotion creating beauty beyond their meaning.</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-yellow-500/50">
                  <Landmark className="text-yellow-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-300">Symbolic Depth</h4>
                <p className="text-gray-200 text-sm">His works are rich in symbols that layer additional meaning beneath the surface narrative, rewarding careful readers.</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-yellow-500/50">
                  <BookOpen className="text-yellow-400" size={24} />
                </div>
                <h4 className="font-semibold mb-2 text-yellow-300">Thematic Focus</h4>
                <p className="text-gray-200 text-sm">His exploration of ambition, love, money, and disillusionment created a defining literary examination of the American Dream.</p>
              </div>
            </div>
            
            <div className="bg-yellow-500/20 p-4 rounded-lg mt-6 border border-yellow-500/30">
              <h4 className="font-semibold text-yellow-300 mb-2 text-center">Literary Significance</h4>
              <p className="text-gray-200 text-sm leading-relaxed">
                Fitzgerald occupied a unique position in American literature as both a critical success and a popular celebrity.
                He captured the spirit of his generation so perfectly that he and his wife Zelda became icons of the Jazz Age.
                While he died believing his work forgotten, the post-WWII rediscovery of "The Great Gatsby" cemented his 
                place in the literary canon. Today, his examination of wealth, class, and the corrupted American Dream 
                remains as relevant as ever, making his work both historically significant and timelessly resonant.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Author;
