import * as constants from '../constants'

const initialState = {
	games: [],
	isError: true
}

export const gamesReducer = (state = initialState, action) => {
	switch(action.type) {

		case constants.GAMES_DATA_DONE:
			return { ...state, isError: false, games: action.payload };

		case constants.GAMES_DATA_FAILED:
			return { ...state, isError: true };

		default:
			return state;
	}
}