//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//--------------COMPONENTS-------------------//
import TrendingMovies from './moviesSection/TrendingMovies';
import NewMovies from './moviesSection/NewMovies';
import PopularMovies from './moviesSection/PopularMovies';
import FamilyMovies from './moviesSection/FamilyMovies';
import HorrorMovies from './moviesSection/HorrorMovies';
import RomCom from './moviesSection/RomCom';
import ComedyMovies from './moviesSection/ComedyMovies';
import AdamSandler from './moviesSection/AdamSandler';
import Kids from './moviesSection/Kids';
import DisneyMovies from './moviesSection/DisneyMovies';
//--------------STYLES-------------------//
import './Movies.css';
//--------------ASSETS-------------------//
import search from '../../assets/icons/search.svg';
import up from '../../assets/icons/arrow-up.svg';
//--------------CLASS COMPONENT-------------------//
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchData: []
    };
  }

  //--------------SEARCH MOVIES-------------------//
  fetchSearch(search) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&language=en-US&query=${search}&page=1&include_adult=false`
      )
      .then(res => {
        console.log('response:', res);
        this.setState({
          searchData: res.data.results
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeHandler = e => {
    this.setState({
      search: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.fetchSearch(this.state.search);
    this.setState({
      search: ''
    });
    //--------------PUSHES USERS TO MOVIERESULTS.JS PAGE-------------------//
    this.props.history.push(`/results/${this.state.search}`);
  };

  scrollTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  render() {
    window.scroll(0, 0);
    //--------------DECONSTRUCTING-------------------//
    const familyMovies = this.props.familyMovies;
    const horrorMovies = this.props.horrorMovies;
    const newMovies = this.props.newMovies;
    const popularMovies = this.props.popularMovies;
    const romanticComedies = this.props.romanticComedies;
    const trendingMovies = this.props.trendingMovies;
    const comedyMovies = this.props.comedyMovies;
    const kids = this.props.kids;
    const disney = this.props.disney;
    const adamSandler = this.props.adamSandler;
    //--------------END OF DECONSTRUCTING-------------------//
    return (
      <div className='movies-container'>
        <div className='hero-container'>
          {/* --------------SEARCH FIELD------------------- */}
          <img src={search} alt='search-icon' className='search-movie-icon' />
          <form onSubmit={this.onSubmit} className='search-form'>
            <input
              className='search'
              placeholder='What can we help you find today?'
              type='text'
              name='search'
              value={this.state.search}
              onChange={this.changeHandler}
            />
          </form>
        </div>
        {/* --------------END SEARCH FIELD------------------- */}
        <TrendingMovies trendingMovies={trendingMovies} />
        <NewMovies newMovies={newMovies} />
        <Link to={`/movie/${familyMovies[19].id}`} className='links'>
          <div className='section-break'>
            <h1 className='section-break-tite'>{familyMovies[19].title}</h1>
            <p className='section-break-desc'>{familyMovies[19].overview}</p>
            <img
              src={
                'https://image.tmdb.org/t/p/original' +
                familyMovies[19].backdrop_path
              }
              alt={familyMovies[19].title}
              className='section-break-image'
            />
          </div>
        </Link>
        <PopularMovies popularMovies={popularMovies} />
        <FamilyMovies familyMovies={familyMovies} />
        <Link to={`/movie/${horrorMovies[19].id}`} className='links'>
          <div className='section-break'>
            <h1 className='section-break-tite'>{horrorMovies[19].title}</h1>
            <p className='section-break-desc'>{horrorMovies[19].overview}</p>
            <img
              src={
                'https://image.tmdb.org/t/p/original' +
                horrorMovies[19].backdrop_path
              }
              alt={horrorMovies[19].title}
              className='section-break-image'
            />
          </div>
        </Link>
        <HorrorMovies horrorMovies={horrorMovies} />
        <DisneyMovies disney={disney} />
        <Link to={`/movie/${romanticComedies[19].id}`} className='links'>
          <div className='section-break'>
            <h1 className='section-break-tite'>{romanticComedies[19].title}</h1>
            <p className='section-break-desc'>
              {romanticComedies[19].overview}
            </p>
            <img
              src={
                'https://image.tmdb.org/t/p/original' +
                romanticComedies[19].backdrop_path
              }
              alt={romanticComedies[19].title}
              className='section-break-image'
            />
          </div>
        </Link>
        <RomCom romanticComedy={romanticComedies} />
        <ComedyMovies comedyMovies={comedyMovies} />
        <Link to={`/movie/${kids[18].id}`} className='links'>
          <div className='section-break'>
            <h1 className='section-break-tite'>{kids[18].title}</h1>
            <p className='section-break-desc'>{kids[18].overview}</p>
            <img
              src={
                'https://image.tmdb.org/t/p/original' + kids[18].backdrop_path
              }
              alt={kids[18].title}
              className='section-break-image'
            />
          </div>
        </Link>
        <Kids kids={kids} />
        <AdamSandler adamSandler={adamSandler} />
        <img
          src={up}
          alt='scroll back to up'
          className='scroll-back'
          onClick={this.scrollTop}
        />
      </div>
    );
  }
}

export default Movies;
