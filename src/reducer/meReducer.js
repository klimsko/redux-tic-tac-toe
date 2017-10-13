import * as constants from '../constants'

const initialState = {
	username: '',
	myGames: [],
	logged: false,
	error: ''
}

export const meReducer = (state = initialState, action) => {
	switch(action.type) {

		case constants.ME_DATA_DONE:
			const { username } = action.payload;
			const logged = username ? true : false;

			return { ...state, logged, username};

		case constants.ME_DATA_GAMES:
			return { ...state, myGames: action.payload};

		case constants.ME_DATA_FAILED:
			return { ...state, logged: false };

		default:
			return state;
	}
}