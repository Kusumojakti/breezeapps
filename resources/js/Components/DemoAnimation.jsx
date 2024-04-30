import React, { useState, useEffect } from 'react';

function DemoAnimation() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "DEMO ☠️";

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(prev => {
        if (prev.length < fullText.length) {
          // Add next character to the displayed text
          return fullText.substr(0, prev.length + 1);
        } else {
          // Reset to start the text display again
          return '';
        }
      });
    }, 500); // Controls the speed of the text animation

    return () => clearInterval(interval);  // Cleanup function to clear the interval when the component unmounts
  }, []);  // Empty dependency array ensures this runs once on mount

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900 text-white text-6xl font-bold" id="demo">
      {displayedText}
    </div>
  );
}

export default DemoAnimation;
