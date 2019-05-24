//--------------DEPENDANCIES-------------------//
import React from 'react';
import axios from 'axios';
import { Component } from 'react';
//--------------CLASS COMPONENT-------------------//
class MovieResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.query !== nextProps.match.params.query) {
      let query = this.props.match.params.query;
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&query=${query}&page=1`
        )
        .then(({ data }) => {
          console.log(data);
          this.setState({
            results: data.results
          });
        });
    }
  }

  render() {
    return (
      <div>
        <h1>Hello from search!</h1>
      </div>
    );
  }
}

export default MovieResults;
