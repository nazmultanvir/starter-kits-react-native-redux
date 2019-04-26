import { combineReducers } from "redux"
import types from "./types"

let dataState = {
	currentCountry: '',
}

const main = (state = dataState, action) => {
	switch (action.type) {
		case types.ADDED_TO_ROUTE:
			return Object.assign({}, state, { currentCountry: 'BD' })
		default:
			return state
	}
}

const reducers = combineReducers({
	main
})

export default reducers
