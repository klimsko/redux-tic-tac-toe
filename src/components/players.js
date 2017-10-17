import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import SvgIconFace from 'material-ui/svg-icons/action/face';

const styles = {
  chip: {
    margin: 4
  }
};

const Players = (props) => {
	return (
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
	)
}

export default Players;