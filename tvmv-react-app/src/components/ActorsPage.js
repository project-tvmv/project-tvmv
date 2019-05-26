//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
//--------------STYLES-------------------//
import '../App.css';
import './ActorsPage.css';
//--------------CLASS COMPONENT-------------------//

class ActorsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmography: [],
      id: this.props.match.params.id,
      name: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${
          this.state.id
        }/combined_credits?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ filmography: res.data.cast }))
      .catch(err => console.log(err));

    axios
      .get(
        `https://api.themoviedb.org/3/person/${
          this.state.id
        }?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ name: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const filmography = this.state.filmography;
    const name = this.state.name;
    const addDefaultSrc = this.props.addDefaultSrc;
    return (
      <>
        <div className='actors-content'>
          <img
            src={'https://image.tmdb.org/t/p/w500' + name.profile_path}
            className='actors-posters'
            alt={name.name}
            onError={addDefaultSrc}
          />
          <div className='actor-info'>
            <h1 className='actor-name'>{name.name}</h1>
            <p className='actor-birthday'>
              Born {moment(name.birthday, 'YYYY-MM-DD').format('MMMM Do YYYY')}
            </p>
            <p className='actor-birthplace'>From {name.place_of_birth}</p>
            <p className='actor-bio'>{name.biography}</p>
          </div>
        </div>
        <h1 className='image-section-header'>FILMOGRAPHY</h1>
        {filmography.slice(0, 1).map((work, index) => (
          <div key={work.id}>
            <img
              src={'https://image.tmdb.org/t/p/original' + work.backdrop_path}
              className='title-image-section'
              alt={work.title}
            />
          </div>
        ))}
        <div className='actors-page-container'>
          {filmography.map((work, index) => (
            <div key={work.id}>
              <Link to={`/movie/${work.id}`}>
                <img
                  src={'https://image.tmdb.org/t/p/w500' + work.poster_path}
                  className='actors-page-posters'
                  alt={work.title}
                  onError={addDefaultSrc}
                />
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ActorsPage;
