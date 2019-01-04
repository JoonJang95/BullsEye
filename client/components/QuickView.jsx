import React from 'react';
import Modal from 'react-awesome-modal';
import StarRating from './StarRating.jsx';
import ReactImageMagnify from 'react-image-magnify';

class QuickView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let productData = this.props.data;

    console.log(productData);

    return (
      <Modal
        visible={this.props.modal}
        width="715"
        height="500"
        effect="fadeInUp"
        onClickAway={() => this.props.closeModal()}
      >
        <div class="modalWrapper">
          <div class="modalNameWrapper">
            <div class="modalURL">
              <span>Target</span> / <span>Electronics</span> / <span>Tablets & E-Readers</span>
            </div>
            <div class="modalName">
              {productData.name}
              <div class="modalFullDetails">Get full product details</div>
            </div>
          </div>
          <div class="modalCarousel">
            <img class="modalImage" src={productData.imageURL} />
          </div>
          <div class="modalInfoColumn">
            <div class="modalCloseButton" onClick={this.props.closeModal}>
              X
            </div>
            <div class="modalPrice">${productData.price}</div>
            <div class="modalStarRating">
              <StarRating />
              <span class="modalRatingText">1786 | 91 Questions</span>
            </div>
            <div class="modalWarrantyText">
              <label class="modalWarrantyDescription">
                2 year Target + SquareTrade Tablets Protection Plan with Accidental Damage Coverage
                <input type="checkbox" class="modalWarrantyCheckBox" />
                <span class="modalCheckmark" />
              </label>
            </div>
            <span class="modalWarrantyPrice">$80.00</span>
            <span class="modalPlanDetails">See plan details</span>

            <div class="modalColorSection">
              <div class="modalColorText">Color: ...</div>
              <div class="modalColorSelect">
                <span id="modalColorOption1" class="modalColorOption">
                  .
                </span>
                <span id="modalColorOption2" class="modalColorOption">
                  .
                </span>
                <span id="modalColorOption3" class="modalColorOption">
                  .
                </span>
              </div>
            </div>
            <div class="modalSizeSection">
              <div class="modalSizeText">Size ...</div>
              <div class="modalSizeSelect">
                <span id="modalSizeOption1" class="modalSizeSelect">
                  .
                </span>
                <span id="modalSizeOption2" class="modalSizeSelect">
                  .
                </span>
              </div>
            </div>
            <div class="modalQuantitySelect">
              <form>
                <label class="modalQuantity">
                  Quantity:{'   '}
                  <select class="modalSelectOptions">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </label>
              </form>
            </div>
            <div class="modalCheckOutButtons">
              <button>Add to Cart</button>
              <button>WishList</button>
            </div>
            <div class="modalFeedbackText">
              <div>Help us improve this page</div>
            </div>
          </div>
          <div class="modalProductDetails">. </div>
        </div>
      </Modal>
    );
  }
}

export default QuickView;
