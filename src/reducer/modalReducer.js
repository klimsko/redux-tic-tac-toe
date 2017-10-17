import * as constants from '../constants'

const initialState = {
	isOpen: true
}

export const modalReducer = (state = initialState, action) => {
	switch(action.type) {

		case constants.MODAL_IS_OPEN:
			return { ...state, isOpen: action.payload};

		default:
			return state;
	}
}