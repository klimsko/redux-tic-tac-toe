import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import SvgIconFace from 'material-ui/svg-icons/action/face';

const styles = {
  paper: {
  	height: 'auto',
	  width: '100%',
	  margin: 20,
	  textAlign: 'center',
	  display: 'block'
  },
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};

const Players = (props) => {
	return (
		<Paper style={styles.paper} zDepth={1} rounded={false}>
			<div>
				{props.players.map((pl) => 
					<Chip
						key={pl.id}
	          style={styles.chip}
	        >
	          <Avatar color="#444" icon={<SvgIconFace />} />
	          {pl.name}
	        </Chip>
				)}
			</div>
		</Paper>
	)
}

export default Players;