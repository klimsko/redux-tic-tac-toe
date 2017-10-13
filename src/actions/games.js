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

export function getData(path) {
	const fetchMyGame = typeof path === 'number' && path > 0;
	const url = path ? `${constants.url}/games/${path}` : `${constants.url}/games/`;
	return (dispatch) => {
		fetch(url, {
			method: 'GET', 
		  mode: 'cors', 
		  credentials: 'include',
		  headers: constants.headers,
		})
			.then(response => response.json())
			.then(data => dispatch(fetchMyGame ? mySuccess(data) : success(data)))
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

export function postData(path, xy) {
	const url = path ? `${constants.url}/games/${path}` : `${constants.url}/games/`;
	const records = xy ? xy : {};
	
	return (dispatch) => {
		fetch(url, {
			method: 'POST', 
		  mode: 'cors', 
		  credentials: 'include', 
		  body: JSON.stringify(records),
		  headers: constants.headers,
		})
			.then(response => response.json())
			.then(data => dispatch(mySuccess(data)))
			.catch(error => dispatch(myFailed(error)))
	}
}