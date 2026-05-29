import React from 'react'
import VideoSection from '../folder/Home/VideoSection'
import HeroSection from '../folder/Home/HeroSection'
import Process from '../folder/Home/Process'
import Capabilities from '../folder/Home/Capabilities'
import OurClients from '../folder/Home/OurClients'
import Certification from './Certification'

export default function Home() {
  return (
    <div>
        <VideoSection/>
        <HeroSection/>
        <Process/>
        <Capabilities/>
        <OurClients/>
        <Certification/>
    </div>
  )
}
