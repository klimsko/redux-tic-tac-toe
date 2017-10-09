import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import * as actions from '../actions/me';

class Login extends Component {

	onInputChange = (field, e) => {
		const value = e.currentTarget.value;
		field === 'username' ? this.username = value : this.password = value;
	}

	userLogin = (act) => {
		const self = this;
		const records = new function() {
		  this.username = self.username;
		  this.password = self.password;
		}
		this.props.getData(records, act);
	}

	render() {
		
		if (this.props.me.logged) {
			console.log('logged');
	    return <Redirect to="/games" />;
	  }

		return (
			<div>
				<TextField
					onChange={this.onInputChange.bind(this, 'username')}
		      hintText="Hint Text"
		      floatingLabelText="Username"
		      errorText={this.props.me.error}
		    /><br />
		    <TextField
					onChange={this.onInputChange.bind(this, 'password')}
		      hintText="Password Field"
		      floatingLabelText="Password"
		      type="password"
		    /><br />
		    <FlatButton label="Register" onClick={this.userLogin.bind(this, 'register')} />
		    <FlatButton label="Login" onClick={this.userLogin.bind(this, 'login')} />
			</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
