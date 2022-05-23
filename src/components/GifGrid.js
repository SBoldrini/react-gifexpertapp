import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';


export const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs( category );



  return (
    <>
      <h3 id="grid-title" className="animate__animated animate__fadeIn">{ category.toUpperCase() }</h3>
      <hr />

      { loading && <p className="animate__animated animate__flash">Loading...</p> }

      <div className="card-grid">
        {
          images.map(img => (
            <GifGridItem
              key = { img.id }
              { ...img }
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
