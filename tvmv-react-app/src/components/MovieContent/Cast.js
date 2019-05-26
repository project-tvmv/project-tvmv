//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

//--------------CLASS COMPONENT-------------------//
class Cast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credits: []
    };
  }
  //--------------GETING MOVIE CREDITS-------------------//
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchData();
    }
  }

  fetchData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }/credits?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ credits: res.data.cast }))
      .catch(err => console.log(err));
  };

  render() {
    //--------------DECONSTRUCTING-------------------//
    const credits = this.state.credits;
    //--------------END OF DECONSTRUCTING-------------------//
    return (
      <div>
        <div className='section'>
          <h1 className='section-header'>Starring</h1>
        </div>
        <div className='six-poster-container'>
          {credits.slice(0, 6).map((cast, index) => (
            <div key={cast.id}>
              <div className='section-flex'>
                <Link to={`/actor/${cast.id}`} className='links'>
                  <img
                    src={
                      'https://image.tmdb.org/t/p/original' + cast.profile_path
                    }
                    alt={cast.character}
                    className='cast-posters'
                    onError={this.props.addDefaultSrc}
                  />
                </Link>
                <p className='poster-info'>
                  {cast.name} as {cast.character}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Cast);
