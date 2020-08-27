import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn(); // es como poner "() => {}"
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks(); // Esto usualmente se llama para que si teniamos algun mock o alguna simulacion, para que todo se limpie 
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    })

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto ', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change', { target: { value } }); //con el chango simulo el onChange // {} tiene le valor de "e", van adentro los argumentos

        expect(wrapper.find('p').text().trim()).toBe(value);

    })

    test('NO debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } }); // (){} en estos caso es como hacer '()=>{}'

        expect(setCategories).not.toHaveBeenCalled(); // Como tiene la negación .not es que no se tiene que haber llamado

    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola Mundo' // Es el valor que voy a utilizar para pruebas

        // 1. Simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } }); // Busco el input y simulo el onChange

        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        // 3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();

        // 4. El valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');


    })




})
