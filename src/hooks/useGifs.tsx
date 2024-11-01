import { useState, useEffect } from "react";

export default function useGifs() {
    const [gifs, setGifs] = useState([]);
    const API_KEY = "ACK5GLwPQsSlHRp3K4FCT1pO98Yp9zFE"

    useEffect(() => {
        const fetchGifs = async() => {
            try {
                const response:Response = await fetch(
                    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=tony-soprano&limit=8`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch gifs');
                }
                const data = await response.json();
                console.log(data);
                setGifs(data.data);
            } catch (error) {
                console.error('Error fetching gifs:', error);
            }
        };

        fetchGifs();

    }, []);

    const shuffleGifs = () => {
        const shuffled = [...gifs].sort(() => Math.random() - 0.5);
        setGifs(shuffled);
    }

    return {gifs, shuffleGifs};
}
