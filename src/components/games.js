import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import Room from './room';
import * as actions from '../actions/games';

class Games extends Component {
	
	componentDidMount() {
		this.getGamesList();
	}

	componentWillUnmount() {
    //clearInterval(this.interval);
  }

	getGamesList = () => {
		this.props.getData();		
	}

	// newGame = () => {
	// 	fetch(url + 'games/', {
	// 		method: 'POST', 
	// 	  mode: 'cors',
	// 	  body: {},
	// 	  credentials: 'include',
	// 	  headers: headers,
	// 	})
	// 		.then(response => {
	// 			if (response.status >= 400) {
	// 				throw new Error("Bad response from server");
	// 			}
	// 			return response.json();
	// 		})
	// 		.then(() => this.getRoomList('GET')
	// 		);
	// }

	// leaveRoom = (id) => {
	// 	fetch(url + `games/${id}/leave/`, {
	// 		method: 'POST', 
	// 	  mode: 'cors', 
	// 	  credentials: 'include',
	// 	  headers: headers,
	// 	})
	// 		.then(response => {
	// 			if (response.status >= 400) {
	// 				throw new Error("Bad response from server");
	// 			}
	// 			return response.json();
	// 		})
	// 		.then(() => this.getRoomList('GET')
	// 		);
	// }

	// joinRoom = (id) => {
	// 	fetch(url + `games/${id}/join/`, {
	// 		method: 'POST', 
	// 	  mode: 'cors', 
	// 	  credentials: 'include',
	// 	  headers: headers,
	// 	})
	// 		.then(response => {
	// 			if (response.status >= 400) {
	// 				throw new Error("Bad response from server");
	// 			}
	// 			return response.json();
	// 		})
	// 		.then(() => this.getRoomList('GET')
	// 		);

	// }

	// startGame = (id) => {
	// 	fetch(url + `games/${id}/start/`, {
	// 		method: 'POST', 
	// 	  mode: 'cors', 
	// 	  credentials: 'include',
	// 	  headers: headers,
	// 	})
	// 		.then(response => {
	// 			if (response.status >= 400) {
	// 				throw new Error("Bad response from server");
	// 			}
	// 			return response.json();
	// 		})
	// 		.then((game) => this.setState({ game })
	// 		);
	// }

	render() {
		console.log(sessionStorage);
		const { games } = this.props.games;
		return (
			<div>
	    	{/*
				<FlatButton label="Add new room" 
	    		onClick={this.newGame}
	    		backgroundColor={'#9CC842'}
	    		hoverColor={'#6cf875'}
	    	/>
	    	*/}
	    	<div className="row">
			    {games.length > 0 ? games.map((game, index) => 
			     	<Room
			     		key={index} 
			     		id={game.id} 
			     		players={game.players} 
			     		// leaveRoom={this.leaveRoom}
			     		// joinRoom={this.joinRoom}
			     		// startGame={this.startGame}
			     	/>) : null}
		    </div>
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
    getData: () => dispatch(actions.getData())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);