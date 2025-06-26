
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export const NewspaperFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const documents = [
    {
      title: "Financial Force Projections",
      url: "https://drive.google.com/file/d/1zAPhypxi2T_1TPlIFsysejBpITAIWheO/view?usp=sharing"
    },
    {
      title: "Market Intelligence Analysis", 
      url: "https://drive.google.com/file/d/1PUOVE2Of93f-G30aB1-vm46bCqZqa7aJ/view?usp=sharing"
    },
    {
      title: "Strategic Executive Summary",
      url: "https://drive.google.com/file/d/1To4hYj99AFg9zV_FBBoja7ORL_PF3P_g/view?usp=sharing"
    },
    {
      title: "Technical Deployment Specifications",
      url: "https://drive.google.com/file/d/1xtAY2pmD3yD0bKgn4L-zSfjzmUJjnMI8/view?usp=sharing"
    }
  ];

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
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button className="hover-underline font-bold">
                Download This Issue
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-baskerville text-xl flex items-center space-x-2">
                  <img 
                    src="/lovable-uploads/0c0b18c2-0c24-4523-a25c-4ad14c0708a2.png" 
                    alt="ASRSH Logo" 
                    className="h-6 w-6"
                  />
                  <span>Download Documents</span>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-newsprint-300 rounded">
                    <span className="font-merriweather text-sm">{doc.title}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(doc.url, '_blank')}
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
          <p className="text-xs mt-1">{new Date().toLocaleDateString('en-IN')}</p>
        </div>
      </div>
    </footer>
  );
};
