//---------------Dependencies-------------//
import React, { Component } from 'react';
//---------------Syles-------------------//
import './Search.css';
import Axios from 'axios';
//---------------Syles-------------------//
class Search extends Component {
  state = {
    search: "frozen"
  };

  componentDidMount() {
    Axios
    .get(`https://api.themoviedb.org/3/search/multi?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&language=en-US&query={this.state.search}&page=1&include_adult=false`)
    .then(res => {
      console.log("response:", res)
    })
    .catch(err => {
      console.log(err)
    })
  }


  render() {
    return (
      <div className="search-page">
        <h1>Welcome to Search</h1>
        <form className="search-box">
          <button>+</button>
          <input
          placeholder="WHAT CAN WE HELP YOU FIND TODAY?"
          />
        </form>
      </div>
    );
  }
}

export default Search;
