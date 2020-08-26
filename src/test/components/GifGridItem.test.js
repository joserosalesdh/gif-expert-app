import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en GifGridItem.js', () => {

    const title = 'Un titulo';
    const url = 'http://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    // beforeEach(() => {
    //     wrapper = shallow(<GifGridItem />);
    // })

    test('debe de mostrar el <GifGridItem /> correctamente ', () => {

        expect(wrapper).toMatchSnapshot()

    })

    test('debe de tener un parrafo con el title', () => {

        const p = wrapper.find('p').text().trim();

        expect(p).toBe(title);
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);

        expect(img.prop('alt')).toBe(title);

    })

    test('debe de tener animate__fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true)

    })




})



