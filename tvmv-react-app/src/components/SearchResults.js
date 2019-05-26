//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Component } from 'react';
//--------------ASSETS-------------------//
import back from '../assets/icons/arrow-left.svg';
//--------------CLASS COMPONENT-------------------//
class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.match.params.search,
      resultsData: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&language=en-US&query=${
          this.state.results
        }&page=1&include_adult=false`
      )
      .then(res => this.setState({ resultsData: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    const contents = this.state.resultsData;
    return (
      <div className='full-page-container'>
        <img
          src={back}
          className='hero-back'
          alt='back'
          onClick={this.props.history.goBack}
        />
        <h1 className='genre-header'>{this.state.results}</h1>
        {contents.slice(0, 1).map(content => (
          <div key={content.id}>
            <img
              src={'https://image.tmdb.org/t/p/original' + content.backdrop_path}
              className='title-image-section genre-page-posters'
              alt={content.title}
              onError={this.props.addDefaultSrc}
            />
          </div>
        ))}
        {contents.slice(0, 18).map((content, index) => (
          <Link
            to={
              content.media_type === 'movie'
                ? `/movie/${content.id}`
                : `/television/${content.id}`
            }
          >
            <img
              src={'https://image.tmdb.org/t/p/w500' + content.poster_path}
              alt={content.name}
              className='genre-page-poster'
              onError={this.props.addDefaultSrc}
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default SearchResults;
