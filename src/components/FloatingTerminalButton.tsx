
import React, { useState } from 'react';
import { Terminal, X, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export const FloatingTerminalButton = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const documents = [
    {
      name: "financial_projections.pdf",
      size: "2.4 MB",
      classification: "TOP SECRET",
      url: "https://drive.google.com/file/d/1zAPhypxi2T_1TPlIFsysejBpITAIWheO/view?usp=sharing"
    },
    {
      name: "market_intelligence.pdf", 
      size: "1.8 MB",
      classification: "CLASSIFIED",
      url: "https://drive.google.com/file/d/1PUOVE2Of93f-G30aB1-vm46bCqZqa7aJ/view?usp=sharing"
    },
    {
      name: "executive_summary.pdf",
      size: "956 KB", 
      classification: "CONFIDENTIAL",
      url: "https://drive.google.com/file/d/1To4hYj99AFg9zV_FBBoja7ORL_PF3P_g/view?usp=sharing"
    },
    {
      name: "technical_specs.pdf",
      size: "3.2 MB",
      classification: "SECRET",
      url: "https://drive.google.com/file/d/1xtAY2pmD3yD0bKgn4L-zSfjzmUJjnMI8/view?usp=sharing"
    }
  ];

  const playTerminalSound = () => {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    const audioContext = new AudioContextClass();
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const typeMessage = async (message: string) => {
    setIsTyping(true);
    for (let i = 0; i <= message.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 30));
      setTerminalLines(prev => {
        const newLines = [...prev];
        newLines[newLines.length - 1] = `> ${message.substring(0, i)}`;
        return newLines;
      });
    }
    setIsTyping(false);
  };

  const handleTerminalOpen = async (open: boolean) => {
    if (open) {
      playTerminalSound();
      setIsTerminalOpen(true);
      setTerminalLines(["> ACCESSING CLASSIFIED DOSSIER..."]);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      await typeMessage("SECURITY CLEARANCE VERIFIED");
      
      setTerminalLines(prev => [...prev, "> LOADING DOCUMENT INDEX..."]);
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setTerminalLines(prev => [...prev, "> DOCUMENTS AVAILABLE FOR DOWNLOAD:"]);
    } else {
      setIsTerminalOpen(false);
      setTerminalLines([]);
    }
  };

  const handleDownload = (doc: any) => {
    playTerminalSound();
    const newLine = `> DOWNLOADING ${doc.name.toUpperCase()}... SUCCESS`;
    setTerminalLines(prev => [...prev, newLine]);
    
    setTimeout(() => {
      window.open(doc.url, '_blank');
    }, 500);
  };

  return (
    <>
      <Dialog open={isTerminalOpen} onOpenChange={handleTerminalOpen}>
        <DialogTrigger asChild>
          <button className="fixed bottom-8 right-8 z-50 bg-black border-2 border-green-400 text-green-400 p-4 rounded-lg shadow-2xl hover:bg-green-400/10 transition-all duration-300 group animate-pulse">
            <div className="flex items-center space-x-2">
              <Terminal className="h-6 w-6 group-hover:animate-spin" />
              <span className="font-mono font-bold hidden md:block">ACCESS DOSSIER</span>
            </div>
          </button>
        </DialogTrigger>
        
        <DialogContent className="max-w-4xl bg-black border-2 border-green-400 text-green-400 p-0">
          <div className="bg-black text-green-400 font-mono">
            {/* Terminal Header */}
            <div className="flex items-center justify-between bg-green-400/10 px-4 py-2 border-b border-green-400">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-bold">CLASSIFIED TERMINAL v2.1.0</span>
              </div>
              <button 
                onClick={() => setIsTerminalOpen(false)}
                className="hover:bg-red-500/20 p-1 rounded"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Terminal Content */}
            <div className="p-6 min-h-[400px]">
              {/* Command Log */}
              <div className="mb-6">
                {terminalLines.map((line, index) => (
                  <div key={index} className="mb-1 text-sm">
                    {line}
                    {index === terminalLines.length - 1 && isTyping && (
                      <span className="animate-pulse bg-green-400 w-2 h-4 inline-block ml-1"></span>
                    )}
                  </div>
                ))}
              </div>

              {/* Document Grid */}
              {terminalLines.length > 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="border border-green-400/50 bg-green-400/5 p-4 hover:bg-green-400/10 transition-colors cursor-pointer"
                      onClick={() => handleDownload(doc)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span className="text-sm font-bold">{doc.name}</span>
                        </div>
                        <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/50">
                          {doc.classification}
                        </span>
                      </div>
                      <div className="text-xs text-green-400/70">
                        Size: {doc.size} | Format: PDF | Access: GRANTED
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Terminal Footer */}
            <div className="border-t border-green-400 px-4 py-2 bg-green-400/5 text-xs">
              ASRSH SECURE TERMINAL • ENCRYPTED CONNECTION • TOP SECRET CLEARANCE
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
