//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import back from '../assets/icons/arrow-left.svg';
import axios from 'axios';
//--------------STYLES-------------------//
import '../App.css';
//--------------CLASS COMPONENT-------------------//
class GenrePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: this.props.match.params.id,
      genreName: this.props.match.params.name,
      pageNumber: 1,
      content: []
    };
  }

  componentDidMount() {
    this.getContent(this.state.genre, this.state.pageNumber);
  }

  getContent = (genre, pageNumber) => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${genre}`
      )
      .then(res => this.setState({ content: res.data.results }))
      .catch(err => console.log(err));
  };

  pageChange = event => {
    if (event.target.name === 'prev' && this.state.pageNumber === 1) {
      return;
    }

    if (event.target.name === 'next') {
      this.getContent(this.state.genre, this.state.pageNumber + 1);
      this.setState({ pageNumber: this.state.pageNumber + 1 });
    } else {
      this.getContent(this.state.genre, this.state.pageNumber - 1);
      this.setState({ pageNumber: this.state.pageNumber - 1 });
    }
  };

  render() {
    window.scroll({ top: 0, behavior: 'smooth' });
    const content = this.state.content;
    const addDefaultSrc = this.props.addDefaultSrc;
    return (
      <>
        <img
          src={back}
          className='hero-back'
          alt='back'
          onClick={this.props.history.goBack}
        />
        <h1 className='genre-header'>{this.state.genreName}</h1>
        {content.slice(0, 1).map(content => (
          <div key={content.id}>
            <img
              src={'http://image.tmdb.org/t/p/original' + content.backdrop_path}
              className='genre-header-poster'
              alt={content.title}
              onError={addDefaultSrc}
            />
          </div>
        ))}
        <div className='full-page-container'>
          {content.slice(0, 18).map((content, index) => (
            <div key={content.id}>
              <Link to={`/movie/${content.id}`}>
                <img
                  src={'http://image.tmdb.org/t/p/w500' + content.poster_path}
                  className='genre-page-poster'
                  onError={addDefaultSrc}
                  alt={content.title}
                />
              </Link>
            </div>
          ))}
          <div className='page-buttons-flex'>
            <button
              className={this.state.pageNumber === 1 ? 'prev-disabled' : 'prev'}
              alt='previous'
              name='prev'
              onClick={this.pageChange}
            >
              Previous Page
            </button>
            <button
              className='next'
              alt='next'
              name='next'
              onClick={this.pageChange}
            >
              Next Page
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(GenrePage);
