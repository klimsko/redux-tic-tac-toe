import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  paper: {
  	height: 450,
	  width: 450,
	  margin: '20px auto',
	  textAlign: 'center'
  },
  table: {
  	width: 30,
  	height: 30,
  	textAlign: 'center',
  	border: '.5px solid #033077',
  	display: 'inline-block',
  	cursor: 'pointer'
  }
};

const Board = (props) => {
	const table = props.board;
	return (
		<Paper style={style.paper} className='board' zDepth={1} rounded={false} >
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				{table.map((row, x) => row.map((cell, y) => <div key={y} onClick={props.onCellClick.bind(this, x, y, cell)} style={style.table} >{cell}</div>))}
			</div>
		</Paper>
	)
}

export default Board;