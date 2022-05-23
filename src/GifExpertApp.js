import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div className="container">
      <div className='row'>
        <div className='col-6'>
          <h1 className="text-gradient">Search all the Gifs</h1>
          <AddCategory setCategories={ setCategories }/>
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          {
            categories.map((category) => (
              <GifGrid
                key={category}
                category={category}

              />
            ))
          }
          
        </div>
      </div>
    </div>
  );
}

export default GifExpertApp;


