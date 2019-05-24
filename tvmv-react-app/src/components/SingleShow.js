//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import axios from 'axios';

//--------------STYLES-------------------------//
import '../App.css';
import ShowCast from './sections/ShowCast';
import ShowExtras from './sections/ShowExtras';
import ShowRecommended from './sections/ShowRecommended';
import { Link } from 'react-router-dom';

//--------------IMPORTS------------------------//
import back from '../assets/icons/arrow-left.svg';
import star from '../assets/icons/star.svg';
//--------------CLASS COMPONENT-------------------//
class SingleShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      show: []
    };
  }

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
    const show = this.state.show;
    return (
      <div className='single-page-containter'>
        {/* //--------------HERO SECTION-------------------// */}
        <Link to='/'>
          <img src={back} className='hero-back' alt='back' />
        </Link>
        <img src={star} className='hero-star' alt='star' />
        <div className='single-page-hero-info'>
          <p className='rating'>{show.vote_average}</p>
          <h1 className='single-page-hero-title'>{show.name}</h1>
          <p className='single-page-hero-desc'>{show.overview}</p>
        </div>
        <img
          src={'http://image.tmdb.org/t/p/original' + show.backdrop_path}
          className='full-hero'
          alt={show.title}
        />
        <ShowCast id={this.state.id} />
        <ShowExtras id={this.state.id} />
        <ShowRecommended id={this.state.id} />
      </div>
    );
  }
}

export default SingleShow;
