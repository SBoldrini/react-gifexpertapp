import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Prueba del hook <useFetchGifs />', () => {
  
  test('debe de retornar el estado inicial', async() => {
    
    const category = 'Pokemon';
    
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
    const { data, loading } = result.current;

    await waitForNextUpdate();    
    
    expect(data).toEqual([]);
    expect(loading).toBe(true);
    
  });
  
  
  test('Debe de retornar un arreglo de img y el loading en false', async() => {
    
    const category = 'Pokemon';
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));

    await waitForNextUpdate();

    const { data, loading } = result.current;

    
    expect(data.length).toEqual(10);
    expect(loading).toBe(false);

  });
  
  

});
