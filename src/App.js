import React from 'react'
import Sidebar from './components/sidebar/Body.js'
import Homepage from './components/homepage/Body.js'

const App = () => {
  return (
    <div class="flex flex-col flex-auto overflow-clip bg-offwhite min-h-screen">
      <Homepage />
      <Sidebar />
    </div>
  )
}

export default App