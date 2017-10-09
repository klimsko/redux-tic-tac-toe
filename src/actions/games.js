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

export function getData(status) {
	const url = status ? `${constants.url}/games/?status=${status}` : `${constants.url}/games/`;

	return (dispatch) => {
		fetch(url, {
			method: 'GET', 
		  mode: 'cors', 
		  credentials: 'include',
		  headers: constants.headers,
		})
			.then(response => response.json())
			.then(data => dispatch(success(data)))
			.catch(error => dispatch(failed(error)))
	}
}

export function mySuccess(data) {
	return {
		type: constants.MY_GAMES_DATA_DONE,
		payload: data
	}
}

export function myFailed(error) {
	return {
		type: constants.MY_GAMES_DATA_FAILED,
		payload: error
	}
}

export function myGame(path) {
	const url = path ? `${constants.url}/games/${path}` : `${constants.url}/games/`;
	console.log(url);
	return (dispatch) => {
		fetch(url, {
			method: 'POST', 
		  mode: 'cors', 
		  credentials: 'include', 
		  body: {},
		  headers: constants.headers,
		})
			.then(response => response.json())
			.then(data => dispatch(mySuccess(data)))
			.catch(error => dispatch(myFailed(error)))
	}
}