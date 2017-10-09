import * as constants from '../constants'

const initialState = {
	username: '',
	won: 0,
	lost: 0,
	won_by_surrender: 0,
	draws: 0,
	surrendered: 0,
	error: '',
	logged: false
}

export const meReducer = (state = initialState, action) => {
	switch(action.type) {

		case constants.ME_DATA_DONE:
			console.log('meReducer', action.payload);
			return { ...state, logged: true, ...action.payload };

		case constants.ME_DATA_FAILED:
			return { ...state, logged: false };

		default:
			return state;
	}
}