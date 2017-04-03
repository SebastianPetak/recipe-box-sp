import { TOGGLE_LOCALSTORAGE } from '../actions/types';

export default function(state = false, action) {
	switch(action.type) {
	case TOGGLE_LOCALSTORAGE:
		return action.payload;
	default:
		return state;
	}
}
