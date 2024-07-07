import React, { useEffect, useRef } from 'react';
import "./mindfule.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import motiimg from "/assets/motivation.png";
import sixpack from "/assets/sixpack.jpg";

gsap.registerPlugin(ScrollTrigger);

const splitTextToSpans = (text) => {
  return text.split('').map((char, index) => (
    <span key={index} className="tagline_span">{char}</span>
  ));
};

function MindFule() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const tagline1Ref = useRef(null);
  const tagline2Ref = useRef(null);
  const headingRefs = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    headingRefs.current.forEach((heading, index) => {
      gsap.fromTo(heading, {
        opacity: 0, y: '15%'
      }, {
        opacity: 1, y: '0', duration: 1, ease: 'power1.inOut',
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%',
        }
      });
    });

    [img1Ref.current, img2Ref.current].forEach((img, index) => {
      gsap.fromTo(img, {
        opacity: 0, scale: 0.8
      }, {
        opacity: 1, scale: 1, duration: 1, ease: 'sine.inOut', delay: 0.2,
        scrollTrigger: {
          trigger: img,
          start: 'top 80%',
        }
      });
    });

    [tagline1Ref.current, tagline2Ref.current].forEach((tagline, index) => {
      gsap.fromTo(tagline.children, {
        opacity: 0, y: '100%'
      }, {
        opacity: 1, y: '0', duration: 0.8, stagger: 0.05, ease: 'sine.in',
        scrollTrigger: {
          trigger: tagline,
          start: 'top 80%',
        }
      });
    });

    contentRefs.current.forEach((content, index) => {
      gsap.fromTo(content, {
        opacity: 0, scale: 0.9
      }, {
        opacity: 1, scale: 1,
        scrollTrigger: {
          trigger: content,
          start: 'top 80%',
        }
      });
    });

  }, []);

  return (
    <div className='MindFule-Container'>
      <div className="Mindfule-2child">
        <div className="Mindfule-Heading">
          <div className="main-heading">
            <h2><span style={{color:'#E85252'}}>HRX</span> Mind Fule</h2>
          </div>
          <div className="resource-sec">
            <button>Xpod</button>
            <button>Workout</button>
            <button>Blog</button>
          </div>
        </div>

        {/* Body Content */}
        <div className='Mindfule-Body'>
          <div className="Mdchild-1 mchd">
            <div className="MD-text-sec">
              <div className="Mdchild-heading" ref={el => headingRefs.current[0] = el}>
                <div className='h1L2'>Challenge Your</div> 
                <div className='h1L2'>Limits</div>
              </div>
              <div className="Mdchild-tagline" ref={tagline1Ref}>
                {splitTextToSpans("Be a part of the tribe that’s limitless.")}
              </div>
              <div className="Mdchild-content" ref={el => contentRefs.current[0] = el}>
                Are you looking for some exciting challenges? Then you have it all with Hrx workout sessions that are specially designed with out trainers to kickstart your fitness journey. Then why limit yourselves when having your fitness convenience in your own hands with Hrx.
              </div>
            </div>
            <div className="MD-image-sec">
              <img src={motiimg} alt="" ref={img1Ref} />
            </div>
          </div>

          <div className="Mdchild-2 mchd">
            <div className="MD-image-sec">
              <img src={sixpack} alt="" ref={img2Ref} />
            </div>
            <div className="MD-text-sec">
              <div className="Mdchild-heading" ref={el => headingRefs.current[1] = el}>
                Level Up Your Fitness Experience
              </div>
              <div className="Mdchild-tagline" ref={tagline2Ref}>
                {splitTextToSpans("Content to energize your body and mind.")}
              </div>
              <div className="Mdchild-content" ref={el => contentRefs.current[1] = el}>
                Discover the latest content from Team HRX that will help you make your fitness journey exciting and engaging. Tune into content pieces like podcasts, Workout Videos and HRX Blogs to level up your knowledge and keep you in the zone.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MindFule;