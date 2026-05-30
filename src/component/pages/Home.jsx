import React from 'react'
import VideoSection from '../folder/Home/VideoSection'
import HeroSection from '../folder/Home/HeroSection'
import Process from '../folder/Home/Process'
import Capabilities from '../folder/Home/Capabilities'
import OurClients from '../folder/Home/OurClients'
import Certification from './Certification'
import ManagementTeam from './ManagementTeam'

export default function Home() {
  return (
    <div>
        <VideoSection/>
        <HeroSection/>
        <Process/>
        <Capabilities/>
        <OurClients/>
        <ManagementTeam/>
    </div>
  )
}
