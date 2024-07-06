import React, { useEffect, useRef } from 'react';
import "./mindfule.css";
import gsap from 'gsap';
import motiimg from "/assets/motivation.png"
import sixpack from "/assets/sixpack.jpg"


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

  useEffect(() => {

    const mindfuelTimeline = gsap.timeline();

    gsap.fromTo('.h1L1, .h1L2, .h2l1, .h2l2',

      {opacity: 0, y: '15%'},
      {opacity: 1, y: '0', duration: 1, ease: ' .inOut', }

    );

    gsap.fromTo([img1Ref.current, img2Ref.current],

      { opacity: 0, scale: 0.8},
      { opacity: 1, scale: 1, duration: 1, ease: 'sine.inOut', delay: 0.2 }
    
    );

    mindfuelTimeline.fromTo([tagline1Ref.current.children, tagline2Ref.current.children],

      {opacity: 0, y: '100%'},
      {opacity: 1, y: '0', duration: .8, stagger: 0.05, ease: 'sine.in'}
    
    );

    mindfuelTimeline.fromTo('Mdchild-content',

      {opacity: 0, scale: 0.9},
      {opacity: 1, scale: 1}

    );

  }, []);
  return (
    <div className='MindFule-Container'>
      <div className="Mindfule-2child">
      <div className="Mindfule-Heading">
        <div className="main-heading">
          <h2><span style={{color:'#E85252'}}>HRX</span> Mind Fuel</h2>
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
            
            <div className="Mdchild-heading">
              <div className='h1L2'>Challange Your</div> 
              <div className='h1L2'>Limits</div>
            </div>
            <div className="Mdchild-tagline"ref={tagline1Ref} >
            {splitTextToSpans("Be a part of the tribe that’s limitless.")}
            </div>
            <div className="Mdchild-content ">
              Are you looking for some exciting challenges? Then you have it all with Hrx workout sessions that are specially designed with out trainers to kickstart your fitness journey. Then why limit yourselves when having your fitness convenience in your own hands with Hrx.
            </div>
          </div>
          <div className="MD-image-sec">
            <img src={motiimg} alt="" ref={img1Ref}/>
          </div>
        </div>

        <div className="Mdchild-2 mchd">
          <div className="MD-image-sec">
            <img src={sixpack} alt=""  ref={img2Ref}/>
          </div>
          <div className="MD-text-sec">
            <div className="Mdchild-heading">
              Level Up Your Finess Experienc
            </div>
            <div className="Mdchild-tagline" ref={tagline2Ref}>
            {splitTextToSpans("CONTENT TO ENERGIZE YOUR BODY AND MIND")}
            </div>
            <div className="Mdchild-content">
              Discover the latest content from Team HRX that will help you make your fitness journey exciting and engaging. Tune into content pieces like podcasts, Workout Videos and HRX Blogs to level up your knowledge and keep you in the zone
            </div>
          </div>
          
        </div>


      </div>
      </div>

    </div>
  )
}

export default MindFule