import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import Players from './players';
import Board from './board';
import Modal from './modal';
import * as actions from '../actions/games';

const styles = {
  paper: {
  	height: 'auto',
	  margin: 20,
	  textAlign: 'center',
	  display: 'block'
  }
};

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
		clearInterval(this.interval);
	}

	onCellClick = (x, y, cell) => {
		if (!cell) {
			const xy = {x: x, y: y};
			this.props.postData(`${this.id}/moves/`, xy);
		}
	}

	render() {
		const { myGame } = this.props.games;
		if (myGame.finished) this.gameOver();

		return (
			<div className="row">

				{myGame.finished ? <Modal /> : null}

				<div className="col-md-4">
					<Paper style={styles.paper} zDepth={1} rounded={false}>
						{myGame.hasOwnProperty('players') ? <Players players={myGame.players} /> : null}
					</Paper>
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