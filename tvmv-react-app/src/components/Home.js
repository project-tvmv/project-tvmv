/* This is the Homepage for the app!  */

//--------------DEPENDANCIES-------------------//
import React from 'react';
import HomeHero from './sections/HomeHero';
import GenreButtons from './sections/GenreButtons';
import NewMovies from './sections/NewMovies';
import NewTV from './sections/NewTV';
import SubHero from './sections/SubHero';
import PopularMovies from './sections/PopularMovies';
import PopularShows from './sections/PopularShows';
//--------------STYLES-------------------//
import './Home.css';
//--------------STATELESS COMPONENT-------------------//
const Home = ({ popularMovies, popularShows, newMovies, newShows, disney }) => {
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
