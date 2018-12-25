import React from 'react';

class Accessories extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="accessories">
        <div>
          <div id="accessoryHead"> Consider these accessories </div>
          <ul id="accessoryList">
            <li>
              <div>
                <img src="https://target.scene7.com/is/image/Target/50220026?wid=250&hei=250&qlt=80&fmt=pjpeg" />
              </div>
            </li>
            <li>
              <div>
                <img src="https://target.scene7.com/is/image/Target/50512957?wid=250&hei=250&qlt=80&fmt=webp" />
              </div>
            </li>
            <li>
              <div>
                <img src="" />
              </div>
            </li>
            <li>
              <div>
                <img src="" />
              </div>
            </li>
            <li>
              <div>
                <img src="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Accessories;
