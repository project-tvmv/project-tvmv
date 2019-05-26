//---------------DEPENDENCIES--------------//
import React, { Component } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import {withRouter} from 'react-router-dom'
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
    this.fetchData()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchData()
    }
  } 

  fetchData = () => {
    axios.get(
      ` https://api.themoviedb.org/3/tv/${
        this.props.match.params.id
      }/videos?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
    )
    .then(res => this.setState({ extras: res.data.results }))
    .catch(err => console.log(err));
  }

  render() {
    const extras = this.state.extras;
    if (extras.length === 0) {
      return null;
    } else {
      return (
        <div>
          <div className='section-extras tv-extras'>
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
}

export default withRouter(ShowExtras);
