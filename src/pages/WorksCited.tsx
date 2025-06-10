
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Book, Globe, Film, LibraryBig, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const WorksCited = () => {
  const { toast } = useToast();
  
  const citations = [
    {
      type: "Book",
      icon: Book,
      entries: [
        {
          citation: "Fitzgerald, F. Scott. The Great Gatsby. Scribner, 1925.",
          link: "https://www.gutenberg.org/ebooks/64317"
        },
        {
          citation: "Bruccoli, Matthew J. Some Sort of Epic Grandeur: The Life of F. Scott Fitzgerald. University of South Carolina Press, 2002.",
          link: "https://www.sc.edu/uscpress/books/2002/3456.html"
        },
        {
          citation: "Tanner, Tony. The American Mystery: American Literature from Emerson to DeLillo. Cambridge University Press, 2000.",
          link: "https://www.cambridge.org/core/books/american-mystery/711D9F6AFA6B6F7327C1E02EC31B65DB"
        },
        {
          citation: "Bloom, Harold. F. Scott Fitzgerald's The Great Gatsby. Chelsea House Publishers, 2006.",
          link: null
        },
        {
          citation: "Berman, Ronald. The Great Gatsby and Modern Times. University of Illinois Press, 1996.",
          link: null
        }
      ]
    },
    {
      type: "Online Sources",
      icon: Globe,
      entries: [
        {
          citation: "The F. Scott Fitzgerald Society. 'Biography.' F. Scott Fitzgerald Society, www.fscottfitzgeraldsociety.org/biography/. Accessed 10 May 2025.",
          link: "https://www.fscottfitzgeraldsociety.org/biography/"
        },
        {
          citation: "SparkNotes Editors. 'The Great Gatsby.' SparkNotes, SparkNotes LLC, 2002, www.sparknotes.com/lit/gatsby/. Accessed 15 May 2025.",
          link: "https://www.sparknotes.com/lit/gatsby/"
        },
        {
          citation: "Poetry Foundation. 'F. Scott Fitzgerald.' Poetry Foundation, www.poetryfoundation.org/poets/f-scott-fitzgerald. Accessed 8 May 2025.",
          link: "https://www.poetryfoundation.org/poets/f-scott-fitzgerald"
        }
      ]
    },
    {
      type: "Media",
      icon: Film,
      entries: [
        {
          citation: "Luhrmann, Baz, director. The Great Gatsby. Warner Bros., 2013.",
          link: "https://www.imdb.com/title/tt1343092/"
        },
        {
          citation: "Clayton, Jack, director. The Great Gatsby. Paramount Pictures, 1974.",
          link: "https://www.imdb.com/title/tt0071577/"
        },
        {
          citation: "American Experience: F. Scott Fitzgerald. PBS, 2005, www.pbs.org/wgbh/americanexperience/films/fitzgerald/. Accessed 12 May 2025.",
          link: "https://www.pbs.org/wgbh/americanexperience/films/fitzgerald/"
        }
      ]
    },
    {
      type: "Images",
      icon: LibraryBig,
      entries: [
        {
          citation: "Portrait of F. Scott Fitzgerald, 1921. Library of Congress, www.loc.gov/item/2004663773/. Accessed 5 May 2025.",
          link: null
        },
        {
          citation: "First edition cover of The Great Gatsby, 1925. Designed by Francis Cugat. Scribner's. Public Domain.",
          link: null
        },
        {
          citation: "Map of Long Island showing West Egg and East Egg locations. Created by author using geographical data from historic maps.",
          link: null
        }
      ]
    }
  ];
  
  const handleCopyAll = () => {
    const allCitations = citations
      .flatMap(category => category.entries.map(entry => entry.citation))
      .join('\n\n');
    
    navigator.clipboard.writeText(allCitations);
    toast({
      title: "Citations copied",
      description: "All citations have been copied to your clipboard."
    });
  };
  
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Art Deco Background Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-32 left-10 w-32 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        <div className="absolute top-52 right-20 w-24 h-1 bg-gradient-to-l from-yellow-400 to-transparent"></div>
        <div className="absolute bottom-40 left-20 w-40 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        <div className="absolute bottom-20 right-10 w-28 h-1 bg-gradient-to-l from-yellow-400 to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display] art-deco-title">
            Works Cited
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            MLA-formatted citations for all sources used in this project
          </p>
        </div>
        
        <div className="flex justify-end mb-6">
          <Button 
            onClick={handleCopyAll} 
            className="bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy All Citations
          </Button>
        </div>
        
        {citations.map((category, idx) => {
          const IconComponent = category.icon;
          return (
            <Card key={idx} className="mb-8 improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
              <CardHeader className="border-b border-yellow-500/30">
                <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                  <IconComponent className="text-yellow-400" />
                  {category.type}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-6">
                  {category.entries.map((entry, entryIdx) => (
                    <li key={entryIdx} className="pl-4 border-l-4 border-yellow-400/50">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <p className="text-gray-200">{entry.citation}</p>
                        {entry.link && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="whitespace-nowrap ml-auto border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/10"
                            onClick={() => window.open(entry.link, '_blank')}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Source
                          </Button>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
        
        <Card className="improved-art-deco-card bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-[Playfair_Display]">Citation Methodology</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-200">
                All sources in this project are cited according to the MLA (Modern Language Association) 9th edition guidelines. 
                The MLA format is widely used in literature and humanities research.
              </p>
              <p className="text-gray-200">
                For books, I've included the author, title, publisher, and publication date. For online sources, I've added 
                the website name, URL, and access date as required by MLA standards.
              </p>
              <p className="text-gray-200">
                Media sources such as films include the director, title, production company, and release year. Image sources 
                include the title, creator (when known), collection, and access information.
              </p>
              <p className="text-gray-200">
                I've made every effort to properly attribute all sources used in the creation of this digital book project.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorksCited;
