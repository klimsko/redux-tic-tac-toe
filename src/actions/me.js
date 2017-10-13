import * as constants from '../constants'
import fetch from 'isomorphic-fetch'

export function success(data) {
	return {
		type: constants.ME_DATA_DONE,
		payload: data
	}
}

export function gamesSuccess(data) {
	return {
		type: constants.ME_DATA_GAMES,
		payload: data
	}
}

export function failed(error) {
	return {
		type: constants.ME_DATA_FAILED,
		payload: error
	}
}

export function getData(records, act) {
	return (dispatch) => {
		fetch(`${constants.url}/user/${act}/`, {
			method: 'POST', 
		  mode: 'cors', 
		  credentials: 'include', 
		  body: JSON.stringify(records),
		  headers: constants.headers,
		})
			.then(response => response.json())
			.then(data => dispatch(success(data)))
			.catch(error => dispatch(failed(error)))
	}
}

export function getMe(games) {
	const url = games ? `${constants.url}/user/me/games/` : `${constants.url}/user/me/`;

	return (dispatch) => {
		fetch(url, {
			method: 'GET', 
		  mode: 'cors', 
		  credentials: 'include',
		  headers: constants.headers,
		})
			.then(response => response.json())
			.then(data => dispatch(games ? gamesSuccess(data) : success(data)))
			.catch(error => dispatch(failed(error)))
	}
}

