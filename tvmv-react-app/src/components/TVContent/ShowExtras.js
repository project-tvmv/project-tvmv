//---------------DEPENDENCIES--------------//
import React, { Component } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
//--------------STYLES--------------------//
import '../../App.css';

//-------------CLASS COMPONENT-----------//
class ShowExtras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extras: []
    };
  }

  componentDidMount() {
    axios
      .get(
        ` https://api.themoviedb.org/3/tv/${
          this.props.id
        }/videos?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ extras: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    const extras = this.state.extras;
    const addDefaultSrc = this.props.addDefaultSrc;
    return (
      <div>
        <div className='section-extras'>
          <h1 className='section-header'>Extras</h1>
        </div>
        <div className='extras-container'>
          {extras.slice(0, 3).map((extra, index) => (
            <div key={extra.id}>
              <div className='extra-flex'>
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

export default ShowExtras;
