import { combineReducers } from 'redux'

import { meReducer } from './meReducer'
import { gamesReducer } from './gamesReducer'

export const rootReducer = combineReducers({
	me: meReducer,
	games: gamesReducer
});