const defaultRecipes = require('../assets/defaultRecipes');

const getLocalStorage = () => {
	// Utilize local storage in users browser for storing their recipes
	if (typeof(Storage) == 'undefined') {
		// User is using a browser that doesn't support local storage
		return defaultRecipes;
	} else if (typeof(localStorage._sebastianpetak_recipes) !== 'undefined') {
		// Retrieve localStorage from users browser
		return JSON.parse(localStorage.getItem('_sebastianpetak_recipes'));
	} else {
		// Create local storage object _sebastianpetak_recipes
		localStorage.setItem(
			'_sebastianpetak_recipes',
			JSON.stringify(defaultRecipes)
		);
		return  JSON.parse(localStorage.getItem('_sebastianpetak_recipes'));
	}
};

module.exports = getLocalStorage();
