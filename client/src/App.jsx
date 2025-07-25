import React from 'react' 
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import RoutesView from './container/RoutesView'

function App() {
  

  return (
    <Router>
      <RoutesView />
      <Toaster />
    </Router>
  )
}

export default App
