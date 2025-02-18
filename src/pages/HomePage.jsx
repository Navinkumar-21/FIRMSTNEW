import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SuccessStories from '../components/SuccessStories'
import Programs from '../components/Programs'
import Process from '../components/Process'
import FeedbackVideo from '../components/FeedbackVideo'
import RequestForm from '../components/RequestForm'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <SuccessStories/>
      <Programs/>
      <Process/>
      <FeedbackVideo/>
      <RequestForm/>
    </div>
  )
}

export default HomePage