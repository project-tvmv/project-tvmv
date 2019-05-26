import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

import back from '../../assets/icons/arrow-left.svg';

class WatchEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      episode: this.props.match.params.episode_number,
      seasonNumber: this.props.match.params.selectedSeason
    };
  }

  render() {
    return (
      <div className='fullscreen-video'>
        <img
          src={back}
          className='trailer-back'
          alt='back'
          onClick={this.props.history.goBack}
        />
        <div className='iframe-container'>
          <iframe
            src={`https://videospider.stream/personal?key=AhWLPUIlhYfa18fg&video_id=${
              this.state.id
            }&tmdb=1&tv=1&s=${this.state.seasonNumber}&e=${this.state.episode}`}
            border='none'
            className='movie'
            title='show'
          />
        </div>
      </div>
    );
  }
}

export default withRouter(WatchEpisode);
