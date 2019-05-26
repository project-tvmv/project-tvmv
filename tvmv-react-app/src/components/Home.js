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
const Home = ({
  popularMovies,
  popularShows,
  newMovies,
  newShows,
  disney,
  horrorMovies,
  trendingMovies,
  romanticComedies
}) => {
  window.scroll({ top: 0, behavior: 'smooth' });
  return (
    <div className='home-container'>
      <HomeHero popularMovies={popularMovies} popularShows={popularShows} />
      <GenreButtons />
      <NewMovies newMovies={newMovies} />
      <NewTV newShows={newShows} />
      <SubHero movie={disney} show={newShows} />
      <PopularMovies popularMovies={popularMovies} />
      <PopularShows popularShows={popularShows} />
      <SubHero movie={romanticComedies} show={popularShows} />
    </div>
  );
};

export default Home;
