import React, { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    let playButton = null;

    const handleMouseMove = (e) => {
      document.body.style.cursor = 'none';
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, {
        duration: 963,
        fill: "forwards"
      });
      // Detect if cursor is over a video
  const elementUnderCursor = document.elementFromPoint(posX, posY);
  if (elementUnderCursor && elementUnderCursor.tagName.toLowerCase() === 'video') {
    cursorDot.style.opacity = '0';  // Make the dot invisible
    cursorOutline.classList.add('play-button');
    
    // Add the play button div if it doesn't exist
    if (!playButton) {
      playButton = document.createElement('div');
      playButton.id = 'play-button';
      document.body.appendChild(playButton);
      
    }

    // Position the play button div at the cursor
    playButton.style.left = `${posX}px`;
    playButton.style.top = `${posY}px`;
    playButton.style.position = 'fixed';
    playButton.style.zIndex = '9999';
    playButton.style.pointerEvents = 'none';
    playButton.style.width = '0.6vw';
    playButton.style.height = '0.6vw';
    playButton.style.clipPath = 'polygon(20% 0%, 100% 50%, 20% 100%)';
    playButton.style.backgroundColor = 'white';
    playButton.style.transform = 'translate(-50%, -50%)';
  } else {
    cursorDot.style.opacity = '1';  // Make the dot visible
    cursorOutline.classList.remove('play-button');

    // Remove the play button div if it exists
    if (playButton) {
      document.body.removeChild(playButton);
      playButton = null;
    }
  }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="cursor-container">
      <div id="cursor-dot" data-cursor-dot></div>
      <div id="cursor-outline" data-cursor-outline></div>
    </div>
  );
};

export default CustomCursor;
