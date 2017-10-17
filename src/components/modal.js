import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Redirect } from 'react-router-dom';

class Modal extends Component {
  
  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.props.modalIsOpen.bind(this, false)}
      />
    ];

    if(!this.props.open) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Dialog
          title="Game is over"
          actions={actions}
          modal={true}
          open={this.props.open}
        >
          <p>Click 'Close' button to return to the list of games</p>
        </Dialog>
      </div>
    );
  }
  
}

export default Modal;