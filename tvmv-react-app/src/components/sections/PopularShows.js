//--------------DEPENDANCIES-------------------//
import React from 'react';
//--------------STYLES-------------------//
import '../../App.css';
//--------------STATELESS COMPONENT-------------------//
const PopularShows = ({ popularShows }) => {
  return (
    <div className='popular-movies-container'>
      <div className='section second-section'>
        <h1 className='section-header'>Popular Shows</h1>
        <p className='seemore'>see more</p>
      </div>
      <div className='six-poster-container'>
        <>
          {popularShows.splice(0, 6).map((popularShow, index) => (
            <div key={popularShow.id}>
              <img
                src={
                  'http://image.tmdb.org/t/p/original' + popularShow.poster_path
                }
                alt={popularShow.title}
                className='posters'
              />
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default PopularShows;
