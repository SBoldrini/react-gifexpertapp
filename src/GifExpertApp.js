import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = (category) => {
  //   // Crear la función para agregar un nuevo elemento, ejemplo HunterXHunter
  //   // setCategories(['HunterXHunter', ...categories]);
  //   // setCategories(cats => [...cats, 'HunterXHunter']);
  //   setCategories(categories.concat(category)); 
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      <ol>
        {
          categories.map((category) => (
            <GifGrid 
            key={ category }
            category={ category }

            />
          ))
        }
      </ol>
    </>
  );
}

GifExpertApp.propTypes = {

}

GifExpertApp.defaultProps = {

}

export default GifExpertApp;


