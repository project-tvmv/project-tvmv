import React from 'react';
import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import back from '../../assets/icons/arrow-left.svg';

class WatchEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      episode: parseInt(this.props.match.params.episode_number),
      seasonNumber: this.props.match.params.selectedSeason,
      generatedTicket: '',
      ip: [],
      currentEpisode: parseInt(this.props.match.params.episode_number)
    };
  }

  componentDidMount() {
    axios
      .get(`https://ip.seeip.org/geoip`)
      .then(res => {
        this.setState({
          ip: res.data.ip
        });
        axios
          .get(
            `https://cors-anywhere.herokuapp.com/videospider.in/getticket.php?key=AhWLPUIlhYfa18fg&secret_key=42n22l5ug4hp3pcw24ojg6sdee0mzx&video_id=${
              this.state.id
            }&s=${this.state.seasonNumber}&ip=${this.state.ip}`
          )
          .then(res => {
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

  nextEpisode = () => {
    this.setState({
      episode: this.state.episode + 1
    });
    this.setState({
      currentEpisode: this.state.currentEpisode + 1
    });
  };

  render() {
    return (
      <div className='fullscreen-video'>
        <img
          src={back}
          className='trailer-back'
          alt='back'
          onClick={this.props.history.goBack}
        />
        <Link
          onClick={this.nextEpisode}
          to={`/show/${this.props.match.params.id}/${this.state.seasonNumber}/${
            this.state.currentEpisode
          }`}
          className='episode-link'
        >
          <button className='next-episode'>Next Episode</button>
        </Link>
        <div className='iframe-container'>
          <iframe
            src={`https://videospider.stream/getvideo?key=AhWLPUIlhYfa18fg&video_id=${
              this.state.id
            }&tv=1&s=${this.state.seasonNumber}&e=${
              this.state.episode
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
