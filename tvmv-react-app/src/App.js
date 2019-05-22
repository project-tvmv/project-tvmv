//--------------DEPENDANCIES-------------------//
import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
//--------------STYLES-------------------//
import './App.css';
//--------------IMPORTS-------------------//
import Home from './components/Home';
import Search from './components/Search';
import Movies from './components/Movies';
import Television from './components/Television';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
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
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          process.env.REACT_APP_KEY
        }&language=en-US&page=1`
      );
    }
    function getNewMovies() {
      return axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          process.env.REACT_APP_KEY
        }&language=en-US&page=1`
      );
    }
    function getPopularShows() {
      return axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${
          process.env.REACT_APP_KEY
        }&language=en-US&page=1`
      );
    }
    function getNewShows() {
      return axios.get(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${
          process.env.REACT_APP_KEY
        }&language=en-US&page=1`
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
        this.setState({
          popularMovies: res[0].data.results,
          popularShows: res[1].data.results,
          newMovies: res[2].data.results,
          newShows: res[3].data.results
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (
      this.state.popularMovies.length &&
      this.state.popularShows.length &&
      this.state.newMovies.length &&
      this.state.newShows.length > 19
    ) {
      return (
        <>
          <div className='App'>
            {/*------------------------Side Navigation---------------*/}
            <Navigation />
            {/*------------------------Search Route---------------*/}
            <Route exact path='/search' render={props => <Search />} />
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
            {/*---------------------------Movies Route-------------*/}
            <Route
              exact
              path='/movies/:id'
              render={props => (
                <Movies {...props} popularMovies={this.state.popularMovies} />
              )}
            />
            {/*--------------------------TV Shows Route-------------*/}
            <Route
              exact
              path='/television/:id'
              render={props => (
                <Television {...props} popularShows={this.state.popularShows} />
              )}
            />
          </div>
        </>
      );
    } else return <Loading />;
  }
}

export default App;
