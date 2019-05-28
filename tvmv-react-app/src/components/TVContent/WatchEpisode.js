import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import back from '../../assets/icons/arrow-left.svg';

class WatchEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      episode: this.props.match.params.episode_number,
      seasonNumber: this.props.match.params.selectedSeason,
      ip: [],
      generatedTicket: ''
    };
  }

  componentDidMount() {
    axios
      .get(`https://ip.seeip.org/geoip`)
      .then(res => {
        console.log('ip:', res.data.ip);
        this.setState({
          ip: res.data.ip
        });
        axios
          .get(
            `https://cors-anywhere.herokuapp.com/videospider.in/getticket.php?key=AhWLPUIlhYfa18fg&secret_key=42n22l5ug4hp3pcw24ojg6sdee0mzx&video_id=${
              this.state.id
            }&s=1&ip=${this.state.ip}`
          )
          .then(res => {
            console.log('response:', res);
            this.setState({
              generatedTicket: res.data
            });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
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
            src={`https://videospider.stream/getvideo?key=AhWLPUIlhYfa18fg&video_id=${
              this.state.id
            }&tv=1&s=${this.state.seasonNumber}&e=${
              this.state.episode_number
            }&tmdb=1&ticket=${this.state.generatedTicket}`}
            border='none'
            className='movie'
            title='show'
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default withRouter(WatchEpisode);
