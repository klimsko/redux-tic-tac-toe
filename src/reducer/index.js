import { combineReducers } from 'redux'

import { meReducer } from './meReducer'
import { gamesReducer } from './gamesReducer'
import { modalReducer } from './modalReducer'

export const rootReducer = combineReducers({
	me: meReducer,
	games: gamesReducer,
	modal: modalReducer
});