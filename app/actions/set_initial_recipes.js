const defaultRecipes = require('../assets/defaultRecipes');
import { SET_INITIAL_RECIPES } from './types';

export default function setInitialRecipes() {
	// Utilize local storage in users browser for storing their recipes
	let currentRecipes;
	if (typeof(localStorage._sebastianpetak_recipes) !== 'undefined') {
		// Retrieve localStorage from users browser
		currentRecipes = JSON.parse(localStorage.getItem('_sebastianpetak_recipes'));
		return {
			type: SET_INITIAL_RECIPES,
			payload: currentRecipes
		};
	} else {
		// Create local storage object _sebastianpetak_recipes
		localStorage.setItem(
			'_sebastianpetak_recipes',
			JSON.stringify(defaultRecipes)
		);
		currentRecipes = JSON.parse(localStorage.getItem('_sebastianpetak_recipes'));
		return {
			type: SET_INITIAL_RECIPES,
			payload: currentRecipes
		};
	}
}
