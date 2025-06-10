
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Heart, ThumbsUp, ThumbsDown, Lightbulb, Dices, School, Target } from "lucide-react";
import { useState } from "react";

const Reflections = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'academic'>('personal');
  
  const readingStyles = [
    {
      title: "Deep Reader",
      icon: Lightbulb,
      description: "I enjoy analyzing symbols, themes, and character motivations. When reading 'The Great Gatsby,' I found myself highlighting passages and making notes about recurring symbols like the green light and the eyes of Dr. T.J. Eckleburg.",
      strength: true
    },
    {
      title: "Context Explorer",
      icon: School,
      description: "I like to research the historical and cultural context of what I'm reading. Understanding the Jazz Age, Prohibition, and the post-WWI American society greatly enhanced my appreciation of Fitzgerald's novel.",
      strength: true
    },
    {
      title: "Emotional Connector",
      icon: Heart,
      description: "I form strong emotional connections with characters and situations. Gatsby's hope and ultimate tragedy deeply moved me, and I found myself genuinely caring about his fate.",
      strength: true
    },
    {
      title: "Speed Reader",
      icon: ThumbsDown,
      description: "I sometimes read too quickly and miss important details or nuances. With 'The Great Gatsby,' I had to deliberately slow down my pace to fully appreciate Fitzgerald's beautiful prose.",
      strength: false
    },
    {
      title: "Inconsistent Scheduler",
      icon: ThumbsDown,
      description: "I struggle with maintaining a regular reading schedule and sometimes go days without picking up a book, which can disrupt the flow of the narrative and my connection to the story.",
      strength: false
    }
  ];
  
  const readingGoals = [
    {
      goal: "Read More Classic Literature",
      description: "After enjoying 'The Great Gatsby,' I want to explore more classic American literature from authors like Ernest Hemingway, William Faulkner, and Edith Wharton.",
      progress: 25
    },
    {
      goal: "Improve Critical Analysis Skills",
      description: "I want to get better at identifying literary devices, themes, and symbolism in the books I read. I plan to take notes and write brief analyses of key passages.",
      progress: 60
    },
    {
      goal: "Establish a Regular Reading Routine",
      description: "I aim to read for at least 30 minutes every day before bed instead of using my phone, creating a more consistent reading habit.",
      progress: 40
    },
    {
      goal: "Join a Book Club",
      description: "I want to connect with other readers to discuss books and gain different perspectives. Sharing thoughts on literature enhances my understanding and enjoyment.",
      progress: 10
    }
  ];
  
  const academicInsights = [
    {
      title: "Narrative Structure Analysis",
      content: "Fitzgerald's use of Nick Carraway as a first-person peripheral narrator creates both intimacy and distance. Nick is reliable enough to trust but unreliable enough to question, creating a fascinating narrative tension."
    },
    {
      title: "Social Class Commentary",
      content: "The geographic separation of East Egg (old money) and West Egg (new money) physically embodies the novel's exploration of class barriers. Gatsby's mansion symbolizes new wealth's attempt to mimic old wealth's prestige."
    },
    {
      title: "Historical Context",
      content: "The novel serves as a critique of the materialistic excesses of the Roaring Twenties. Published in 1925, it foreshadows the economic collapse of 1929 and serves as a warning about the hollow nature of wealth-driven happiness."
    },
    {
      title: "Literary Modernism",
      content: "The Great Gatsby exemplifies literary modernism through its fragmented chronology, psychological depth, and disillusionment with traditional values. Fitzgerald uses techniques like symbolic imagery and stream of consciousness."
    },
    {
      title: "Symbolic Color Patterns",
      content: "Fitzgerald employs a deliberate color scheme throughout the novel: green (hope, future), white (false purity, emptiness), yellow/gold (wealth, corruption), and gray (moral decay, disillusionment)."
    }
  ];
  
  const personalReflections = [
    {
      question: "What character did you relate to most and why?",
      answer: "I found myself relating most to Nick Carraway. Like him, I often feel like an observer in social situations, watching and analyzing rather than being at the center of attention. I also appreciated his struggle between being drawn to the excitement of Gatsby's world while maintaining some moral perspective."
    },
    {
      question: "How did the ending affect you emotionally?",
      answer: "The ending left me with a profound sense of melancholy. Gatsby's death felt deeply unfair - he died still believing in his dream while the truly careless people (Tom and Daisy) simply moved on with their privileged lives. The image of his empty funeral contrasted with his crowded parties was particularly haunting."
    },
    {
      question: "Did the book change your perspective on anything?",
      answer: "It changed my perspective on the American Dream. I used to see it as purely positive - work hard and you'll succeed. But Gatsby worked incredibly hard and built a fortune, yet still couldn't achieve his true dream. It made me think about how social barriers persist despite wealth, and how focusing too much on material success can become empty."
    },
    {
      question: "What scene or passage will stay with you the longest?",
      answer: "The scene where Gatsby shows Daisy his collection of shirts, and she breaks down crying. It's such a small moment but loaded with meaning - her realization of what she gave up, his desperate attempt to impress her with material things, the gulf between their understandings of what matters in life."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-[Playfair_Display]">
            Reading Reflections
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            My thoughts, analysis, and personal growth through reading "The Great Gatsby"
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <BookOpen className="text-yellow-400" />
                What Kind of Reader Am I?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 leading-relaxed mb-6">
                Understanding my reading style has helped me become more self-aware about how I approach literature.
                My reading identity continues to evolve as I explore different genres and develop new skills.
                Here are my current reading strengths and areas for improvement:
              </p>
              
              <div className="space-y-6">
                {readingStyles.map((style, index) => (
                  <div key={index} className={`border-l-4 ${style.strength ? 'border-green-500' : 'border-red-500'} pl-4`}>
                    <div className="flex items-center gap-2 mb-1">
                      <style.icon 
                        className={style.strength ? 'text-green-400' : 'text-red-400'} 
                        size={18} 
                      />
                      <h4 className={`font-semibold ${style.strength ? 'text-green-300' : 'text-red-300'}`}>{style.title}</h4>
                      {style.strength ? 
                        <span className="bg-green-500/30 text-green-200 text-xs px-2 py-0.5 rounded">Strength</span> : 
                        <span className="bg-red-500/30 text-red-200 text-xs px-2 py-0.5 rounded">Growth Area</span>
                      }
                    </div>
                    <p className="text-gray-200 text-sm">{style.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
                <Target className="text-yellow-400" />
                My Reading Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {readingGoals.map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-yellow-300">{goal.goal}</h4>
                    <p className="text-gray-200 text-sm">{goal.description}</p>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-yellow-400 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-yellow-200 text-right">{goal.progress}% progress</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <div className="border-b border-yellow-500/30 mb-6">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('personal')}
                className={`py-2 relative ${
                  activeTab === 'personal'
                    ? 'text-yellow-400 font-semibold'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Personal Reflections
                {activeTab === 'personal' && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded-t-md"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('academic')}
                className={`py-2 relative ${
                  activeTab === 'academic'
                    ? 'text-yellow-400 font-semibold'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Academic Insights
                {activeTab === 'academic' && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded-t-md"></span>
                )}
              </button>
            </div>
          </div>
          
          {activeTab === 'personal' && (
            <div className="space-y-6">
              {personalReflections.map((reflection, index) => (
                <Card key={index} className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm hover-lift">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-yellow-300 font-[Playfair_Display]">{reflection.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200">{reflection.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          {activeTab === 'academic' && (
            <div className="space-y-6">
              {academicInsights.map((insight, index) => (
                <Card key={index} className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm hover-lift">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-yellow-300 font-[Playfair_Display]">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        {insight.title}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200">{insight.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        <Card className="bg-gray-900/90 border-yellow-500/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400 font-[Playfair_Display]">
              <Heart className="text-yellow-400" />
              Why Literature Matters to Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-200 leading-relaxed">
                Reading "The Great Gatsby" reaffirmed my belief in the power of literature to transport us across time and space. 
                Through Fitzgerald's words, I was able to experience the glittering excitement and underlying emptiness of 
                1920s America as if I were there alongside Nick Carraway.
              </p>
              
              <p className="text-gray-200 leading-relaxed">
                What I value most about reading is how it develops empathy by allowing us to see the world through different eyes. 
                Even though Gatsby lived in a different era and circumstances vastly different from my own, I could understand 
                his longing, his hope, and ultimately his tragedy.
              </p>
              
              <p className="text-gray-200 leading-relaxed">
                Literature also provides a framework for understanding our own lives. The themes in Gatsby - dreams versus reality, 
                appearance versus authenticity, the past versus the present - are universal human experiences that help me 
                make sense of my own choices and values.
              </p>
              
              <div className="bg-yellow-500/20 p-4 rounded-lg border-l-4 border-yellow-400 mt-4">
                <p className="text-yellow-200 italic">
                  "That is part of the beauty of all literature. You discover that your longings are universal longings, that 
                  you're not lonely and isolated from anyone. You belong." — F. Scott Fitzgerald
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reflections;
