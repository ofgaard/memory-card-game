import { useState } from 'react'
import useGifs from './hooks/useGifs'


function App() {
 const gifs = useGifs();


  return (
    <>
     <div>

                {gifs.map((gif) => (
                    
                        <img src={gif.images.fixed_height.url} />
      
                ))}
            </div>

    </>
  )
}

export default App
