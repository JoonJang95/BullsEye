import React from 'react';
import Accessories from './Accessories.jsx';
import RelatedItems from './RelatedItems.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currProductImage:
        'https://target.scene7.com/is/image/Target/GUEST_358cafbc-644b-46cd-a0e3-66b8a6763a75?wid=325&hei=325&qlt=80&fmt=webp',
      accessories: [],
      relatedItems: [],
    };
  }

  componentDidMount() {
    this.getInitialAccessories();
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
        console.log('there was a error with currProduct get request: ', err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div id="MockData">
          <h1>Current Product</h1>
          <div id="MockImageData">
            <img src={this.state.currProductImage} />
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
            <RelatedItems />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
