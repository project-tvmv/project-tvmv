//--------------DEPENDANCIES-------------------//
import React from 'react';
//--------------STYLES-------------------//
import './NewTV.css';
import '../../App.css';
//--------------STATELESS COMPONENT-------------------//
const NewTV = ({ newShows }) => {
  return (
    <div className='new-tv-container'>
      <div className='section'>
        <h1 className='section-header'>New to TV</h1>
        <p className='seemore'>see more</p>
      </div>
      <div className='six-poster-container'>
        {newShows.slice(0, 6).map((newShow, index) => (
          <div key={newShow.id}>
            <img
              src={'http://image.tmdb.org/t/p/original' + newShow.poster_path}
              alt={newShow.name}
              className='posters'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewTV;
