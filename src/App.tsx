import { useState } from 'react'
import './styles/App.css'
import Header from './components/header'
import Bio from './components/bio'

function App() {

  return (
    <div className="bg-background min-h-screen w-full flex flex-col ">

      <Header/>
      <main className='bg-background flex-1 w-full flex flex-col pt-7'>
        <Bio/>
      </main>
    </div>
  )
}

export default App
