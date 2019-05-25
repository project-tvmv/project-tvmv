//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
//--------------STYLES-------------------//
import '../App.css';
//--------------COMPONENTS-------------------//
import Cast from './sections/Cast';
import Extras from './sections/Extras';
import Recommended from './sections/Recommended';
//--------------ASSETS-------------------//
import back from '../assets/icons/arrow-left.svg';
import star from '../assets/icons/star.svg';

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
          <p className='rating'>{movie.vote_average}</p>
          <h1 className='single-page-hero-title'>{movie.title}</h1>
          <p className='single-page-hero-desc'>{movie.overview}</p>
          <button className='watch-movie'>Watch movie</button>
        </div>
        <img
          src={'http://image.tmdb.org/t/p/original' + movie.backdrop_path}
          className='full-hero'
          alt={movie.title}
        />
        <Cast id={this.state.id} />
        <Extras id={this.state.id} />
        <Recommended id={this.state.id} />
      </div>
    );
  }
}

export default withRouter(SingleMovie);
