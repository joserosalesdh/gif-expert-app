import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false //en false xq ya termino de cargar 
                })

            })

    }, [category])



    return state; // El state es {data: [], loading: true} esto es el state

}


