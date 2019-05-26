//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchData()
    }
  } 

  fetchData = () => {
    axios
      .get(
        ` https://api.themoviedb.org/3/tv/${
          this.props.match.params.id
        }/credits?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ credits: res.data.cast }))
      .catch(err => console.log(err));
  }

  render() {
    const credits = this.state.credits;
    const addDefaultSrc = this.props.addDefaultSrc;
    if (credits.length === 0) {
      return null;
    } else {
      return (
        <div>
          <div className='section'>
            <h1 className='section-header'>Starring</h1>
          </div>
          <div className='cast-container'>
            {credits.slice(0, 6).map((cast, index) => (
              <div key={cast.id}>
                <div className='section-flex'>
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
}

export default withRouter(ShowCast);
