
import React from 'react'
import Home from './pages/Home'
import CharacterShowcase from './Components/CharacterShowcase'
import { Route,Routes } from 'react-router-dom'
import StoryTimeline from './Components/StoryTimeline'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import WallpaperGallery from './Components/WallpaperGallery'
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import PageLoader from './Components/PageLoader'
import CustomCursor from './Components/CustomCursor'
import ContactSection from './Components/ContactSection'
function App() {
  const [loading ,setLoading]= useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },3500);
    return ()=>clearTimeout(timer);
  },[]);

  if(loading){
    return<Loader/>;
  }
  return (
   
    
   <>
   <CustomCursor/>
   <Navbar/>
   <PageLoader>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterShowcase />} />\
        <Route path='/story' element={<StoryTimeline/>}/>
        <Route path='/gallery' element={<WallpaperGallery/>}/>
        <Route path='/contact' element={<ContactSection/>}/>
      </Routes>
      </PageLoader>
      <Footer/>
   
   </>
    
  )
}


export default App