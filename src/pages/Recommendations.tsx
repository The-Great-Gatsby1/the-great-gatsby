
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Star, Users, Calendar, Clock, Locate, ExternalLink, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Recommendations = () => {
  const books = [
    {
      title: "The Sun Also Rises",
      author: "Ernest Hemingway",
      year: "1926",
      genre: "Modernist Fiction",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/The_Sun_Also_Rises_%281st_ed._cover%29.jpg",
      rating: 4.5,
      description: "Like Gatsby, this novel explores the Lost Generation after World War I, featuring expatriates in Paris and Spain. If you enjoyed Fitzgerald's portrayal of disillusionment beneath glittering surfaces, you'll appreciate Hemingway's spare prose exploring similar themes of post-war disenchantment.",
      similarities: [
        "Written in the same era (1920s) and deals with post-World War I society",
        "Explores themes of disillusionment and lost ideals",
        "Features wealthy Americans seeking meaning through excess",
        "Has a first-person narrator observing a compelling but flawed protagonist"
      ],
      differences: [
        "Set primarily in Paris and Spain rather than New York",
        "Written in Hemingway's famously spare, understated style (unlike Fitzgerald's lush prose)",
        "More directly addresses the war's impact on the characters",
        "Features bullfighting as a central symbolic activity"
      ],
      link: "https://www.gutenberg.org/ebooks/author/106"
    },
    {
      title: "Tender Is the Night",
      author: "F. Scott Fitzgerald",
      year: "1934",
      genre: "Psychological Fiction",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Tender_Is_the_Night_%281934_1st_ed_dust_jacket%29.jpg",
      rating: 4.3,
      description: "If you loved Gatsby, this later novel by Fitzgerald offers similar beautiful prose while diving deeper into psychological complexity. Following the rise and fall of promising psychiatrist Dick Diver and his mentally ill wife Nicole, it explores wealth, love, and the corruption of the American Dream with even more emotional depth.",
      similarities: [
        "Written by the same author with similar lyrical prose style",
        "Features wealthy Americans in glamorous settings (the French Riviera)",
        "Explores the emptiness behind beautiful facades",
        "Shows the corrupting influence of wealth and privilege"
      ],
      differences: [
        "More complex structure with shifting timelines and perspectives",
        "Deeper psychological focus on the characters' internal lives",
        "More autobiographical, drawing from Fitzgerald's troubled marriage",
        "Set primarily in Europe rather than America"
      ],
      link: "https://www.gutenberg.org/ebooks/author/166"
    },
    {
      title: "The Beautiful and Damned",
      author: "F. Scott Fitzgerald",
      year: "1922",
      genre: "Social Satire",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/The_Beautiful_and_Damned_1922_dust_jacket.jpg",
      rating: 4.1,
      description: "Written just before The Great Gatsby, this novel follows wealthy socialite Anthony Patch and his wife Gloria as they await an inheritance while living extravagantly. Like Gatsby, it explores themes of wealth, social status, and the corruption of the American Dream.",
      similarities: [
        "Written by Fitzgerald with his characteristic prose style",
        "Set in the Jazz Age era with similar party scenes and atmosphere",
        "Examines the destructive effects of wealth and excess",
        "Features characters pursuing status and pleasure"
      ],
      differences: [
        "More directly satirical in tone",
        "Features a deteriorating marriage as its central relationship",
        "Characters start wealthy rather than aspiring to wealth",
        "More explicitly addresses alcoholism (a problem in Fitzgerald's own life)"
      ],
      link: "https://www.gutenberg.org/ebooks/author/166"
    },
    {
      title: "This Side of Paradise",
      author: "F. Scott Fitzgerald",
      year: "1920",
      genre: "Coming-of-Age Fiction",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/This_Side_of_Paradise_%281st_edition_cover%29.jpg",
      rating: 4.0,
      description: "Fitzgerald's debut novel follows intellectual Amory Blaine from prep school through Princeton and into adulthood. If you're interested in the development of Fitzgerald's themes and style before Gatsby, this more autobiographical work offers fascinating insights.",
      similarities: [
        "Written by Fitzgerald with similar thematic concerns",
        "Features Princeton education (which Gatsby falsely claims)",
        "Explores social class and aspiration in America",
        "Shows the disillusionment of the post-WWI generation"
      ],
      differences: [
        "More experimental in structure and style",
        "Features a much younger protagonist coming of age",
        "More explicitly autobiographical",
        "Written earlier with a less refined prose style"
      ],
      link: "https://www.gutenberg.org/ebooks/805"
    }
  ];

  const mainRecommendations = books.slice(0, 2);
  const additionalRecommendations = books.slice(2);

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
            If you enjoyed "The Great Gatsby," you might like these similar books
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {mainRecommendations.map((book, index) => (
            <Card key={index} className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm hover-lift">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="p-4 flex items-center justify-center bg-gray-800/50 rounded-l-lg">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-40 h-auto max-h-60 object-contain drop-shadow-lg"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-yellow-500 uppercase tracking-wider mb-1">Top Recommendation</p>
                        <CardTitle className="text-xl text-yellow-300 font-[Playfair_Display]">{book.title}</CardTitle>
                        <p className="text-gray-300">by {book.author}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16}
                            className={i < Math.floor(book.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
                          />
                        ))}
                        {book.rating % 1 !== 0 && (
                          <Star size={16} className="text-yellow-400" fill="#FBBF24" strokeWidth={0} style={{ clipPath: 'inset(0 50% 0 0)', marginLeft: '-16px' }} />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-yellow-500/30 text-yellow-200 text-xs px-2 py-1 rounded-full flex items-center">
                        <Calendar size={12} className="mr-1" /> {book.year}
                      </span>
                      <span className="bg-yellow-500/30 text-yellow-200 text-xs px-2 py-1 rounded-full">
                        {book.genre}
                      </span>
                    </div>
                    
                    <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                      {book.description}
                    </p>
                    
                    <Button 
                      onClick={() => window.open(book.link, '_blank')}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black w-full"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Learn More
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <ThumbsUp className="text-yellow-400" />
              Why You'd Love These Books
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainRecommendations.map((book, index) => (
                <Card key={index} className="bg-gray-800/60 border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-yellow-300">{book.title} by {book.author}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-green-400 flex items-center gap-2 mb-2 text-sm font-medium">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Similarities to Gatsby
                        </h4>
                        <ul className="space-y-1">
                          {book.similarities.map((similarity, i) => (
                            <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                              <span className="text-green-500 mt-1">•</span>
                              {similarity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-blue-400 flex items-center gap-2 mb-2 text-sm font-medium">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Unique Qualities
                        </h4>
                        <ul className="space-y-1">
                          {book.differences.map((difference, i) => (
                            <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {difference}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 font-[Playfair_Display]">
          More Recommendations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalRecommendations.map((book, index) => (
            <Card key={index} className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
              <div className="flex items-start p-4 gap-4">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-20 h-28 object-cover rounded shadow-lg"
                />
                <div>
                  <h3 className="font-semibold text-yellow-300">{book.title}</h3>
                  <p className="text-gray-300 text-sm">{book.author}, {book.year}</p>
                  <div className="flex items-center mt-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12}
                        className={i < Math.floor(book.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
                      />
                    ))}
                  </div>
                  <p className="text-gray-200 text-xs line-clamp-2">{book.description}</p>
                  <Button 
                    variant="link" 
                    className="text-yellow-400 p-0 h-auto text-xs mt-1"
                    onClick={() => window.open(book.link, '_blank')}
                  >
                    Learn more
                    <ExternalLink size={10} className="ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="mt-12 bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <BookOpen className="text-yellow-400" />
              Reading Pathways After Gatsby
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-gray-200">
                If you enjoyed "The Great Gatsby," you might want to explore literature in different directions:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gray-800/60 border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-yellow-300 flex items-center gap-2">
                      <Users size={16} className="text-yellow-400" />
                      More by Fitzgerald
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="text-gray-300">• <span className="text-yellow-200">Tender Is the Night</span> - His most personal novel</li>
                      <li className="text-gray-300">• <span className="text-yellow-200">This Side of Paradise</span> - His first novel</li>
                      <li className="text-gray-300">• <span className="text-yellow-200">Tales of the Jazz Age</span> - Short story collection</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-800/60 border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-yellow-300 flex items-center gap-2">
                      <Clock size={16} className="text-yellow-400" />
                      Same Era
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="text-gray-300">• <span className="text-yellow-200">The Sun Also Rises</span> by Ernest Hemingway</li>
                      <li className="text-gray-300">• <span className="text-yellow-200">Mrs. Dalloway</span> by Virginia Woolf</li>
                      <li className="text-gray-300">• <span className="text-yellow-200">The Age of Innocence</span> by Edith Wharton</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-800/60 border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-yellow-300 flex items-center gap-2">
                      <Locate size={16} className="text-yellow-400" />
                      Similar Themes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="text-gray-300">• <span className="text-yellow-200">The House of Mirth</span> by Edith Wharton</li>
                      <li className="text-gray-300">• <span className="text-yellow-200">The Magnificent Ambersons</span> by Booth Tarkington</li>
                      <li className="text-gray-300">• <span className="text-yellow-200">American Pastoral</span> by Philip Roth</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-500/30">
                <p className="text-yellow-200 text-sm">
                  <strong>Reading Tip:</strong> After finishing "The Great Gatsby," consider trying "Tender Is the Night" 
                  next to see how Fitzgerald's style evolved, or explore "The Sun Also Rises" to compare another major 
                  author's take on similar themes from the same era.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Recommendations;
