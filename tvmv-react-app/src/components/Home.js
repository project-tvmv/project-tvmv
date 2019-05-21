//--------------DEPENDANCIES-------------------//
import React from 'react';
//--------------STYLES-------------------//
import './Home.css';

const Home = ({ popularMovies, popularShows }) => {
  return (
    <div className='home-container'>
      <div className='home-hero'>
        {popularMovies.slice(0, 1).map((popularMovie, index) => (
          <h1> {popularMovie.title} </h1>
        ))}
        {popularShows.slice(0, 1).map((popularShow, index) => (
          <h1> {popularShow.name} </h1>
        ))}
      </div>
    </div>
  );
};

export default Home;
