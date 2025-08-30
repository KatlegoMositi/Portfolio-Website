import { useState } from 'react'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Header from './components/header'

function App() {

  return (
    <div className="bg-background min-h-screen w-full flex flex-col ">

      <Header/>
      <main className='bg-background flex-1 w-full flex flex-col'>
        <h1>WELCOME</h1>
      </main>
    </div>
  )
}

export default App
