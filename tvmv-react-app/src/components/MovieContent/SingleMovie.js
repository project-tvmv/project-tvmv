//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
//--------------STYLES-------------------//
import '../../App.css';
//--------------COMPONENTS-------------------//
import Cast from './Cast';
import Extras from './Extras';
import Recommended from './Recommended';
//--------------ASSETS-------------------//
import back from '../../assets/icons/arrow-left.svg';
import star from '../../assets/icons/star.svg';
import starFilled from '../../assets/icons/star-filled.svg'

//--------------CLASS COMPONENT-------------------//
class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id, // MATCHES THE ID IN THE URL (PARAMS)
      movie: [],
      name: this.props.match.params.name,
      isStarClicked: false
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

    //------FAVORITES----//

    if (!localStorage.favoriteMovies) {
      let favoriteMovies = [];
      favoriteMovies.push(JSON.parse(localStorage.getItem('favoriteMovies')));
      localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
      this.setState({
        isStarClicked: false
      })
    } 

    if (JSON.parse(localStorage.getItem('favoriteMovies')).find(item => `${item.id}` === this.state.id)) {
      this.setState({
        isStarClicked: true
      })
      
    } else {
      this.setState({
        isStarClicked:false
      })
    }

    
  }

  // -----------------------------FAVORITES---------------------------------- //

  addMovietoLocalFavorites = (id, poster_path) => {
    // grabs current items and spreads them to a new array. Add new item after it.
    let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
   if (!this.state.isStarClicked) {
    favoriteMovies.push({ id, poster_path });
    // removes any null in array
    const filteredMovies = favoriteMovies.filter(item => item !== null);
    const result = [];
    const map = new Map();
    for (const item of filteredMovies) {
      if (!map.has(item.id)) {
        map.set(item.id, true);
        result.push({
          id: item.id,
          poster_path: item.poster_path
        });
      }
    }

    this.setState({
      isStarClicked: true
    }, () => localStorage.setItem('id', `${id}`))

    
    localStorage.setItem('favoriteMovies', JSON.stringify(result));
   } else {
    let currentShow = favoriteMovies.filter(item => item.id !== id)
    localStorage.removeItem('id')
    localStorage.setItem('favoriteMovies', JSON.stringify(currentShow))
    this.setState({
      isStarClicked: false
    })

  }

    /**
     * To grab items, you must first JSON.parse(localStorage.getItem('favoriteMovies'))
     *  Then you can add it to a new variable.
     *          const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'))
     *  */

    // console log local storage to see what's inside
    console.log(JSON.parse(localStorage.favoriteMovies));
  };

  render() {
    window.scroll(0, 0);
    //--------------DECONSTRUCTING-------------------//
    const movie = this.state.movie;
    //--------------END OF DECONSTRUCTING-------------------//
    return (
      <div className="single-page-containter">
        {/* //--------------HERO SECTION-------------------// */}
        <img
          src={back}
          className="hero-back"
          alt="back"
          onClick={this.props.history.goBack}
        />
        <img
          src={this.state.isStarClicked ? starFilled : star}
          className="hero-star"
          alt="star"
          onClick={() =>
            this.addMovietoLocalFavorites(
              this.state.movie.id,
              this.state.movie.poster_path
            )
          }
        />
        <div className="single-page-hero-info">
          <h1 className="single-page-hero-title">{movie.title}</h1>
          <div className="movie-details">
            <p className="movie-details-text">
              {moment(movie.release_date, 'YYYY-MM-DD').format('MMMM Do YYYY')}
            </p>
            <p className="line-breaks">|</p>
            <p className="movie-details-text">{movie.vote_average}</p>
            <p className="line-breaks">|</p>
            <p className="movie-details-text">Runtime: {movie.runtime} mins</p>
          </div>
          <p className="single-page-hero-desc">{movie.overview}</p>
          <div className="single-page-button-flex">
            <Link to={`/playing/${this.state.id}`} className="button-links">
              <button className="watch-movie">Watch movie</button>
            </Link>
            <Link to={`/trailer/${this.state.id}`} className="button-links">
              <button className="watch-trailer"> Watch trailer </button>
            </Link>
          </div>
        </div>
        <img
          src={'http://image.tmdb.org/t/p/original' + movie.backdrop_path}
          className="full-hero"
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
