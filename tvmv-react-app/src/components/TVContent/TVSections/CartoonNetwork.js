import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const CartoonNetwork = ({ cartoonNetwork, addDefaultSrc }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Only on Cartoon Network</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {cartoonNetwork.slice(0, 12).map((cartoonNetwork, index) => (
          <div key={cartoonNetwork.id}>
            <Link to={`/television/${cartoonNetwork.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 1000 }}
              >
                <img
                  src={
                    'https://image.tmdb.org/t/p/w500' +
                    cartoonNetwork.poster_path
                  }
                  alt={cartoonNetwork.name}
                  className='posters twelve-posters'
                  onError={addDefaultSrc}
                />
              </Tilt>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartoonNetwork;
