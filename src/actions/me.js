import * as constants from '../constants'
import fetch from 'isomorphic-fetch'

export function success(data) {
	return {
		type: constants.ME_DATA_DONE,
		payload: data
	}
}

export function failed(error) {
	return {
		type: constants.ME_DATA_FAILED,
		payload: error
	}
}

export function logout(data) {
	return {
		type: constants.ME_LOGOUT,
		payload: data
	}
}

export function getData(records, act) {
	console.log('logout', records, act);
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