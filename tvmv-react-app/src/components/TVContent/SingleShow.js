//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
//--------------STYLES-------------------------//
import '../../App.css';
//--------------COMPONENTS-------------------------//
import ShowCast from './ShowCast';
import ShowExtras from './ShowExtras';
import ShowRecommended from './ShowRecommended';
//--------------ASSETS------------------------//
import back from '../../assets/icons/arrow-left.svg';
import star from '../../assets/icons/star.svg';
import starFilled from '../../assets/icons/star-filled.svg';
//--------------CLASS COMPONENT-------------------//
class SingleShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id, // MATCHES THE ID IN THE URL (PARAMS)
      show: [],
      episodes: [],
      seasons: [],
      selectedSeason: 1,
      selectedEpisode: null,
      isStarClicked: false
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

    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }?language=en-US&api_key=6d9a91a4158b0a021d546ccd83d3f52e`
      )
      .then(res => this.setState({ seasons: res.data.seasons }))
      .catch(err => console.log(err));

    axios
      .get(
        ` https://api.themoviedb.org/3/tv/${this.state.id}/season/${
          this.state.selectedSeason
        }?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ episodes: res.data.episodes }))
      .catch(err => console.log(err));

    //---- FAVORITE SECTION -----//
    if (!localStorage.favoriteShows) {
      let favoriteShows = [];
      favoriteShows.push(JSON.parse(localStorage.getItem('favoriteShows')));
      localStorage.setItem('favoriteShows', JSON.stringify(favoriteShows));
    }

    if (
      JSON.parse(localStorage.getItem('favoriteShows')).find(
        item => `${item.id}` === this.state.id
      )
    ) {
      this.setState({
        isStarClicked: true
      });
    } else {
      this.setState({
        isStarClicked: false
      });
    }
  }

  selectSeason = number => {
    this.setState({ selectedSeason: number });
    this.getEpisodes(number);
  };

  componentWillReceiveProps = nextProps => {
    let episodeNum = nextProps.match.params.episodeNumber;
    if (episodeNum && episodeNum !== this.state.selectedEpisode) {
      console.log('component recieved new props');
      this.setState({ selectedEpisode: episodeNum });
    }
  };

  // -----------------------------FAVORITES---------------------------------- //

  addShowtoLocalFavorites = (id, poster_path) => {
    // grabs current items and spreads them to a new array. Add new item after it.
    let favoriteShows = JSON.parse(localStorage.getItem('favoriteShows'));
    if (!this.state.isStarClicked || favoriteShows === null) {
      favoriteShows.push({ id, poster_path });
      // removes any null in array
      const filteredShows = favoriteShows.filter(item => item !== null);
      const result = [];
      const map = new Map();
      for (const item of filteredShows) {
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
      });

      localStorage.setItem('favoriteShows', JSON.stringify(result));
    } else {
      let currentShow = favoriteShows.filter(item => item.id !== id);
      localStorage.setItem('favoriteShows', JSON.stringify(currentShow));
      this.setState({
        isStarClicked: false
      });
    }

    /**
     * To grab items, you must first JSON.parse(localStorage.getItem('favoriteShows'))
     *  Then you can add it to a new variable.
     *          const favoriteShows = JSON.parse(localStorage.getItem('favoriteShows'))
     *  */

    // console log local storage to see what's inside
    console.log(JSON.parse(localStorage.favoriteShows));
  };

  //----------------------------UNSTAR FAVE---------------------------//

  // -----------------------------EPISODES---------------------------------- //
  getEpisodes = seasonNumber => {
    axios
      .get(
        ` https://api.themoviedb.org/3/tv/${
          this.state.id
        }/season/${seasonNumber}?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ episodes: res.data.episodes }))
      .catch(err => console.log(err));
  };

  render() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
    //--------------DECONSTRUCTING-------------------//
    const show = this.state.show;
    const episodes = this.state.episodes;
    const seasons = this.state.seasons;
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
        <img
          src={this.state.isStarClicked ? starFilled : star}
          className='hero-star'
          alt='star'
          onClick={() =>
            this.addShowtoLocalFavorites(
              this.state.show.id,
              this.state.show.poster_path
            )
          }
        />
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
          <Link to={`/show/${this.state.id}/1/1`} className='button-links'>
            <button className='watch-movie'>Start watching</button>
          </Link>
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
        <div className='tv-select-container'>
          <h1 className='section'>Episodes</h1>
          <h1 className='section seasons-header'>
            Season {this.state.selectedSeason}{' '}
          </h1>
        </div>
        <div className='seasons-flex'>
          {seasons.map(season => (
            <p
              className='seasons'
              onClick={() => this.selectSeason(season.season_number)}
            >
              {season.season_number}
            </p>
          ))}
        </div>
        <div className='episodes-container'>
          {episodes.map(episode => (
            <>
              <div className='episode-container'>
                <Link
                  to={`/show/${this.state.id}/${this.state.selectedSeason}/${
                    episode.episode_number
                  }`}
                  className='links'
                >
                  <img
                    src={'http://image.tmdb.org/t/p/w500' + episode.still_path}
                    className='episode-photo'
                    alt={episode.name}
                    onError={this.props.addDefaultSrc}
                  />
                  <div className='episode-info-flex'>
                    <p className='episode-number'>{episode.episode_number}.</p>
                    <p className='episode-name'>{episode.name}</p>
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>
        <ShowCast id={this.state.id} addDefaultSrc={addDefaultSrc} />
        <ShowExtras id={this.state.id} addDefaultSrc={addDefaultSrc} />
        <ShowRecommended id={this.state.id} addDefaultSrc={addDefaultSrc} />
      </div>
    );
  }
}

export default withRouter(SingleShow);
