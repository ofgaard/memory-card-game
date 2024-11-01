import { useState } from 'react'
import useGifs from './hooks/useGifs'
import Gameboard from './components/Gameboard'

function App() {



  return (
    <div className='flex flex-col items-center h-screen bg-neutral-800 p-10'>

     <Gameboard/>

    </div>
  )
}

export default App
