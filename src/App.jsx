import React from 'react'
import Navbar from './components/Navbar'
import Marque from './components/Marque'
import TransformationTab from './components/hritiktranfomation'
import LocomotiveScroll from 'locomotive-scroll';
import MindFule from './components/mindfule';
import Pfooter from './components/footer'
import MainHeroPage from './components/mainheropage'
import CustomCursor from './components/customcursor'
import Collection from './components/collections'
import Community from './components/community'

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="main">
        <CustomCursor/>
        <Navbar/>
        <MainHeroPage/>
        <Collection/>
        <Community />
        <Marque />
        <MindFule />
        <TransformationTab/>
        <Pfooter/>
    </div>
    
    </>
  )
}

