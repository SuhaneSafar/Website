import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import CollegeAmbassador from '../pages/CollegeAmbassador'
import WorkFromHills from '../pages/WorkFromHills'

const RoutesView = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/college-ambassador" element={<CollegeAmbassador />} />
      <Route path="/work-from-hills" element={<WorkFromHills />} />
    </Routes>
  )
}       

export default RoutesView;