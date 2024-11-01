import { useState, useEffect } from "react";
import useGifs from "../hooks/useGifs";

export default function Gameboard() {
    const [clickedGifs, setClickedGifs] = useState([]);
    const { gifs, shuffleGifs } = useGifs();


    const handleTurn = (clickedGif) => {
        const isClicked = clickedGifs.some(gif => gif.id === clickedGif.id)
        if (!isClicked) {
            setClickedGifs([ ... clickedGifs, clickedGif ])
        }
        shuffleGifs();
        console.log(`you clicked GIF: ${clickedGif.id}`)

    }

    return (
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5">

                {gifs.map((gif) => (
                   
                        <div className="w-full h-72 flex flex-col rounded-md p-1 items-center text-neutral-200 bg-slate-700" key={gif.id}>
                        <img src={gif.images.fixed_height.url} onClick={() => handleTurn(gif)} className="object-cover w-full h-[90%]"/>
                        <h1>Soprano</h1>
                        </div>
                       
                 ))}
            </div>

    )
}





//  <div className="w-full h-72 flex flex-col rounded-md p-1 items-center text-neutral-200 bg-orange-700">
{/* <img  className="object-cover w-full h-[90%]"/>
<h1>Soprano</h1>
</div>
<div className="w-full h-72 flex flex-col rounded-md p-1 items-center text-neutral-200 bg-yellow-700">
<img  className="object-cover w-full h-[90%]"/>
<h1>Soprano</h1>
</div>
<div className="w-full h-72 flex flex-col rounded-md p-1 items-center text-neutral-200 bg-cyan-700">
<img  className="object-cover w-full h-[90%]"/>
<h1>Soprano</h1>
</div>
<div className="w-full h-72 flex flex-col rounded-md p-1 items-center text-neutral-200 bg-amber-400">
<img  className="object-cover w-full h-[90%]"/>
<h1>Soprano</h1>
</div>
<div className="w-full h-72 flex flex-col rounded-md p-1 items-center text-neutral-200 bg-lime-500">
<img  className="object-cover w-full h-[90%]"/>
<h1>Soprano</h1>
</div>
<div className="w-full h-72 flex flex-col rounded-md p-1 items-center text-neutral-200 bg-indigo-600">
<img  className="object-cover w-full h-[90%]"/>
<h1>Soprano</h1>
</div>
<div className="w-full h-72 flex flex-col rounded-md p-1 items-center text-neutral-200 bg-red-600">
<img  className="object-cover w-full h-[90%]"/>
<h1>Soprano</h1>
</div> */}