import React from 'react'
import Sidebar from './components/sidebar/Body.js'
import Homepage from './components/homepage/Body.js'

const App = () => {
  return (
    <div class="bg-slate-400">
      <Homepage />
      <Sidebar />
    </div>
  )
}

export default App