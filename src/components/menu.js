import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import * as actions from '../actions/me';

const styles = {
  customWidth: {
    width: 200,
  },
};

class LoginBtn extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <Link to={'/'}>
        <FlatButton {...this.props} label="Login" />
      </Link>
    );
  }
}

const Logged = (props) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    iconStyle={{fill: '#fff', color: '#fff'}}
  >
    <MenuItem primaryText="My profile" />
    <MenuItem primaryText="Sign out" onClick={props.logoutClick} />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class Menu extends Component {

	onLogoutClick = () => {
		this.props.getData({}, 'logout');
	}

	render() {
		return (
      <AppBar
        title="Tic Tac Toe"
        showMenuIconButton={false}
        iconElementRight={ this.props.me.logged ? <Logged logoutClick={this.onLogoutClick} /> : <LoginBtn /> }
      />
		)
	}
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (records, act) => dispatch(actions.getData(records, act))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);