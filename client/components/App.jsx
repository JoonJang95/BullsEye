import React from 'react';
import Accessories from './Accessories.jsx';
import RelatedItems from './RelatedItems.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currProductImage: {
        imageURL:
          'https://target.scene7.com/is/image/Target/GUEST_358cafbc-644b-46cd-a0e3-66b8a6763a75?wid=325&hei=325&qlt=80&fmt=webp',
        categoryName: 'appleTablets',
      },
      accessories: [],
      relatedItems: [],
    };

    this.shuffleRelatedItems = this.shuffleRelatedItems.bind(this);
    this.changeCurrentProduct = this.changeCurrentProduct.bind(this);
  }

  componentDidMount() {
    this.getInitialAccessories();
    this.getInitialRelatedItems();
  }

  getInitialAccessories() {
    axios
      .get('/items/accessories/ipad')
      .then(results => {
        this.setState({
          accessories: results.data,
        });
      })
      .catch(err => {
        console.log("there was an error with currProduct's accessories get request: ", err);
      });
  }

  getInitialRelatedItems() {
    axios
      .get('/items/relatedItems/ipad')
      .then(results => {
        this.setState({
          relatedItems: this.shuffleRelatedItems(results.data),
        });
      })
      .catch(err => {
        console.log("there was an error with the currProduct's related items get request: ", err);
      });
  }

  changeCurrentProduct(e) {
    let clickedURL = e.target.src;
    let categoryNameData = e.target.dataset.categoryname;

    axios
      .get(`/items/changeProduct/${e.target.dataset.categoryname}`)
      .then(results => {
        this.setState({
          currProductImage: {
            imageURL: clickedURL,
            categoryName: categoryNameData,
          },
          accessories: results.data.accessories,
          relatedItems: this.shuffleRelatedItems(results.data),
        });
      })
      .catch(err => {
        console.log(
          "there was an error with the changeProduct's accessory & related items get request: ",
          err,
        );
      });
  }

  shuffleRelatedItems(data) {
    let productsMax = Math.floor(Math.random() * 4) + 3;
    let productsMin = Math.floor(Math.random() * 3);
    let randomProductsNum = Math.floor(Math.random() * 80);
    let relatedItemsList = [];

    if (this.state.currProductImage.categoryName === 'appleTablets') {
      relatedItemsList = [
        ...data.appleProducts.slice(productsMin, productsMax),
        ...data.nonAppleProducts.slice(productsMin, productsMax),
        ...data.randomProducts.slice(randomProductsNum),
      ];
    } else if (this.state.currProductImage.categoryName === 'non_Apple_Tablets') {
      relatedItemsList = [
        ...data.nonAppleProducts.slice(productsMin, productsMax),
        ...data.appleProducts.slice(productsMin, productsMax),
        ...data.randomProducts.slice(randomProductsNum),
      ];
    } else {
      relatedItemsList = [
        ...data.randomProducts.slice(randomProductsNum, randomProductsNum + 8),
        ...data.appleProducts.slice(0, productsMax),
        ...data.nonAppleProducts.slice(productsMin, productsMax),
      ];
    }
    return relatedItemsList.length > 12 ? relatedItemsList.slice(0, 12) : relatedItemsList;
  }

  render() {
    return (
      <React.Fragment>
        <div id="MockData">
          <h1>Current Product</h1>
          <div id="MockImageData">
            <img src={this.state.currProductImage.imageURL} />
          </div>
        </div>
        <div id="wrapper">
          <div class="accessories">
            <div class="accessoryHead">
              {' '}
              <b class="bigHeader">Consider these accessories</b>{' '}
            </div>
            <Accessories accessories={this.state.accessories} />
          </div>
          <div class="relatedItems">
            <div class="relatedItemsHead">
              <b class="bigHeader">Recommended</b>
            </div>
            <div id="recViewOptions">
              <span class="choice">Other recommendations</span>
              <span class="choice">Recently viewed items</span>
            </div>
            <RelatedItems
              relatedProducts={this.state.relatedItems}
              func={this.changeCurrentProduct}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
