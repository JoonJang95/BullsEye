import React from 'react';
import Modal from 'react-awesome-modal';
import ReactImageMagnify from 'react-image-magnify';
import StarRating from './StarRating.jsx';
import ImageCarousel from './ImageCarousel.jsx';

class QuickView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let productData = this.props.data;

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
            <ImageCarousel images={productData.imageURL} />
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
              <div class="modalColorText">
                Color: <span>Space Gray</span>
              </div>
              <div class="modalColorSelect">
                <div id="modalColorOption1" class="modalColorOption">
                  .
                </div>
                <div id="modalColorOption2" class="modalColorOption">
                  .
                </div>
                <div id="modalColorOption3" class="modalColorOption">
                  .
                </div>
              </div>
            </div>
            <div class="modalSizeSection">
              <div class="modalSizeText">
                Size: <span>128 GB</span>
              </div>
              <div class="modalSizeSelect">
                <div id="modalSizeOption1" class="modalSizeOption">
                  32GB
                </div>
                <div id="modalSizeOption2" class="modalSizeOption">
                  128GB
                </div>
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
              <div id="modalCartButton">Add to Cart</div>
              <div id="modalWishButton">WishList</div>
            </div>
            <div class="modalFeedbackText">
              <div>Help us improve this page</div>
            </div>
          </div>
          <div class="modalProductDetails">
            <p>
              iPad. Like a computer.
              <br />
              <br />
              Unlike any computer. Create, learn, work, and play like never before. An immersive
              9.7-inch Multi-Touch Retina display.1 A10 Fusion chip with the power and capability
              you'd expect from a computer. Now supports Apple Pencil.2 8MP camera. FaceTime HD
              camera. Touch ID and Apple Pay.3 Wi-Fi and LTE.4 All-day battery life.5 Over a million
              apps available on the App Store, including augmented reality experiences. A thin,
              durable, aluminum design that weighs just a pound. And iOS 11 makes iPad more
              powerful, personal, and intelligent, so you can do more than ever before. iPad.
              There's nothing else quite like it.
            </p>
          </div>
        </div>
      </Modal>
    );
  }
}

export default QuickView;
