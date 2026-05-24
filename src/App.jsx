import { useState, useEffect } from 'react'
import photo from './assets/1.avif'
import './App.css'
import Dashboard from './components/Dashboard'
function App() {

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center" style={{backgroundImage: `url(${photo})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        <Dashboard/>
      </div>
    </>
  )
}

export default App
