/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'

import CategoyCarnival from './CategoyCarnival'
import Latestjobs from './Latestjobs'
import Footer from './Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate,  } from 'react-router-dom'

function Home() {
  useGetAllJobs();
  const {user } = useSelector (store => store.auth)
  const navigate = useNavigate();
  useEffect (() => {
    if(user?. role === 'recruiter'){
      navigate('/admin/companies')
      
    }
  },[])
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
