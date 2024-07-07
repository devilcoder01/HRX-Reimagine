import React, { useEffect, useRef,useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './mainheropage.css'; // Assuming you have a CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import ReactCurvedText from 'react-curved-text';


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const MainHeroPage = () => {

  const textRef = useRef(null);

  // useEffect(() => {
  //   const text = textRef.current;
  //   text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
  //   const ele = text.querySelectorAll('span');
  //   for (let i = 1; i < ele.length; i++) {
  //     ele[i].style.transform = `rotate(${i * 15.4}deg)`;
  //   }
  // }, []);

  const circletext = (
    <ReactCurvedText width={200}
  height={200}
  cx={100}
  cy={100}
  rx='65'
  ry='65'
  startOffset='0'
  reversed={false}
  text='Join now - Join now - Join now - Join now - Join now - join now - '
  textProps={{"style": {"fontSize": "15"}}}
  textPathProps={null}
  tspanProps={null}
  ellipseProps={null}
  svgProps={{"className": "rotating-curved-text"}} />
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
          {/* <div className="circles" id="circle1"></div>
          <div className="circles" id="circle2"></div> */}
          <div id="content-holder" >
            <div id="span1">
              <h1>Only Yoy Can Define</h1>
            </div>
            <div id="span2">
              <h1>Your Goal</h1>
            </div>
            <button>Join Now</button>
            <div id="circle_div">
              {/* <h3 id="rotate-txt" ref={textRef}> Join Now - Join Now - Join Now - </h3> */}
              <div className="roteatetext">
                {circletext}
              </div>
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
