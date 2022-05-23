import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Prueba del componente <GifGrid />', () => {
  
  const category = 'Pokemon';
  
  test('Debe de mostrar el componente correctamente', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true, 
    });
    
    const wrapper = shallow(<GifGrid category={ category }/>);
    
    expect(wrapper).toMatchSnapshot();
    
  });
  
  
  test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    
    const gifs = [{
      id: 'ABC',
      url: 'https://unapureba.com/prueba.jpg',
      title: 'Titulo de Test',
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false, 
    });
    
    const wrapper = shallow(<GifGrid category={ category }/>);

    // expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('p').exists()).toBe(false);

    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
  


  
});
