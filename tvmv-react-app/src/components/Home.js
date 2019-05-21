//--------------DEPENDANCIES-------------------//
import React from 'react';
//--------------STYLES-------------------//
import './Home.css';
import HomeHero from './sections/HomeHero';
import GenreButtons from './sections/GenreButtons';
import NewMovies from './sections/NewMovies';
import NewTV from './sections/NewTV';
//--------------STATELESS COMPONENT-------------------//
const Home = ({ popularMovies, popularShows, newMovies, newShows }) => {
  return (
    <div className='home-container'>
      <HomeHero popularMovies={popularMovies} popularShows={popularShows} />
      <GenreButtons />
      <NewMovies newMovies={newMovies} />
      <NewTV newShows={newShows} />
    </div>
  );
};

export default Home;
