import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { getGifs } from '../../helpers/getGifs';

describe('Prueba del componente Fetch <getGifs />', () => {
  
  
  test('Debe de traer 10 elementos', async() => {
    const gifs = await getGifs('One Punch');
    // console.log(gifs.length);
    expect(gifs.length).toBe(10);
  });

  test('Debe de recibir una category', async() => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
    
  });
  

  
});
