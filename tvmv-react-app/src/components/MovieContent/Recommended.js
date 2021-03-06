//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Tilt from 'react-tilt';
//--------------STYLES-------------------//
import '../../App.css';
//--------------CLASS COMPONENT-------------------//
class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended: [],
      id: this.props.id,
      recommendId: this.props.id
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.state.id
        }/similar?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1`
      )
      .then(res => this.setState({ recommended: res.data.results }))
      .catch(err => console.log(err));
  }

  fetchData = id => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }/similar?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1`
      )
      .then(res => {
        this.setState({ recommended: res.data.results });
        this.props.history.push(`/movie/${id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const recommended = this.state.recommended;
    if (recommended.length === 0) {
      return null;
    } else {
      return (
        <div>
          <div className='section'>
            <h1 className='section-header'>Recommended</h1>
          </div>
          <div className='six-poster-container'>
            {recommended.slice(0, 8).map((recommend, index) => (
              <div key={recommend.id}>
                <div onClick={() => this.fetchData(recommend.id)}>
                  <Tilt
                    className='Tilt'
                    options={{ max: 12, scale: 1.04, perspective: 1000 }}
                  >
                    <img
                      src={
                        'https://image.tmdb.org/t/p/w500' + recommend.poster_path
                      }
                      alt={recommend.name}
                      className='posters'
                      onError={this.props.addDefaultSrc}
                    />
                  </Tilt>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Recommended);
