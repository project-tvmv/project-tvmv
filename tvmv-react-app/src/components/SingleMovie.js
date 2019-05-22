//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Component } from 'react';
//--------------CLASS COMPONENT-------------------//
class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      popularMovies: this.props.popularMovies,
      newMovies: this.props.newMovies
    };
  }
  render() {
    return (
      <div className='single-movie-containter'>
        <h1>Welcome to the Movie</h1>
      </div>
    );
  }
}

export default SingleMovie;
