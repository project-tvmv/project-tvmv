//--------------DEPENDANCIES------------//
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
//--------------STYLES------------------//
import '../../App.css';
//--------------CLASS COMPONENTS--------//
class ShowRecommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended: [],
      id: this.props.id,
      fetchId: this.props.id
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.props.id
        }/recommendations?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1`
      )
      .then(res => this.setState({ recommended: res.data.results }))
      .catch(err => console.log(err));
  }

  fetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.fetchId
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
    const addDefaultSrc = this.props.addDefaultSrc;
    return (
      <div>
        <div className='section'>
          <h1 className='section-header'>Recommended</h1>
        </div>
        <div className='six-poster-container'>
          {recommended.slice(0, 8).map((recommend, index) => (
            <div key={recommend.id}>
              <Link to={`/television/${recommend.id}`} onClick={this.fetchData}>
                <Tilt
                  className='Tilt'
                  options={{ max: 12, scale: 1.04, perspective: 800 }}
                >
                  <img
                    src={
                      'http://image.tmdb.org/t/p/original' +
                      recommend.poster_path
                    }
                    alt={recommend.name}
                    className='posters'
                    onError={addDefaultSrc}
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

export default ShowRecommended;
