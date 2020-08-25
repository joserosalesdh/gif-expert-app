import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        getGifs(); //Solo quiero que se ejecute esta función cuando el componente es renderizado por primera vez
    }, []) // El segundo argumento que le mandamos es un arreglo de dependencias

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=1auQVuH0dRg2Fc2pCWwzPdCX4UFZagHm'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url //el ? para asegurarnos de que traiga la info
            }
        })
        console.log(gifs)
    };

    return (
        <div>
            <h3>{category}</h3>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)} ></button>
        </div>
    )
}


