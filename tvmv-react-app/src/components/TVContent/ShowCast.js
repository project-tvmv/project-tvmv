//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import axios from 'axios';
//--------------STYLES-------------------//
import '../../App.css';
//--------------CLASS COMPONENT-------------------//
class ShowCast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credits: []
    };
  }
  componentDidMount() {
    axios
      .get(
        ` https://api.themoviedb.org/3/tv/${
          this.props.id
        }/credits?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ credits: res.data.cast }))
      .catch(err => console.log(err));
  }
  render() {
    const credits = this.state.credits;
    const addDefaultSrc = this.props.addDefaultSrc;
    return (
      <div>
        <div className='section'>
          <h1 className='section-header'>Starring</h1>
        </div>
        <div className='six-poster-container'>
          {credits.slice(0, 6).map((cast, index) => (
            <div key={cast.id}>
              <div className='section-flex'>
                <Tilt
                  className='Tilt'
                  options={{ max: 12, scale: 1.04, perspective: 800 }}
                >
                  <Link to={`/actor/${cast.id}`} className='links'>
                    <img
                      src={
                        'http://image.tmdb.org/t/p/original' + cast.profile_path
                      }
                      alt={cast.character}
                      className='cast-posters'
                      onError={addDefaultSrc}
                    />
                  </Link>
                </Tilt>
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

export default ShowCast;
