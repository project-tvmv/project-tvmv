//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
//--------------STYLES-------------------//
import './GenreButton.css';
//--------------STATELESS COMPONENT-------------------//
class GenreButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US'
      )
      .then(res => this.setState({ genres: res.data.genres }))
      .catch(err => console.log(err));
  }

  render() {
    const genres = this.state.genres;
    return (
      <div className='genre-buttons-container'>
        {genres.map((genre, index) => (
          <NavLink
            key={genre.name}
            to={`/genres/${genre.id}`}
            className='genre-links'
          >
            <button className='genre-buttons'>{genre.name}</button>
          </NavLink>
        ))}
      </div>
    );
  }
}

export default GenreButtons;
