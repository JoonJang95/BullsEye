import React from 'react';
import Modal from 'react-awesome-modal';

class QuickView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        visible={this.props.modal}
        width="600"
        height="500"
        effect="fadeInUp"
        onClickAway={() => this.props.closeModal()}
      >
        <div>heyyyy</div>
      </Modal>
    );
  }
}

export default QuickView;
