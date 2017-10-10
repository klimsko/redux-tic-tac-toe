import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import Room from './room';
import * as actions from '../actions/games';

class Games extends Component {
	
	componentDidMount() {
		this.interval = setInterval(() => this.getGamesList(this.status), 3000);
	}

	componentWillUnmount() {
    clearInterval(this.interval);
  }

	getGamesList = (status) => {
		this.status = status;
		this.props.getData(status);		
	}

	gameAction = (path) => {
		this.props.myGame(path);
	}

	render() {
		if (!this.props.me.logged) {
	    return <Redirect to="/" />;
	  }
		const { games } = this.props.games;
		return (
			<div>
				<div className="filterItems">
					<ul>
						<li className="filterName">Games filter:</li>
						<li onClick={this.getGamesList.bind(this, '')} >all</li>
						<li onClick={this.getGamesList.bind(this, 'waiting')} >waiting</li>
						<li onClick={this.getGamesList.bind(this, 'active')}>active</li>
						<li onClick={this.getGamesList.bind(this, 'finished')}>finished</li>
					</ul>
				</div>
	    	
				<FlatButton label="Add new game" 
	    		onClick={this.gameAction.bind(this, '')}
	    		backgroundColor={'#9CC842'}
	    		hoverColor={'#6cf875'}
	    	/>
	    	
	    	<div className="row">
			    {games.length > 0 ? games.map((game, index) => 
			     	<Room
			     		key={index} 
			     		game={game}
			     		players={game.players.map(player => player.name)}
			     		gameAction={this.gameAction}
			     		myName={this.props.me.username}
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
    getData: (status) => dispatch(actions.getData(status)),
		myGame: (path) => dispatch(actions.myGame(path))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);