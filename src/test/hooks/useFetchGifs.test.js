import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        const { data, loading } = result.current; //current es el valor acutual q tiene el custom hook

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    })

    test('debe de retornar un arreglo de imgs y loading en false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch')); // waitForNextUpdate es una promesa que me va a indicar cuando ya sucedio un cambio en el estado de nuestro custon hook

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);

    })



})
