//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import axios from 'axios';
//--------------STYLES-------------------//
import '../App.css';
//--------------CLASS COMPONENT-------------------//
class GenrePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: this.props.match.params.id,
      genreName: 'Null',
      pageNumber: 1,
      content: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
          this.state.pageNumber
        }&with_genres=${this.state.genre}`
      )
      .then(res => this.setState({ content: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    const content = this.state.content;
    const addDefaultSrc = this.props.addDefaultSrc;
    return (
      <div className='full-page-container'>
        <h1 className='genre-header'>{this.state.genreName}</h1>
        {content.slice(0, 1).map(content => (
          <img
            src={'http://image.tmdb.org/t/p/w500' + content.backdrop_path}
            className='title-image-section genre-page-posters'
            alt={content.title}
          />
        ))}
        {content.splice(0, 18).map((content, index) => (
          <Tilt
            className='Tilt'
            options={{ max: 10, scale: 1.05, perspective: 500 }}
          >
            <Link to={`/movies/${content.id}`}>
              <img
                src={'http://image.tmdb.org/t/p/w500' + content.poster_path}
                className='posters genre-page-poster'
                onError={addDefaultSrc}
                alt={content.title}
              />
            </Link>
          </Tilt>
        ))}
      </div>
    );
  }
}

export default GenrePage;
