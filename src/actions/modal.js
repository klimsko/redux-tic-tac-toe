import * as constants from '../constants'

export function modalIsOpen(data) {
	return {
		type: constants.MODAL_IS_OPEN,
		payload: data
	}
}

