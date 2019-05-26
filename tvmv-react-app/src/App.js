//--------------DEPENDANCIES-------------------//
import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
//--------------STYLES-------------------//
import './App.css';
//--------------IMPORTS-------------------//
import Home from './components/Home';
import Search from './components/Search';
import SingleMovie from './components/MovieContent/SingleMovie';
import SingleShow from './components/TVContent/SingleShow';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import ActorsPage from './components/ActorsPage';
import GenrePage from './components/GenrePage';
import Movies from './components/MovieContent/Movies';
import MovieResults from './components/MovieContent/MovieResults';
import SearchResults from './components/SearchResults';
import MovieTrailer from './components/MovieContent/MovieTrailer';
import WatchMovie from './components/MovieContent/WatchMovie';
import Television from './components/TVContent/Television';
import TVResults from './components/TVContent/TVResults';
import WatchEpisode from './components/TVContent/WatchEpisode';
require('dotenv').config();
//--------------CLASS COMPONENT-------------------//
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      popularMovies: [],
      popularShows: [],
      newMovies: [],
      newShows: [],
      trendingMovies: [],
      familyMovies: [],
      horrorMovies: [],
      romanticComedies: [],
      comedyMovies: [],
      adamSandler: [],
      kids: [],
      disney: [],
      onAir: [],
      actionShows: [],
      realityTV: [],
      kidsShows: [],
      mysteryShows: [],
      documentaryShows: [],
      disneyChannel: [],
      cartoonNetwork: []
    };
  }
  //--------------MAJOR API CALLS------------------//
  /* There is a bug where if you repeatly click the Home icon in the nav, data starts to get lost... Trying to figure out a fix. */
  componentDidMount() {
    function getPopularMovies() {
      return axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1'
      );
    }
    function getNewMovies() {
      return axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1'
      );
    }

    function getTrendingMovies() {
      return axios.get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=6d9a91a4158b0a021d546ccd83d3f52e'
      );
    }

    function getFamilyMovies() {
      return axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&sort_by=popularity.desc&certification=G&include_adult=false&include_video=false&page=1&with_genres=10751&with_original_language=en'
      );
    }

    function getHorrorMovies() {
      return axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&sort_by=vote_count.desc&certification=MA&include_adult=true&include_video=false&page=1&with_genres=27&with_original_language=en'
      );
    }

    function getRomanticComedyMovies() {
      return axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=10749%2C%2035&without_genres=16&with_original_language=en'
      );
    }

    function getPopularShows() {
      return axios.get(
        'https://api.themoviedb.org/3/tv/popular?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1'
      );
    }
    function getNewShows() {
      return axios.get(
        'https://api.themoviedb.org/3/tv/airing_today?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1'
      );
    }
    function getComedies() {
      return axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&without_genres=16%2C%2010751%2C28%2C27%2C12'
      );
    }
    function getAdamSandler() {
      return axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&region=US&sort_by=popularity.desc&page=1&with_cast=19292'
      );
    }
    function getKids() {
      return axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&region=US&sort_by=popularity.desc&certification=G&include_adult=false&page=1&with_genres=16'
      );
    }
    function getDisney() {
      return axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&region=US&sort_by=popularity.desc&certification=G&include_adult=false&page=1&with_companies=2&with_genres=16'
      );
    }
    function getOnTheAir() {
      return axios.get(
        'https://api.themoviedb.org/3/tv/on_the_air?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1'
      );
    }
    function getActionShows() {
      return axios.get(
        'https://api.themoviedb.org/3/discover/tv?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10759&include_null_first_air_dates=false&with_original_language=en'
      );
    }
    function getRealityShows() {
      return axios.get(
        'https://api.themoviedb.org/3/discover/tv?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10764&include_null_first_air_dates=false&with_original_language=en'
      );
    }
    function getKidsShows() {
      return axios.get(
        'https://api.themoviedb.org/3/discover/tv?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10762&include_null_first_air_dates=false&with_original_language=en'
      );
    }
    function getMysteryShows() {
      return axios.get(
        'https://api.themoviedb.org/3/discover/tv?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=9648&include_null_first_air_dates=false&with_original_language=en'
      );
    }
    function getDocumentaryShows() {
      return axios.get(
        'https://api.themoviedb.org/3/discover/tv?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=99&include_null_first_air_dates=false&with_original_language=en'
      );
    }
    function getDisneyChannel() {
      return axios.get(
        'https://api.themoviedb.org/3/discover/tv?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=54&include_null_first_air_dates=false&with_original_language=en'
      );
    }
    function getCartoonNetwork() {
      return axios.get(
        'https://api.themoviedb.org/3/discover/tv?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=56&include_null_first_air_dates=false&with_original_language=en'
      );
    }
    //--------------AXIOS.ALL Functions------------------//
    axios
      .all([
        getPopularMovies(),
        getPopularShows(),
        getNewMovies(),
        getNewShows(),
        getTrendingMovies(),
        getFamilyMovies(),
        getHorrorMovies(),
        getRomanticComedyMovies(),
        getComedies(),
        getAdamSandler(),
        getKids(),
        getDisney(),
        getOnTheAir(),
        getActionShows(),
        getRealityShows(),
        getKidsShows(),
        getMysteryShows(),
        getDocumentaryShows(),
        getDisneyChannel(),
        getCartoonNetwork()
      ])
      .then(
        axios.spread(
          (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) => {
            this.setState({
              popularMovies: a.data.results,
              popularShows: b.data.results,
              newMovies: c.data.results,
              newShows: d.data.results,
              trendingMovies: e.data.results,
              familyMovies: f.data.results,
              horrorMovies: g.data.results,
              romanticComedies: h.data.results,
              comedyMovies: i.data.results,
              adamSandler: j.data.results,
              kids: k.data.results,
              disney: l.data.results,
              onAir: m.data.results,
              actionShows: n.data.results,
              realityTV: o.data.results,
              kidsShows: p.data.results,
              mysteryShows: q.data.results,
              documentaryShows: r.data.results,
              disneyChannel: s.data.results,
              cartoonNetwork: t.data.results
            });
          }
        )
      )
      .catch(err => console.log(err));
  }

  //-Adds default image for null poster_paths-//
  addDefaultSrc(ev) {
    ev.target.src =
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0a256a75954539.5c5b83fa34dae.jpg';
  }

  render() {
    if (
      /* This checks to see if there is movies and shows, otherwise return the Loading animation to wait. */
      this.state.popularMovies.length &&
      this.state.popularShows.length &&
      this.state.newMovies.length &&
      this.state.newShows.length > 18
    ) {
      return (
        <>
          <div className='App'>
            {/*------------------------Side Navigation---------------*/}
            <Navigation />
            {/*--------------------Home Route-----------------*/}
            <Route
              exact
              path='/'
              render={props => (
                <Home
                  {...props}
                  popularMovies={this.state.popularMovies}
                  popularShows={this.state.popularShows}
                  newMovies={this.state.newMovies}
                  newShows={this.state.newShows}
                  disney={this.state.disney}
                  horrorMovies={this.state.horrorMovies}
                  addDefaultSrc={this.addDefaultSrc}
                  trendingMovies={this.state.trendingMovies}
                  romanticComedies={this.state.romanticComedies}
                />
              )}
            />
            {/*---------------------------Single Movies Route-------------*/}
            <Route
              path='/movie/:id'
              render={props => (
                <SingleMovie
                  {...props}
                  popularMovies={this.state.popularMovies}
                  addDefaultSrc={this.addDefaultSrc}
                />
              )}
            />
            {/*--------------------------Main Movies Page Route-------------*/}
            <Route
              path='/movies'
              render={props => (
                <Movies
                  {...props}
                  popularMovies={this.state.popularMovies}
                  newMovies={this.state.newMovies}
                  trendingMovies={this.state.trendingMovies}
                  familyMovies={this.state.familyMovies}
                  horrorMovies={this.state.horrorMovies}
                  romanticComedies={this.state.romanticComedies}
                  comedyMovies={this.state.comedyMovies}
                  adamSandler={this.state.adamSandler}
                  kids={this.state.kids}
                  disney={this.state.disney}
                  addDefaultSrc={this.addDefaultSrc}
                />
              )}
            />
            <Route
              path='/TV'
              render={props => (
                <Television
                  {...props}
                  popularShows={this.state.popularShows}
                  newShows={this.state.newShows}
                  onAir={this.state.onAir}
                  actionShows={this.state.actionShows}
                  realityTV={this.state.realityTV}
                  kidsShows={this.state.kidsShows}
                  mysteryShows={this.state.mysteryShows}
                  documentaryShows={this.state.documentaryShows}
                  disneyChannel={this.state.disneyChannel}
                  cartoonNetwork={this.state.cartoonNetwork}
                  addDefaultSrc={this.addDefaultSrc}
                />
              )}
            />
            {/*--------------------------Single TV Shows Route-------------*/}
            <Route
              path='/television/:id'
              render={props => (
                <SingleShow {...props} addDefaultSrc={this.addDefaultSrc} />
              )}
            />
            {/*--------------------------Genre Page Route-------------*/}
            <Route
              path='/genres/:id/:name'
              render={props => (
                <GenrePage {...props} addDefaultSrc={this.addDefaultSrc} />
              )}
            />
            {/*--------------------------Actors Page Route-------------*/}
            <Route
              path='/actor/:id'
              render={props => (
                <ActorsPage {...props} addDefaultSrc={this.addDefaultSrc} />
              )}
            />
            {/*--------------------------Movie Search Results Route-------------*/}
            {/*------------------------Search Route---------------*/}
            <Route path='/search' component={Search} />
            <Route
              path='/results/:search'
              render={props => (
                <MovieResults {...props} addDefaultSrc={this.addDefaultSrc} />
              )}
            />
            <Route
              path='/tv-results/:search'
              render={props => (
                <TVResults {...props} addDefaultSrc={this.addDefaultSrc} />
              )}
            />
            <Route
              path='/TV-MOVIE/:search'
              render={props => (
                <SearchResults {...props} addDefaultSrc={this.addDefaultSrc} />
              )}
            />
            <Route path='/trailer/:id' component={MovieTrailer} />
            <Route path='/playing/:id' component={WatchMovie} />
            <Route
              path='/show/:id/:selectedSeason/:episode_number'
              component={WatchEpisode}
            />
          </div>
        </>
      );
    } else return <Loading />;
  }
}

export default App;
