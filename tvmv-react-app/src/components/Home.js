//--------------DEPENDANCIES-------------------//
import React from 'react';
//--------------STYLES-------------------//
import './Home.css';
import HomeHero from './sections/HomeHero';
import GenreButtons from './sections/GenreButtons';
import NewMovies from './sections/NewMovies';
import NewTV from './sections/NewTV';
import SubHero from './sections/SubHero';
import PopularMovies from './sections/PopularMovies';
import PopularShows from './sections/PopularShows';
//--------------STATELESS COMPONENT-------------------//
const Home = ({ popularMovies, popularShows, newMovies, newShows }) => {
  return (
    <div className='home-container'>
      <HomeHero popularMovies={popularMovies} popularShows={popularShows} />
      <GenreButtons />
      <NewMovies newMovies={newMovies} />
      <NewTV newShows={newShows} />
      <SubHero popularMovies={popularMovies} popularShows={popularShows} />
      <PopularMovies popularMovies={popularMovies} />
      <PopularShows popularShows={popularShows} />
    </div>
  );
};

export default Home;
