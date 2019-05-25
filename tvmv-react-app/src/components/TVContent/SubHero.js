//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Link } from 'react-router-dom';
//--------------STYLES-------------------//
import './SubHero.css';
//--------------STATELESS COMPONENT-------------------//
const SubHero = ({ disney, popularShows }) => {
  return (
    <div className='subhero-container'>
      <>
        {disney.slice(0, 1).map((disney, index) => (
          <div key={disney.id}>
            <h1 className='sub-hero-movie-title'>{disney.title}</h1>
            <p className='subhero-movie-desc'>
              {disney.overview.slice(0, 300)}...
            </p>
            <Link to={`/movies/${disney.id}`}>
              <img
                src={
                  'http://image.tmdb.org/t/p/original' + disney.backdrop_path
                }
                alt={disney.title}
                className='subhero-image-left'
              />
            </Link>
          </div>
        ))}
        {popularShows.slice(0, 1).map((popularShow, index) => (
          <div key={popularShow.id} className='subhero-show-container'>
            <h1 className='sub-hero-show-title'>{popularShow.name}</h1>
            <p className='subhero-show-desc'>
              {popularShow.overview.slice(0, 300)}...
            </p>
            <Link to={`/television/${popularShow.id}`}>
              <img
                src={
                  'http://image.tmdb.org/t/p/original' +
                  popularShow.backdrop_path
                }
                alt={popularShow.name}
                className='subhero-image-right'
              />
            </Link>
          </div>
        ))}
      </>
    </div>
  );
};

export default SubHero;
