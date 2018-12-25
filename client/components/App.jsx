import React from 'react';
import Accessories from './Accessories.jsx';
import RelatedItems from './RelatedItems.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="wrapper">
        <div class="accessories">
          <div class="accessoryHead">
            {' '}
            <b>Consider these accessories</b>{' '}
          </div>
          <Accessories />
        </div>
        <div class="relatedItems">
          <div class="relatedItemsHead">
            <b>Recommended</b>
          </div>
          <div id="options">
            <span class="choice">Other recommendations</span>
            <span class="choice">Recently viewed items</span>
          </div>
          <RelatedItems />
        </div>
      </div>
    );
  }
}

export default App;
