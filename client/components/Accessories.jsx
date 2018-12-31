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
              //This conditional allows for proper ® rendering
              let AppleAccessory = () => {
                return (
                  <div class="accessoryName">
                    Apple<sup>®</sup>{' '}
                    {accessory.name.length > 20
                      ? `${accessory.name.slice(5, 23)}...`
                      : accessory.name.slice(5)}
                  </div>
                );
              };

              let NonAppleAccessory = () => {
                return <div class="accessoryName">{`${accessory.name.slice(0, 23)}...`}</div>;
              };

              return (
                <li>
                  <div>
                    <img src={accessory.imageURL} />
                    <div>
                      <b>${accessory.price}</b>
                    </div>
                    {accessory.categoryName === 'appleTablets' ? (
                      <AppleAccessory />
                    ) : (
                      <NonAppleAccessory />
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Accessories;
