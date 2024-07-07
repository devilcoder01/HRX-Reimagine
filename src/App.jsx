import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Marque from './components/Marque';
import TransformationTab from './components/hritiktranfomation';
import LocomotiveScroll from 'locomotive-scroll';
import MindFule from './components/mindfule';
import Pfooter from './components/footer';
import MainHeroPage from './components/mainheropage';
import Login from './components/login';
import CustomCursor from './components/customcursor';
import Collection from './components/collections';
import Community from './components/community';
import Loader from './components/loader';

export default function App() {
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!loading && scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <div className="main" data-scroll-container ref={scrollRef}>
          <CustomCursor />
          <Navbar />
          <MainHeroPage />
          <Login />
          <Collection />
          <Community />
          <Marque />
          <MindFule />
          <TransformationTab />
          <Pfooter />
        </div>
      )}
    </>
  );
}
