import React from 'react'
import Background from './components/Background'
import Forbackground from './components/Forbackground'
function app() {
  return (
    <div className="z-[2] relative w-full h-screen bg-zinc-800">
      <Background />
      <Forbackground />
      
    </div>
  )
}

export default app
