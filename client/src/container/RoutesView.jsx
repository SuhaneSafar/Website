import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import CollegeAmbassador from '../pages/CollegeAmbassador'
import WorkFromHills from '../pages/WorkFromHills'
import InterIITCarnival from '../pages/InterIITCarnival'

const RoutesView = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/college-ambassador" element={<CollegeAmbassador />} />
      <Route path="/work-from-hills" element={<WorkFromHills />} />
      <Route path="/inter-iit-carnival" element={<InterIITCarnival />} />
    </Routes>
  )
}       

export default RoutesView;