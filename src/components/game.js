import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';

import Players from './players';
import Board from './board';
//import Modal from './modal';
import * as actions from '../actions/games';

class Game extends Component {
	
	componentDidMount() {
		this.id = +this.props.match.params.gameId;

		this.interval = setInterval(() => this.update(this.id), 3000);
	}

	componentWillUnmount() {
    clearInterval(this.interval);
  }

	update = (id) => {
		this.props.getData(id);
	}

	surrenderGame = () => {
		this.props.postData(`${this.id}/surrender/`);
	}

	gameOver = () => {
		//this.state.finished ? clearInterval(this.interval) : null;
	}

	onCellClick = (x, y) => {
		const xy = {x: x, y: y};
		this.props.postData(`${this.id}/moves/`, xy);
	}

	render() {
		const { myGame } = this.props.games;

		return (
			<div className="row">
				{/*
								{this.state.finished ? <Modal /> : null}
								{game.players !== undefined ? <Players players={game.players} /> : null}
				*/}
				<div className="col-md-4">
					{myGame.hasOwnProperty('players') ? <Players players={myGame.players} /> : null}
					<div>
				    <FlatButton label="Surrender" 
	  	    		onClick={this.surrenderGame}
	  	    	/>
		    </div>
				</div>
				<div className="col-md-8">
					{myGame.hasOwnProperty('board') ? <Board onCellClick={this.onCellClick} board={myGame.board} /> : null}
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
		getData: (path) => dispatch(actions.getData(path)),
		postData: (path, xy) => dispatch(actions.postData(path, xy))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);