import React from 'react';
import Accessories from './Accessories.jsx';
import RelatedItems from './RelatedItems.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currProduct: {
        productID: 0,
        name: 'Apple iPad 9.7" Wi-Fi Only (2018 Model, 6th Generation)',
        price: '499.99',
        imageURL:
          'https://target.scene7.com/is/image/Target/GUEST_358cafbc-644b-46cd-a0e3-66b8a6763a75?wid=325&hei=325&qlt=80&fmt=webp',
        categoryName: 'appleTablets',
      },
      accessories: [],
      relatedItems: [],
      viewHistory: false,
      pastItems: [
        {
          productID: 0,
          name: 'Apple iPad 9.7" Wi-Fi Only (2018 Model, 6th Generation)',
          price: '499.99',
          imageURL:
            'https://target.scene7.com/is/image/Target/GUEST_358cafbc-644b-46cd-a0e3-66b8a6763a75?wid=325&hei=325&qlt=80&fmt=webp',
          categoryName: 'appleTablets',
        },
      ],
    };

    this.shuffleRelatedItems = this.shuffleRelatedItems.bind(this);
    this.changeCurrentProduct = this.changeCurrentProduct.bind(this);
    this.getViewHistory = this.getViewHistory.bind(this);
    this.getRelatedItems = this.getRelatedItems.bind(this);
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
          currProduct: {
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

  saveCurrProduct({ productID, name, price, imageURL, categoryName }) {
    axios.post('items/saveProduct', {
      productID: productID,
      name: name,
      price: price,
      imageURL: imageURL,
      categoryName: categoryName,
    });
  }

  shuffleRelatedItems(data) {
    let productsMax = Math.floor(Math.random() * 4) + 3;
    let productsMin = Math.floor(Math.random() * 3);
    let randomProductsNum = Math.floor(Math.random() * 80);
    let relatedItemsList = [];

    if (this.state.currProduct.categoryName === 'appleTablets') {
      relatedItemsList = [
        ...data.appleProducts.slice(productsMin, productsMax),
        ...data.nonAppleProducts.slice(productsMin, productsMax),
        ...data.randomProducts.slice(randomProductsNum),
      ];
    } else if (this.state.currProduct.categoryName === 'non_Apple_Tablets') {
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

  getViewHistory() {
    this.setState({
      viewHistory: true,
    });
  }

  getRelatedItems() {
    this.setState({
      viewHistory: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id="MockData">
          <h1>Current Product</h1>
          <div id="MockImageData">
            <img src={this.state.currProduct.imageURL} />
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
              <span class="choice" onClick={this.getRelatedItems}>
                Other recommendations
              </span>
              <span class="choice" onClick={this.getViewHistory}>
                Recently viewed items
              </span>
            </div>
            <RelatedItems
              relatedProducts={
                this.state.viewHistory ? this.state.pastItems : this.state.relatedItems
              }
              func={this.changeCurrentProduct}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
