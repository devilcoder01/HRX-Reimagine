import React, { useEffect, useRef,useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './mainheropage.css'; // Assuming you have a CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import ReactCurvedText from "react-curved-text";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const MainHeroPage = () => {

  const [dimensions, setDimensions] = useState({ rx: 65, ry: 65 });

  useEffect(() => {
    const updateDimensions = () => {
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );

      // Calculate rx and ry based on viewport size
      // For example, let's say we want rx to be 5vw and ry to be 5vh
      const newRx = vw * 0.04;
      const newRy = vw * 0.04;

      setDimensions({ rx: newRx, ry: newRy });
    };

    // Call it once to set initial dimensions
    updateDimensions();

    // Add event listener for window resize
    window.addEventListener("resize", updateDimensions);

    // Clean up
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const circletext = (
    <ReactCurvedText
      width={300}
      height={300}
      cx={150}
      cy={150}
      rx={dimensions.rx}
      ry={dimensions.ry}
      startOffset="0"
      reversed={false}
      text="Join now - Join now - Join now - Join now - Join now - Join now "
      textProps={{ style: { fontSize: "calc(1vh + 0.5vw)" } }}
      textPathProps={{"fill": "#dadada"}}
      tspanProps={null}
      ellipseProps={null}
      svgProps={{ className: "rotating-curved-text" }}
    />
  );

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#left_cut", {
      y: "-10%",
      x: "5%",
      duration: 2,
      opacity: 0,
      ease: "back.inOut(1.7)",
    });

    tl.from("#right_cut", {
      y: "10%",
      x: "-5%",
      duration: 2,
      opacity: 0,
      ease: "back.inOut(1.7)",
    }, "<"); // Start at the same time as the previous animation

    tl.from('#span1, #span2, #content-holder button', {
      duration: 0.8,
      y: "100%",
      opacity: 0,
      stagger: .2,
      ease: "easeInOut"
    });

    tl.from('#stat1, #stat2, #stat3', {
      duration: .8,
      x: "100%",
      stagger: .2,
      opacity: 0,
      ease: "easeIn",
    });

    
  }, []);

    
  return (
    <div id="heropage" >
      <div id="landing">
        <div id="left_cut" className='poligon-shap' >
          <div className="circles" id="circle1"></div>
          <div className="circles" id="circle2"></div>
          <div id="content-holder" >
            <div id="span1">
              <h1>Only You Can Define</h1>
            </div>
            <div id="span2">
              <h1>Your Goal</h1>
            </div>
            <button>Join Now</button>
            <div id="circle_div">
              <div className="roteatetext">{circletext}</div>
              <div id="inner-circle">
                <FontAwesomeIcon icon={faArrowDownLong} size='2x' color='#dadada' flip="vertical"   />
              </div>
            </div>
          </div>
        </div>
        <div id="right_cut" className='poligon-shap' >
        <div className="rboxcon">
            <div id="stats">
              <div id="stat1">
                <div className="number">1000+</div>
                <div className="about">Community Member</div>
              </div>
              <div id="stat2">
                <div className="number">40+</div>
                <div className="about">Fitness Program</div>
              </div>
              <div id="stat3">
                <div className="number">150+</div>
                <div className="about">Fitness Channel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeroPage;
