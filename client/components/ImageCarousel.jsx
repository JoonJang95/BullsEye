import React from 'react';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var mainSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      className: '.mainSlider',
      slidesToScroll: 1,
      adaptiveHeight: true,
      centerMode: true,
      arrows: false,
    };

    return (
      <div class="sliderWrapper">
        <Slider {...mainSettings}>
          <div>
            <img src={this.props.images} />
          </div>
          <div>
            <img src={this.props.images} />
          </div>
          <div>
            <img src={this.props.images} />
          </div>
          <div>
            <img src={this.props.images} />
          </div>
          <div>
            <img src={this.props.images} />
          </div>
          <div>
            <img src={this.props.images} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
