import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]); //cats es el estado anterios de categorias //puse el ...cats al ultimo para que despues de buscar una categoria (por el inputValue) me la mande adelante y no abajo
            setInputValue('');
        }
        // console.log('Submit hecho')

    }
    //El inputValue va a ser la ultima informacion de lo que usuario escribio
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
