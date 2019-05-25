/* This is the Homepage for the app!  */

//--------------DEPENDANCIES-------------------//
import React from 'react';
import HomeHero from './sections/HomeHero';
import GenreButtons from './sections/GenreButtons';
import NewMovies from './MovieContent/NewMovies';
import NewTV from './TVContent/NewTV';
import SubHero from './TVContent/SubHero';
import PopularMovies from './MovieContent/PopularMovies';
import PopularShows from './TVContent/PopularShows';
//--------------STYLES-------------------//
import './Home.css';
//--------------STATELESS COMPONENT-------------------//
const Home = ({ popularMovies, popularShows, newMovies, newShows, disney }) => {
  console.log('popularMovies', popularMovies);
  return (
    <div className='home-container'>
      <HomeHero popularMovies={popularMovies} popularShows={popularShows} />
      <GenreButtons />
      <NewMovies newMovies={newMovies} />
      <NewTV newShows={newShows} />
      <SubHero disney={disney} popularShows={newShows} />
      <PopularMovies popularMovies={popularMovies} />
      <PopularShows popularShows={popularShows} />
    </div>
  );
};

export default Home;
