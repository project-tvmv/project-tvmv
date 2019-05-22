//--------------DEPENDANCIES-------------------//
import React from "react";
import { Component } from "react";
import axios from "axios";
//--------------CLASS COMPONENT-------------------//
class SingleShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      show: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.state.id
        }?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US`
      )
      .then(res => this.setState({ show: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    const show = this.state.show;
    return (
      <div className="single-show-container">
        <h1>{show.name}</h1>
      </div>
    );
  }
}

export default SingleShow;
