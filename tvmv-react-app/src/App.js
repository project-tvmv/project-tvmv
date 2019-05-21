//--------------DEPENDANCIES-------------------//
import React from 'react';
import axios from 'axios';
import bodymovin from 'bodymovin';
//--------------STYLES-------------------//
import './App.css';
//--------------CLASS COMPONENT-------------------//
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      popularMovie: [],
      popularShow: []
    };
  }
  //--------------GET MOST POPULAR MOVIE-------------------//
  componentDidMount() {
    function getPopularMovie() {
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
      .all([getPopularMovie(), getPopularShows()])
      .then(res => {
        console.log(res);
        this.setState({
          popularMovie: res[0].data.results,
          popularShow: res[1].data.results
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <div className='App' id='svgContainer'>
          <h1>Project TVMV</h1>
        </div>
      </>
    );
  }
}

export default App;
