//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
//--------------STYLES-------------------//
import '../../App.css';
//--------------CLASS COMPONENT-------------------//
class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.props.id
        }/recommendations?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1`
      )
      .then(res => this.setState({ recommended: res.data.results }))
      .catch(err => console.log(err));
  }

  fetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.props.id
        }/recommendations?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1`
      )
      .then(res => {
        this.setState({ recommended: res.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const recommended = this.state.recommended;
    return (
      <div>
        <div className='section'>
          <h1 className='section-header'>Recommended</h1>
        </div>
        <div className='six-poster-container'>
          {recommended.slice(0, 6).map((recommend, index) => (
            <div>
              <Link to={`/movies/${recommend.id}`} onClick={this.fetchData}>
                <Tilt
                  className='Tilt'
                  options={{ max: 10, scale: 1.05, perspective: 500 }}
                >
                  <img
                    src={
                      'http://image.tmdb.org/t/p/original' +
                      recommend.poster_path
                    }
                    alt={recommend.name}
                    className='posters'
                  />
                </Tilt>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Recommended;
