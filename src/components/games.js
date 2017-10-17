import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import Room from './room';
import * as gamesActions from '../actions/games';
import * as meActions from '../actions/me';

class Games extends Component {
	
	componentDidMount() {
		this.gamesListInterval = setInterval(() => this.getGamesList(this.path), 3000);
		this.myGamesInterval = setInterval(() => this.props.getMe('games'), 3000);
	}

	componentWillUnmount() {
    clearInterval(this.gamesListInterval);
    clearInterval(this.myGamesInterval);
  }

	getGamesList = (path) => {
		this.path = path;
		this.props.getData(path);		
	}

	gameAction = (id, path) => {
		this.props.postData(id+path);
	}

	findMyGame = (games) => {
		if (games.length > 0) {
			return games.filter(game => game.started)[0];
		} else return {id: 0, started: false};
	}

	surrenderGame = (id) => {
		this.props.postData(`${id}/surrender/`);
	}

	render() {
		const { games } = this.props.games;
		const { myGames } = this.props.me;
		
		const myGame = this.findMyGame(myGames);
		const started = myGame !== undefined ? myGame.started : false;
		
		if (!this.props.me.logged) {
	    return <Redirect to="/" />;
	  }
	 
	  if (started) {
			return <Redirect to={"/game/" + myGame.id} />;
		}
	 
		
		return (
			<div>
				<div className="filterItems">
					<ul>
						<li className="filterName">Games filter:</li>
						<li onClick={this.getGamesList.bind(this, '?status=waiting')}>waiting</li>
						<li onClick={this.getGamesList.bind(this, '?status=active')}>active</li>
						<li onClick={this.getGamesList.bind(this, '?status=finished')}>finished</li>
					</ul>
				</div>
	    	
				<FlatButton label="Add new game" 
	    		onClick={this.gameAction.bind(this, '', '')}
	    		backgroundColor={'#9CC842'}
	    		hoverColor={'#6cf875'}
	    		disabled={myGames.length > 0}
	    	/>
	    	
	    	<div className="row">
			    
						{games.length > 0 ? games.map((game, index) =>
			     	<Room
			     		key={index} 
			     		game={game}
			     		canIjoin={myGames.length < 1}
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
    getData: (path) => dispatch(gamesActions.getData(path)),
		postData: (path) => dispatch(gamesActions.postData(path)),
		getMe: (game) => dispatch(meActions.getMe(game))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);