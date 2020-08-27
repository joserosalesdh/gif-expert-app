import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

// Como esta el componente hacer que haga el match contra el snapshot
describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch'; // o lo que queramos
    // const wrapper = shallow(<GifGrid category={category} />)

    test('debe de mostrarse correctamente', () => {



        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        }); // Las llaves van a ser el objeto que va a tomar mi componente en GifGrid.js en const { data: images, loading } = useFetchGifs(category);
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();

    })

    test('debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {


        // Voy a hacer un moak que es como finjir o falsear algo, para que mi componente crea que tenga info resuelta con la data producto de mi custom hook
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />)

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);


    })


})

