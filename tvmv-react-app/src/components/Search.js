//---------------Dependencies-------------//
import React, { Component } from 'react';
import SearchResults from './SearchResults';

//---------------Syles-------------------//
import './Search.css';
import axios from 'axios';
import search from '../assets/icons/search.svg';
//---------------Syles-------------------//
class Search extends Component {
  state = {
    search: '',
    searchData: []
  };

  fetchSearch(search) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&language=en-US&query=${search}&page=1&include_adult=false`
      )
      .then(res => {
        console.log('response:', res);
        this.setState({
          searchData: res.data.results
        });
      })
      .catch(err => {
        console.log('errors:', err);
      });
  }

  changeHandler = e => {
    this.setState({
      search: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.search);
    this.fetchSearch(this.state.search);
    this.setState({
      search: ''
    });
  };

  render() {
    console.log('results', this.state.searchData);
    return (
      <div className='search-page'>
        <img src={search} alt='search-icon' className='search-page-icon' />
        <form className='search-form' onSubmit={this.onSubmit}>
          <input
            placeholder='WHAT CAN WE HELP YOU FIND TODAY?'
            name='search'
            value={this.state.search}
            onChange={this.changeHandler}
            className='search-page-form'
          />
        </form>

        <div className='search-results'>
          {this.state.searchData.map(item => {
            return <SearchResults item={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Search;
