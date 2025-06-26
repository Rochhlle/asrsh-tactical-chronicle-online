
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Download } from 'lucide-react';

export const NewspaperFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const documents = [
    {
      title: "Financial Force Projections",
      url: "https://drive.google.com/file/d/1zAPhypxi2T_1TPlIFsysejBpITAIWheO/view?usp=sharing",
      description: "Strategic financial analysis and defense budget allocations"
    },
    {
      title: "Market Intelligence Analysis", 
      url: "https://drive.google.com/file/d/1PUOVE2Of93f-G30aB1-vm46bCqZqa7aJ/view?usp=sharing",
      description: "Comprehensive market research and competitive intelligence"
    },
    {
      title: "Strategic Executive Summary",
      url: "https://drive.google.com/file/d/1To4hYj99AFg9zV_FBBoja7ORL_PF3P_g/view?usp=sharing",
      description: "High-level strategic overview and executive briefing"
    },
    {
      title: "Technical Deployment Specifications",
      url: "https://drive.google.com/file/d/1xtAY2pmD3yD0bKgn4L-zSfjzmUJjnMI8/view?usp=sharing",
      description: "Detailed technical specifications and deployment protocols"
    }
  ];

  const playPageTurnSound = () => {
    // Create audio context for sound effects
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Paper swipe sound
    const createPaperSwipe = () => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.3);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    };

    // Soft beep sound
    const createSoftBeep = () => {
      setTimeout(() => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
      }, 200);
    };

    createPaperSwipe();
    createSoftBeep();
  };

  const handleDialogOpen = (open: boolean) => {
    if (open) {
      playPageTurnSound();
    }
    setIsOpen(open);
  };

  const handleDocumentClick = (url: string) => {
    playPageTurnSound();
    setTimeout(() => {
      window.open(url, '_blank');
    }, 300);
  };

  return (
    <footer className="border-t-2 border-newsprint-400 pt-6 mt-8">
      <div className="flex justify-between items-center text-sm font-merriweather text-newsprint-600">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/0c0b18c2-0c24-4523-a25c-4ad14c0708a2.png" 
            alt="ASRSH Logo" 
            className="h-8 w-8 opacity-70"
          />
          <p>Page 1</p>
        </div>
        
        <div className="text-center flex items-center space-x-2">
          <img 
            src="/lovable-uploads/0c0b18c2-0c24-4523-a25c-4ad14c0708a2.png" 
            alt="ASRSH Logo" 
            className="h-6 w-6 opacity-60"
          />
          <p className="font-bold">ASRSH THE FUTURE</p>
        </div>
        
        <div className="text-right">
          <Dialog open={isOpen} onOpenChange={handleDialogOpen}>
            <DialogTrigger asChild>
              <button className="hover-underline font-bold flex items-center space-x-2 group">
                <Download className="h-4 w-4 group-hover:animate-bounce" />
                <span>Download This Issue</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl page-turn-dialog">
              <DialogHeader>
                <DialogTitle className="font-baskerville text-2xl flex items-center space-x-3 text-navy-900">
                  <img 
                    src="/lovable-uploads/0c0b18c2-0c24-4523-a25c-4ad14c0708a2.png" 
                    alt="ASRSH Logo" 
                    className="h-8 w-8"
                  />
                  <span>CLASSIFIED DOCUMENTS</span>
                  <div className="ml-auto text-sm font-merriweather text-newsprint-600">
                    
                  </div>
                </DialogTitle>
              </DialogHeader>
              
              <div className="newspaper-dateline mb-4 text-center border-b border-newsprint-300 pb-2">
                • ACCESS GRANTED
              </div>
              
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <div 
                    key={index} 
                    className="document-card group border-2 border-newsprint-300 rounded-none bg-newsprint-50 hover:bg-white transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <FileText className="h-5 w-5 text-navy-700" />
                            <h3 className="font-baskerville font-bold text-lg text-navy-900 group-hover:text-navy-700 transition-colors">
                              {doc.title}
                            </h3>
                          </div>
                          <p className="font-merriweather text-sm text-newsprint-700 leading-relaxed">
                            {doc.description}
                          </p>
                          <div className="mt-3 text-xs font-merriweather text-newsprint-500 uppercase tracking-wide">
                            Classification • Dept: Defense Intelligence
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDocumentClick(doc.url)}
                          className="ml-4 flex items-center gap-2 font-merriweather bg-navy-900 text-white hover:bg-navy-700 border-navy-900 hover:border-navy-700"
                        >
                          <ExternalLink className="h-4 w-4" />
                          ACCESS
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-navy-900 text-white rounded-none">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/0c0b18c2-0c24-4523-a25c-4ad14c0708a2.png" 
                    alt="ASRSH Logo" 
                    className="h-6 w-6 opacity-90"
                  />
                  <div>
                    <p className="font-baskerville font-bold text-sm">
                      ASRSH DEFENSE INTELLIGENCE BUREAU
                    </p>
                    <p className="font-merriweather text-xs opacity-90">
                      "Sovereignty Through Superior Intelligence" • planning 2025
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <p className="text-xs mt-1">{new Date().toLocaleDateString('en-IN')}</p>
        </div>
      </div>
    </footer>
  );
};
