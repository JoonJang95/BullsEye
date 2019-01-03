import React from 'react';
import $ from 'jquery';
import scrollTo from 'jquery.scrollto';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);

    this.renderScrollButtons = this.renderScrollButtons.bind(this);
    this.removeScrollButtons = this.removeScrollButtons.bind(this);
  }

  renderScrollButtons() {
    $('.scrollButton')
      .css('border-color', '#666666')
      .css('color', 'black');
  }

  removeScrollButtons() {
    $('.scrollButton')
      .css('border-color', 'transparent')
      .css('color', 'transparent');
  }

  clickHandlerRight(e) {
    $('#relatedItemsList').scrollTo('max', 425);
  }

  clickHandlerLeft(e) {
    $('#relatedItemsList').scrollTo(0, 425);
  }

  render() {
    return (
      <div id="recommendationsProducts">
        <div
          class="scrollDiv1"
          onMouseOver={this.renderScrollButtons}
          onMouseLeave={this.removeScrollButtons}
        >
          <button class="scrollButton" onClick={this.clickHandlerLeft}>
            &#8249;
          </button>
        </div>
        <ul id="relatedItemsList">
          {this.props.relatedProducts.map(item => {
            let AppleProduct = () => {
              return (
                <div class="productName appleName">
                  Apple<sup>®</sup>{' '}
                  {item.name.length > 20 ? `${item.name.slice(5, 23)}...` : item.name.slice(5)}
                </div>
              );
            };

            let NonAppleProduct = () => {
              return <div class="productName nonAppleName">{`${item.name.slice(0, 23)}...`}</div>;
            };

            return (
              <li>
                <div class="imageRows">
                  <img
                    src={item.imageURL}
                    data-imageurl={item.imageURL}
                    data-categoryname={item.categoryName}
                    data-price={item.price}
                    data-name={item.name}
                    data-productid={item.id}
                    onClick={this.props.func}
                  />

                  <div
                    class="quickView"
                    data-imageurl={item.imageURL}
                    data-categoryname={item.categoryName}
                    data-price={item.price}
                    data-name={item.name}
                    data-productid={item.id}
                    onClick={this.props.setQuickView}
                  >
                    Quick Shop
                  </div>
                  <div class="whiteBox">.</div>
                  <div
                    class="productInformation"
                    data-imageurl={item.imageURL}
                    data-categoryname={item.categoryName}
                    data-price={item.price}
                    data-name={item.name}
                    data-productid={item.id}
                    onClick={this.props.func}
                  >
                    <b
                      class="itemPrice"
                      data-imageurl={item.imageURL}
                      data-categoryname={item.categoryName}
                      data-price={item.price}
                      data-name={item.name}
                      data-productid={item.id}
                      onClick={this.props.func}
                    >
                      ${item.price}
                    </b>
                    {item.categoryName === 'appleTablets' ? <AppleProduct /> : <NonAppleProduct />}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div
          class="scrollDiv2"
          onMouseOver={this.renderScrollButtons}
          onMouseLeave={this.removeScrollButtons}
        >
          <button class="scrollButton scrollRight" onClick={this.clickHandlerRight}>
            &#8250;
          </button>
        </div>
        {/* <div id="circles">
          <div id="circleScroller" />
          <div id="circleScroller" />
        </div> */}
      </div>
    );
  }
}

export default RelatedItems;
