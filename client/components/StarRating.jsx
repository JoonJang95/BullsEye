import React from 'react';
import StarRatings from 'react-star-ratings';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

class StarRating extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 3.55,
    };
  }

  changeRating(newRating, name) {
    this.setState({
      rating: newRating,
    });
  }

  render() {
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="rgb(255, 215, 0)"
        starDimension="14.5px"
        starSpacing="0.25px"
        numberOfStars={5}
        name="rating"
      />
    );
  }
}

export default StarRating;
