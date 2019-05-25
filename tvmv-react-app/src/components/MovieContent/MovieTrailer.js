import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';

import back from '../../assets/icons/arrow-left.svg';

class MovieTrailer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trailer: '',
      youtube: [],
      id: this.props.match.params.id
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.state.id
        }/videos?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ youtube: res.data.results[0] }))
      .catch(err => console.log(err));
  }

  render() {
    const youtube = this.state.youtube;
    return (
      <div className='fullscreen-video'>
        <img
          src={back}
          className='trailer-back'
          alt='back'
          onClick={this.props.history.goBack}
        />
        <ReactPlayer
          url={`https://www.youtube.com/embed/${youtube.key}`}
          width='100%'
          height='100vh'
          pip={true}
          controls={true}
          light={true}
          className='trailer'
          playing={true}
          loop={true}
        />
      </div>
    );
  }
}

export default withRouter(MovieTrailer);
