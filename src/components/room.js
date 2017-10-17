import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import Players from './players';

const style = {
  height: 200,
  width: 200,
  margin: 20,
  padding: 5,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'no-wrap',
  alignContent: 'space-between',
  justifyContent: 'space-between'
};

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