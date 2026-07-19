import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'

import CharacterShowcase from '../Components/CharacterShowcase'

import WallpaperGallery from '../Components/WallpaperGallery'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <CharacterShowcase/>
        <WallpaperGallery/>
        
    </div>
  )
}

export default Home