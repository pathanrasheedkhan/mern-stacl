/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'

import CategoyCarnival from './CategoyCarnival'
import Latestjobs from './Latestjobs'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoyCarnival/>
      <Latestjobs/>
      <Footer/>
      
    </div>
  )
}

export default Home
