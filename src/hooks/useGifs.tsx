import { useState, useEffect } from "react";

export default function useGifs() {
    const [gifs, setGifs] = useState([]);
    const API_KEY = "5ioygqurzgFCrVyuY740w3W2RbrYWzkL"

    useEffect(() => {
        const fetchGifs = async() => {
            try {
                const response:Response = await fetch(
                    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=tony-soprano&limit=12`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch gifs');
                }
                const data = await response.json();
                setGifs(data.data);
            } catch (error) {
                console.error('Error fetching gifs:', error);
            }
        };

        fetchGifs();

    }, []);
    return gifs;
}
