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
require('dotenv').config();
//--------------CLASS COMPONENT-------------------//
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      popularMovies: [],
      popularShows: [],
      newMovies: [],
      newShows: []
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
        getNewShows()
      ])
      .then(res => {
        console.log(res);
        this.setState({
          popularMovies: res[0].data.results,
          popularShows: res[1].data.results,
          newMovies: res[2].data.results,
          newShows: res[3].data.results
        });
      })
      .catch(err => console.log(err));
  }

  // Adds default image for null poster_paths //
  addDefaultSrc(ev) {
    ev.target.src =
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9e16ed49631881.58b9ed7bbcf26.jpg';
  }

  render() {
    if (
      this.state.popularMovies.length &&
      this.state.popularShows.length &&
      this.state.newMovies.length &&
      this.state.newShows.length > 1
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
              path='/movies/:id'
              render={props => (
                <SingleMovie
                  {...props}
                  popularMovies={this.state.popularMovies}
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
              path='/genres/:id'
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
          </div>
        </>
      );
    } else return <Loading />;
  }
}

export default App;
