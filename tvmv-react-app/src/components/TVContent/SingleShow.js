//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
//--------------STYLES-------------------------//
import '../../App.css';
//--------------COMPONENTS-------------------------//
import ShowCast from './ShowCast';
import ShowExtras from './ShowExtras';
import ShowRecommended from './ShowRecommended';
//--------------ASSETS------------------------//
import back from '../../assets/icons/arrow-left.svg';
import star from '../../assets/icons/star.svg';
//--------------CLASS COMPONENT-------------------//
class SingleShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id, // MATCHES THE ID IN THE URL (PARAMS)
      show: []
    };
  }

  //--------------RETREIVING DATA FROM MOVIE IN STATE ID-------------------//
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ show: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    window.scroll(0, 0);
    //--------------DECONSTRUCTING-------------------//
    const show = this.state.show;
    const addDefaultSrc = this.props.addDefaultSrc;
    //--------------END OF DECONSTRUCTING-------------------//
    return (
      <div className='single-page-containter'>
        {/* //--------------HERO SECTION-------------------// */}
        <img
          src={back}
          className='hero-back'
          alt='back'
          onClick={this.props.history.goBack}
        />
        <img src={star} className='hero-star' alt='star' />
        <div className='single-page-hero-info'>
          <h1 className='single-page-hero-title'>{show.name}</h1>
          <div className='movie-details'>
            <p className='movie-details-text'>
              {moment(show.last_air_date, 'YYYY-MM-DD').format('MMMM Do YYYY')}
            </p>
            <p>|</p>
            <p className='movie-details-text'>{show.vote_average}</p>
            <p>|</p>
            <p className='movie-details-text'>
              {show.number_of_seasons} seasons
            </p>
            <p>|</p>
            <p className='movie-details-text'>
              {show.number_of_episodes} episodes
            </p>
          </div>
          <p className='single-page-hero-desc'>{show.overview}</p>
          <button className='watch-movie'>Watch latest episode</button>
        </div>
        <img
          // If the show's name is Game of Thrones, this returns a custom image... I'm very OCD. :P
          src={
            show.name === 'Game of Thrones'
              ? 'https://www.sheknows.com/wp-content/uploads/2019/02/game-of-thrones-character-posters-FI.jpg'
              : 'http://image.tmdb.org/t/p/original' + show.backdrop_path
          }
          className='full-hero'
          alt={show.title}
        />
        <ShowCast id={this.state.id} addDefaultSrc={this.addDefaultSrc} />
        <ShowExtras id={this.state.id} addDefaultSrc={this.addDefaultSrc} />
        <ShowRecommended
          id={this.state.id}
          addDefaultSrc={this.addDefaultSrc}
        />
      </div>
    );
  }
}

export default withRouter(SingleShow);
