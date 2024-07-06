import React, { useRef, useEffect } from 'react';
import './hritiktranfomation.css';
import video from "/trans.mp4"

const TransformationTab = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const stepRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.filter = 'blur(60px)'; // Adjust the blur amount as needed

    const resizeCanvas = () => {
      canvas.width = video.clientWidth;
      canvas.height = video.clientHeight;
    };

    const draw = () => {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    };

    const drawLoop = () => {
      draw();
      stepRef.current = window.requestAnimationFrame(drawLoop);
    };

    const drawPause = () => {
      window.cancelAnimationFrame(stepRef.current);
      stepRef.current = undefined;
    };

    const init = () => {
      video.addEventListener('loadeddata', draw);
      video.addEventListener('seeked', draw);
      video.addEventListener('play', drawLoop);
      video.addEventListener('pause', drawPause);
      video.addEventListener('ended', drawPause);
    };

    const cleanup = () => {
      video.removeEventListener('loadeddata', draw);
      video.removeEventListener('seeked', draw);
      video.removeEventListener('play', drawLoop);
      video.removeEventListener('pause', drawPause);
      video.removeEventListener('ended', drawPause);
    };

    // Initialize video and canvas drawing
    video.addEventListener('loadedmetadata', resizeCanvas);
    resizeCanvas();

    // Add event listeners based on preferred motion settings
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      init();
      window.addEventListener('unload', cleanup);
    }

    // Cleanup on component unmount
    return () => {
      cleanup();
      window.removeEventListener('unload', cleanup);
    };
  }, []);

  return (
    <div className="HRXB-section">
      <div className="Hsmbsec">

      
      <div className="HRXB-text-section">
        <div className="HRBX-head-sub">
          <h2>HRX Transformation to Kabir and Beyond</h2>
        </div>
        <div className="HRBX-text-area">
          The journey is often more memorable than the destination.
          No matter what you do, #TurnItUp and don't forget to thrive while you survive.
          You've seen a glimpse, now here's the real deal.
        </div>
      </div>
      <div className="HRXB-video">
        <video
          controls
          muted
          autoPlay
          loop
          className="plvideo"
          ref={videoRef}
          src={video}
        />
        <div className="ambientlight">
          <canvas
            aria-hidden="true"
            className="canvas"
            ref={canvasRef}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationTab;
