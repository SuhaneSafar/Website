import React from 'react' 
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import RoutesView from './container/RoutesView'

import FeedbackFormModal from './components/FeedbackFormModal'

function App() {
  
  return (
    <Router>
      <RoutesView />
      <Toaster />
      <FeedbackFormModal />
    </Router>
  )
}

export default App
