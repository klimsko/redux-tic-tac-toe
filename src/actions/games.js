import * as constants from '../constants'
import fetch from 'isomorphic-fetch'

export function success(data) {
	return {
		type: constants.GAMES_DATA_DONE,
		payload: data
	}
}

export function failed(error) {
	return {
		type: constants.GAMES_DATA_FAILED,
		payload: error
	}
}

export function getData() {
	return (dispatch) => {
		fetch(`${constants.url}/games/`, {
			method: 'GET', 
		  mode: 'cors', 
		  credentials: 'include', 
		  //body: JSON.stringify(records),
		  headers: constants.headers,
		})
			.then(response => response.json())
			.then(data => dispatch(success(data)))
			.catch(error => dispatch(failed(error)))
	}
}