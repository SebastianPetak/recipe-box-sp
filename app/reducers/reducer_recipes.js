const defaultRecipes = require('../assets/defaultRecipes');
import { SET_INITIAL_RECIPES } from '../actions/types';

export default function(state = defaultRecipes, action) {
	switch(action.type) {
	case SET_INITIAL_RECIPES:
		return action.payload;
	default:
		return state;
	}
}
