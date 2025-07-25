import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

const RoutesView = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}       

export default RoutesView;