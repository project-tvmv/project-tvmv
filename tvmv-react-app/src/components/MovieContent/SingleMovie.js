//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
//--------------STYLES-------------------//
import '../../App.css';
//--------------COMPONENTS-------------------//
import Cast from './Cast';
import Extras from './Extras';
import Recommended from './Recommended';
//--------------ASSETS-------------------//
import back from '../../assets/icons/arrow-left.svg';
import star from '../../assets/icons/star.svg';

//--------------CLASS COMPONENT-------------------//
class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id, // MATCHES THE ID IN THE URL (PARAMS)
      movie: []
    };
  }

  //--------------RETREIVING DATA FROM MOVIE IN STATE ID-------------------//
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.state.id
        }?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    window.scroll(0, 0);
    //--------------DECONSTRUCTING-------------------//
    const movie = this.state.movie;
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
          <h1 className='single-page-hero-title'>{movie.title}</h1>
          <div className='movie-details'>
            <p className='movie-details-text'>
              {moment(movie.release_date, 'YYYY-MM-DD').format('MMMM Do YYYY')}
            </p>
            <p>|</p>
            <p className='movie-details-text'>{movie.vote_average}</p>
            <p>|</p>
            <p className='movie-details-text'>Runtime: {movie.runtime} mins</p>
          </div>
          <p className='single-page-hero-desc'>{movie.overview}</p>
          <div className='single-page-button-flex'>
            <button className='watch-movie'>Watch movie</button>
            <button className='watch-trailer'>Watch trailer</button>
          </div>
        </div>
        <img
          src={'http://image.tmdb.org/t/p/original' + movie.backdrop_path}
          className='full-hero'
          alt={movie.title}
          onError={this.props.addDefaultSrc}
        />
        <Cast id={this.state.id} addDefaultSrc={this.props.addDefaultSrc} />
        <Extras id={this.state.id} />
        <Recommended
          id={this.state.id}
          addDefaultSrc={this.props.addDefaultSrc}
        />
      </div>
    );
  }
}

export default withRouter(SingleMovie);
