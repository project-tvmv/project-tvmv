import React from 'react';
import { Component } from 'react';
import TrendingMovies from './moviesSection/TrendingMovies';
import NewMovies from './moviesSection/NewMovies';

//--------------STYLES-------------------//
import './Movies.css';
import PopularMovies from './moviesSection/PopularMovies';
import FamilyMovies from './moviesSection/FamilyMovies';
import HorrorMovies from './moviesSection/HorrorMovies';
import RomCom from './moviesSection/RomCom';
import search from '../assets/icons/search.svg';
//--------------CLASS COMPONENT-------------------//
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  render() {
    window.scroll(0, 0);
    const familyMovies = this.props.familyMovies;
    const horrorMovies = this.props.horrorMovies;
    const newMovies = this.props.newMovies;
    const popularMovies = this.props.popularMovies;
    const romanticComedies = this.props.romanticComedies;
    const trendingMovies = this.props.trendingMovies;
    return (
      <div className='movies-container'>
        <div className='hero-container'>
          <img src={search} alt='search-icon' className='search-movie-icon' />
          <form onSubmit={this.getInfo} className='search-form'>
            <input
              className='search'
              placeholder='What can we help you find today?'
              type='text'
              // value={this.state.query}
              // ref={input => (this.search = input)}
              // onChange={this.handleInputChange}
            />
          </form>
        </div>
        <TrendingMovies trendingMovies={trendingMovies} />
        <NewMovies newMovies={newMovies} />
        <div className='section-break'>
          <h1 className='section-break-tite'>{familyMovies[7].title}</h1>
          <p className='section-break-desc'>{familyMovies[7].overview}</p>
          <img
            src={
              'http://image.tmdb.org/t/p/original' +
              familyMovies[7].backdrop_path
            }
            alt={familyMovies[7].title}
            className='section-break-image'
          />
        </div>

        <PopularMovies popularMovies={popularMovies} />
        <FamilyMovies familyMovies={familyMovies} />
        <HorrorMovies horrorMovies={horrorMovies} />
        <RomCom romanticComedy={romanticComedies} />
      </div>
    );
  }
}

export default Movies;
