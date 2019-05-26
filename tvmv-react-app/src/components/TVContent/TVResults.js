/* This is the Movie Results pages that the user is brought to when they've hit submit on the Main Movies (Movie.js) page */

//--------------DEPENDANCIES-------------------//
import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
//--------------ASSETS-------------------//
import back from '../../assets/icons/arrow-left.svg';
//--------------CLASS COMPONENT-------------------//
class TVResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.match.params.search,
      resultsData: [],
      pageNumber: 1
    };
  }
  //-------------- MAIN MOVIE SEARCH RESULTS------------------//
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&query=${
          this.state.results
        }&page=${this.state.pageNumber}&include_adult=false`
      )
      .then(res => this.setState({ resultsData: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    /* DECONSTRUCTING */
    const results = this.state.results;
    const resultsData = this.state.resultsData;
    return (
      <div className='full-page-container'>
        <img
          src={back}
          className='hero-back'
          alt='back'
          onClick={this.props.history.goBack}
        />
        <h1 className='genre-header'>{results}</h1>
        {resultsData.slice(0, 1).map(results => (
          <div key={results.id}>
            <img
              src={'https://image.tmdb.org/t/p/original' + results.backdrop_path}
              className='title-image-section genre-page-posters'
              alt={results.name}
            />
          </div>
        ))}
        {resultsData.slice(0, 20).map((results, index) => (
          <div key={results.id}>
            <Tilt
              className='Tilt'
              options={{ max: 12, scale: 1.04, perspective: 1000 }}
            >
              <Link to={`/television/${results.id}`}>
                <img
                  src={'https://image.tmdb.org/t/p/w500' + results.poster_path}
                  className='genre-page-poster'
                  alt={results.name}
                  onError={this.props.addDefaultSrc}
                />
              </Link>
            </Tilt>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(TVResults);
