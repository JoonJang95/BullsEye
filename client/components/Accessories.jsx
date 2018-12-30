import React from 'react';

class Accessories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="accessories">
        <div class="accessoriesPictures">
          <ul id="accessoryList">
            {this.props.accessories.map(accessory => {
              return (
                <li>
                  <div>
                    <img src={accessory.imageURL} />
                    <div>
                      <b>{accessory.price}</b>
                    </div>
                    <div class="productName">{accessory.name}</div>
                  </div>
                </li>
              );
            })}
            {/* <li>
              <div>
                <img src="https://target.scene7.com/is/image/Target/50512957?wid=250&hei=250&qlt=80&fmt=webp" />
                <div>
                  <b>$100.99</b>
                </div>
                <div class="productName">Apple Stuff</div>
              </div>
            </li>
            <li>
              <div>
                <img src="https://target.scene7.com/is/image/Target/52106337?wid=250&hei=250&qlt=80&fmt=webp" />
                <div>
                  <b>$100.99</b>
                </div>
                <div class="productName">Apple Stuff</div>
              </div>
            </li>
            <li>
              <div>
                <img src="https://target.scene7.com/is/image/Target/51530146?wid=250&hei=250&qlt=80&fmt=webp" />
                <div>
                  <b>$100.99</b>
                </div>
                <div class="productName">Apple Stuff</div>
              </div>
            </li>
            <li>
              <div>
                <img src="https://target.scene7.com/is/image/Target/51677595?wid=250&hei=250&qlt=80&fmt=webp" />
                <div>
                  <b>$100.99</b>
                </div>
                <div class="productName">Apple Stuff</div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Accessories;
