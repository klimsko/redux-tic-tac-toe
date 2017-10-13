import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { Redirect } from 'react-router-dom';

const style = {
  height: 200,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const Players = (props) => {
	return (
		<div>
			{props.players.map((pl, index) => {
				return (
					<div style={{fontWeight: 'bold'}} key={pl.id}>
						Player {index+1}: {pl.name}
					</div>
				)
			})}
		</div>
	)
}

const Room = (props) => {
	return (
		<Paper style={style} zDepth={1} rounded={false} key={props.game.id} >
			<Players players={props.game.players} />
			<div>
				{	
					props.game.players_count < 2 && 
					props.game.players.map(player => player.name).indexOf(props.myName) === -1 ?
					<FlatButton label="Join room" onClick={props.gameAction.bind(this, props.game.id, '/join/')}/>
					: null
				}
				{
					props.game.players.map(player => player.name).indexOf(props.myName) !== -1  ? 
					<FlatButton label="Leave room" onClick={props.gameAction.bind(this, props.game.id, '/leave/')}/>
					: null
				}
				{
					props.game.players_count === 2 
					&& props.game.players.map(player => player.name).indexOf(props.myName) !== -1 ?
					<FlatButton label="Start game" onClick={props.gameAction.bind(this, props.game.id, '/start/')}/>
					: null
				}
			</div>
		</Paper>
	)
}

export default Room;