//--------------DEPENDANCIES-------------------//
import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
//--------------STYLES-------------------//
import './App.css';
//--------------IMPORTS-------------------//
import Home from './components/Home';
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
  //--------------GET MOST POPULAR MOVIE-------------------//
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

  render() {
    return (
      <>
        <div className='App'>
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
        </div>
      </>
    );
  }
}

export default App;
