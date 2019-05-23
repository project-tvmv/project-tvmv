//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
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
    return (
      <>
        <div className='actors-content'>
          <img
            src={'http://image.tmdb.org/t/p/original' + name.profile_path}
            className='posters'
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
          <img
            src={'http://image.tmdb.org/t/p/original' + work.backdrop_path}
            className='title-image-section'
          />
        ))}
        <div className='actors-page-container'>
          {filmography.slice(0, 24).map((work, index) => (
            <Tilt
              className='Tilt'
              options={{ max: 10, scale: 1.05, perspective: 500 }}
            >
              <Link to={`/movies/${work.id}`}>
                <img
                  src={'http://image.tmdb.org/t/p/original' + work.poster_path}
                  className='posters actors-page-posters'
                />
              </Link>
            </Tilt>
          ))}
        </div>
      </>
    );
  }
}

export default ActorsPage;

// Example DATA:
// name: [
//     adult:
//     false
//     also_known_as:
//     Array[1]
//     biography:
//     "​From Wikipedia, the free encyclopedia.\n\nThomas John Guiry  (born October 12, 1981) is an American actor. Guiry was born in Trenton, New Jersey and attended St. Gregory the Great school in Hamilton To…"
//     birthday:
//     "1981-10-12"
//     deathday:
//     null
//     gender:
//     2
//     homepage:
//     null
//     id:
//     4729
//     imdb_id:
//     "nm0347509"
//     known_for_department:
//     "Acting"
//     name:
//     "Tom Guiry"
//     place_of_birth:
//     "North Trenton - New Jersey - USA"
//     popularity:
//     0.728
//     profile_path:
//     "/3LcbdkpjePcQk8q4QbRg7uhNMgN.jpg"
// ]
