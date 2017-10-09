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

function makeUrl(status) {
	switch(status) {
			case 'waiting':
				return `${constants.url}/games/?status=waiting`;

			case 'active':
				return `${constants.url}/games/?status=active`;

			case 'finished':
				return `${constants.url}/games/?status=finished`;

			default:
				return `${constants.url}/games/`;
		}
}

export function getData(status) {
	const url = makeUrl(status);
	console.log(url);
	return (dispatch) => {
		fetch(url, {
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