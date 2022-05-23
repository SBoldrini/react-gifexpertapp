import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Prueba del componente <GifGridItem />', () => {
  
  const title = 'One Punch Man Bubblegum GIF';
  const url = 'https://punchman.gif';
  const wrapper = shallow(<GifGridItem url={ url } title={ title } />);

  test('Debe renderizar correctamente el componente <GifGridItem />', () => {

    expect(wrapper).toMatchSnapshot();

  });

  test('Debe de tener un párrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });
  
  
  test('Debe de tener la imagen ingual al url y alt de los props', () => {
    const img = wrapper.find('img');
    console.log(img.props().alt);

    expect(img.props().alt).toBe(title);
    expect(img.prop('src')).toBe(url);
  });

  test('Debe tener la clase animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);
  })
  
  
  
  
});
