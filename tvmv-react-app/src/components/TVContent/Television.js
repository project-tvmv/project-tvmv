//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//--------------COMPONENTS-------------------//
import NewShows from './TVSections/NewShows';
import PopularShows from './TVSections/PopularShows';
import OnAir from './TVSections/OnAir';
import ActionShows from './TVSections/ActionShows';
import RealityTV from './TVSections/RealityTV';
import KidShows from './TVSections/KidShows';
import DisneyChannel from './TVSections/DisneyChannel';
import CartoonNetwork from './TVSections/CartoonNetwork';
import MysteryShows from './TVSections/MysteryShows';
//--------------ASSETS-------------------//
import search from '../../assets/icons/search.svg';
import up from '../../assets/icons/arrow-up.svg';
import DocShows from './TVSections/DocShows';
//--------------CLASS COMPONENT-------------------//
class Television extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchData: []
    };
  }
  //--------------TV SHOWS MOVIES-------------------//
  fetchSearch(search) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&language=en-US&query=${search}&page=1&include_adult=false`
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
    this.props.history.push(`/tv-results/${this.state.search}`);
  };

  scrollTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  render() {
    window.scroll(0, 0);
    const newShows = this.props.newShows;
    const popularShows = this.props.popularShows;
    const onAir = this.props.onAir;
    const actionShows = this.props.actionShows;
    const realityTV = this.props.realityTV;
    const kidsShows = this.props.kidsShows;
    const disneyChannel = this.props.disneyChannel;
    const cartoonNetwork = this.props.cartoonNetwork;
    const documentaryShows = this.props.documentaryShows;
    const mysteryShows = this.props.mysteryShows;
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
        <NewShows newShows={newShows} />
        <PopularShows popularShows={popularShows} />
        <Link to={`/television/${popularShows[19].id}`} className='links'>
          <div className='section-break'>
            <h1 className='section-break-tite'>{popularShows[19].name}</h1>
            <p className='section-break-desc'>{popularShows[19].overview}</p>
            <img
              src={
                'https://image.tmdb.org/t/p/original' +
                popularShows[19].backdrop_path
              }
              alt={popularShows[19].name}
              className='section-break-image'
            />
          </div>
        </Link>
        <OnAir onAir={onAir} />
        <ActionShows actionShows={actionShows} />
        <Link to={`/television/${realityTV[19].id}`} className='links'>
          <div className='section-break'>
            <h1 className='section-break-tite'>{realityTV[19].name}</h1>
            <p className='section-break-desc'>{realityTV[19].overview}</p>
            <img
              src={
                'https://image.tmdb.org/t/p/original' +
                realityTV[19].backdrop_path
              }
              alt={realityTV[19].name}
              className='section-break-image'
            />
          </div>
        </Link>
        <RealityTV realityTV={realityTV} />
        <KidShows kidsShows={kidsShows} />
        <Link to={`/television/${documentaryShows[19].id}`} className='links'>
          <div className='section-break'>
            <h1 className='section-break-tite'>{documentaryShows[19].name}</h1>
            <p className='section-break-desc'>
              {documentaryShows[19].overview}
            </p>
            <img
              src={
                'https://image.tmdb.org/t/p/original' +
                documentaryShows[19].backdrop_path
              }
              alt={documentaryShows[19].name}
              className='section-break-image'
            />
          </div>
        </Link>
        <DocShows documentaryShows={documentaryShows} />
        <MysteryShows mysteryShows={mysteryShows} />
        <Link to={`/television/${disneyChannel[19].id}`} className='links'>
          <div className='section-break'>
            <h1 className='section-break-tite'>{disneyChannel[19].name}</h1>
            <p className='section-break-desc'>{disneyChannel[19].overview}</p>
            <img
              src={
                'https://image.tmdb.org/t/p/original' +
                disneyChannel[19].backdrop_path
              }
              alt={disneyChannel[19].name}
              className='section-break-image'
            />
          </div>
        </Link>
        <DisneyChannel disneyChannel={disneyChannel} />
        <CartoonNetwork cartoonNetwork={cartoonNetwork} />
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

export default Television;
