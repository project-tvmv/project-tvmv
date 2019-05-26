//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';
//--------------STYLES-------------------//
import '../../App.css';
//--------------CLASS COMPONENT-------------------//
class Extras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extras: []
    };
  }

  //--------------GETING MOVIE EXTRAS-------------------//
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
        }/videos?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ extras: res.data.results }))
      .catch(err => console.log(err));
  };

  render() {
    //--------------DECONSTRUCTING-------------------//
    const extras = this.state.extras;
    //--------------END DECONSTRUCTING-------------------//
    if (extras.length === 0) {
      return (
        <div>
          <div className='section-extras'>
            <h1 className='section-header'>Extras</h1>
          </div>
          <div className='extras-container'>
            <h1 className='extras-error-message'>Could not retrieve extras.</h1>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className='section-extras'>
          <h1 className='section-header'>Extras</h1>
        </div>
        <div className='extras-container'>
          {extras.slice(0, 3).map((extra, index) => (
            <div key={extra.id}>
              <div className='extras-flex'>
                <ReactPlayer
                  url={`https://www.youtube.com/embed/${extra.key}`}
                  width='45vh'
                  height='25vh'
                  pip={true}
                  controls={true}
                  light={true}
                  className='video'
                  playing={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Extras);
