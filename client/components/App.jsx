import React from 'react';
import Accessories from './Accessories.jsx';
import RelatedItems from './RelatedItems.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <div id="MockData">
          <h1>Current Product</h1>
          <div id="MockImageData">
            <img src="https://target.scene7.com/is/image/Target/GUEST_358cafbc-644b-46cd-a0e3-66b8a6763a75?wid=325&hei=325&qlt=80&fmt=webp" />
          </div>
        </div>
        <div id="wrapper">
          <div class="accessories">
            <div class="accessoryHead">
              {' '}
              <b class="bigHeader">Consider these accessories</b>{' '}
            </div>
            <Accessories />
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
