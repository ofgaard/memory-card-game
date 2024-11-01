import { useState } from 'react'
import useGifs from './hooks/useGifs'
import Gameboard from './components/Gameboard'

function App() {



  return (
    <div className='flex flex-col items-center h-screen bg-neutral-800 p-10 gap-5'>
      <h2 className='text-2xl sm:text-4xl text-neutral-200 font-bold'>The Tony Soprano Memory Game</h2>
      <p className='text-white'>Get points by clicking the images – but don't click one image more than once!</p>

     <Gameboard/>

    </div>
  )
}


export default App
