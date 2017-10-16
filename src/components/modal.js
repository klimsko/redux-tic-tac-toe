import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  state = {
    open: true,
  };

  handleClose = () => {
    this.setState({open: false});

  };

  render() {
    const actions = [
      <Link to={'/games/'}>
        <FlatButton
          label="Close"
          primary={true}
          onClick={this.handleClose}
        />
      </Link>
    ];

    return (
      <div>
        <Dialog
          title="Game is over"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <p>Click 'Close' button to return to the list of games</p>
        </Dialog>
      </div>
    );
  }
}