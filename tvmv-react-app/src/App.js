//--------------DEPENDANCIES-------------------//
import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
//--------------STYLES-------------------//
import './App.css';
//--------------IMPORTS-------------------//
import Home from './components/Home';
//--------------CLASS COMPONENT-------------------//
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      popularMovies: [],
      popularShows: []
    };
  }
  //--------------GET MOST POPULAR MOVIE-------------------//
  componentDidMount() {
    function getPopularMovies() {
      return axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1'
      );
    }
    function getPopularShows() {
      return axios.get(
        'https://api.themoviedb.org/3/tv/popular?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1'
      );
    }
    axios
      .all([getPopularMovies(), getPopularShows()])
      .then(res => {
        console.log(res);
        this.setState({
          popularMovies: res[0].data.results,
          popularShows: res[1].data.results
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
              />
            )}
          />
        </div>
      </>
    );
  }
}

export default App;
