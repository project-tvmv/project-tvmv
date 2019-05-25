//---------------Dependencies-------------//
import React, { Component } from 'react';
//---------------Syles-------------------//
import './Search.css';
import Axios from 'axios';
//---------------Syles-------------------//
class Search extends Component {
  state = {
    search: ""
  };

  fetchSearch(search) {
    Axios
    .get(`https://api.themoviedb.org/3/search/multi?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&language=en-US&query=${search}&page=1&include_adult=false`)
    .then(res => {
      console.log("response:", res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  changeHandler = e => {
    this.setState({
      search: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.search)
    this.fetchSearch(this.state.search);
  }


  render() {
    return (
      <div className="search-page">
        <h1>Welcome to Search</h1>
        <form className="search-box">
          <button
          onClick={this.onSubmit}
          >+</button>
          <input
          placeholder="WHAT CAN WE HELP YOU FIND TODAY?"
          name="search"
          value={this.state.search}
          onChange={this.changeHandler}
          />
        </form>
      </div>
    );
  }
}

export default Search;
