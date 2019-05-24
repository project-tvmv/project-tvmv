//--------------DEPENDANCIES-------------------//
import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
//--------------STYLES-------------------//
import './App.css';
//--------------IMPORTS-------------------//
import Home from './components/Home';
import Search from './components/Search';
import SingleMovie from './components/SingleMovie';
import SingleShow from './components/SingleShow';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import ActorsPage from './components/ActorsPage';
import GenrePage from './components/GenrePage';
import Movies from './components/Movies';
import MovieResults from './components/MovieResults';
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
      romanticComedies: []
    };
  }
  //--------------GET MOST POPULAR MOVIE------------------//
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
    axios
      .all([
        getPopularMovies(),
        getPopularShows(),
        getNewMovies(),
        getNewShows(),
        getTrendingMovies(),
        getFamilyMovies(),
        getHorrorMovies(),
        getRomanticComedyMovies()
      ])
      .then(res => {
        console.log(res);
        this.setState({
          popularMovies: res[0].data.results,
          popularShows: res[1].data.results,
          newMovies: res[2].data.results,
          newShows: res[3].data.results,
          trendingMovies: res[4].data.results,
          familyMovies: res[5].data.results,
          horrorMovies: res[6].data.results,
          romanticComedies: res[7].data.results
        });
      })
      .catch(err => console.log(err));
  }

  // Adds default image for null poster_paths //
  addDefaultSrc(ev) {
    ev.target.src =
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/61dd0774136783.5c27c9751f292.jpg';
  }

  render() {
    if (
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
                />
              )}
            />
            {/*------------------------Search Route---------------*/}
            <Route path='/search' render={props => <Search />} />
            {/*---------------------------Movies Route-------------*/}
            <Route
              path='/movie/:id'
              render={props => (
                <SingleMovie
                  {...props}
                  popularMovies={this.state.popularMovies}
                />
              )}
            />
            {/*--------------------------Movies Page Route-------------*/}
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
                />
              )}
            />
            {/*--------------------------TV Shows Route-------------*/}
            <Route
              path='/television/:id'
              render={props => <SingleShow {...props} />}
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
            {/*--------------------------Movie Results Route-------------*/}
            <Route path='/movies/results/:query' component={MovieResults} />
          </div>
        </>
      );
    } else return <Loading />;
  }
}

export default App;
