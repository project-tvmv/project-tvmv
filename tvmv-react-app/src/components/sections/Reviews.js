import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import '../../App.css';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.props.id
        }/reviews?api_key=6d9a91a4158b0a021d546ccd83d3f52e&language=en-US&page=1`
      )
      .then(res => this.setState({ reviews: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    const reviews = this.state.reviews;
    return (
      <div>
        <div className='section'>
          <h1 className='section-header'>Reviews</h1>
        </div>
        <div className='reviews-container'>
          {reviews.map(review => (
            <div key={review.id}>
              <h2 className='review-author'>{review.author}</h2>
              <p className='review-content'>{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Reviews;
