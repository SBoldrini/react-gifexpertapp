import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';


describe('Prueba del componente <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

  });


  
  test('Debe de mostrar un formulario con una caja de texto', () => {

    expect(wrapper).toMatchSnapshot();

  });

  test('Debe de cambiar la caja de texto', () => {

    const input = wrapper.find('input');
    const value = 'Hola Mundo';


    input.simulate('change', { target: { value } });


  });

  test('NO debe de postear la información con submit', () => {
    
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    
    expect(setCategories).not.toHaveBeenCalled();
    
  })
  
  test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
    
    const input = wrapper.find('input');
    const value = 'Cambio en input';
    
    input.simulate('change', { target: {value} });
    
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    

    expect(input.prop('value')).toBe('');

  })
  
  
  

  


});
