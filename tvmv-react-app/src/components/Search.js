//---------------Dependencies-------------//
import React, { Component } from 'react';
import SearchResults from './SearchResults';

//---------------Syles-------------------//
import './Search.css';
import axios from 'axios';
//---------------Syles-------------------//
class Search extends Component {
  state = {
    search: "",
    searchData: []
  };

  fetchSearch(search) {
    axios
    .get(`https://api.themoviedb.org/3/search/multi?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&language=en-US&query=${search}&page=1&include_adult=false`)
    .then(res => {
      console.log("response:", res)
      this.setState({ 
        searchData: res.data.results
      })
    })
    .catch(err => {
      console.log("errors:", err)
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
    this.setState({
      search: ''
    })
  }


  render() {
    console.log("results", this.state.searchData)
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

        <div className="search-results">
           {this.state.searchData.map( item => {
             return (
               <SearchResults item={item} key={item.id} />
             )
           } )}
        </div>
      </div>
    );
  }
}

export default Search;
