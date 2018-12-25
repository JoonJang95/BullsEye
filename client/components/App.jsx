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
        <Accessories />
        <RelatedItems />
      </div>
    );
  }
}

export default App;
