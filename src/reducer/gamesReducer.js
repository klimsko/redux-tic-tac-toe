import * as constants from '../constants'

const initialState = {
	games: [],
	myGames: [],
	isError: true
}

export const gamesReducer = (state = initialState, action) => {
	switch(action.type) {

		case constants.GAMES_DATA_DONE:
			return { ...state, isError: false, games: action.payload };

		case constants.GAMES_DATA_FAILED:
			return { ...state, isError: true };

		case constants.MY_GAMES_DATA_DONE:
			return { ...state, isError: false, myGames: action.payload };

		case constants.MY_GAMES_DATA_FAILED:
			return { ...state, isError: true };

		default:
			return state;
	}
}