import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [count, setCount] = useState(0); //EJMPLO COMENTADO 

    const { data: images, loading } = useFetchGifs(category);
    // Renombre a data por images

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}
            {/* Con el && dice que si lo de la izquierda es true entonces hace lo de la derecha, sino nada  */}

            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
                {/* <h3>{count}</h3>
                <button onClick={() => setCount(count + 1)} ></button> */}
            </div>
        </>

    )
}

GifGrid.porpTypes = {
    category: PropTypes.string.isRequired
}


