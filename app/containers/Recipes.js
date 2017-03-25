const React = require('react');
const _ = require('lodash/core');
const defaultRecipes = require('../assets/defaultRecipes.js');
const RecipesHeading = require('../components/RecipesHeading');
const RecipeList = require('../components/RecipeList');
const RecipeFooter = require('../components/RecipeFooter');

const recipeListingStyles = require('../styles/styles.js').recipeListingStyles;
const listingFigTitleStyles = require('../styles/styles.js').listingFigTitleStyles;
const listingFigTextStyles = require('../styles/styles.js').listingFigTextStyles;
const listingDivStyles = require('../styles/styles.js').listingDivStyles;

module.exports = class Recipes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: defaultRecipes,
			localStorageSupport: true
		};
		const self = this;
/* For Storing user changes in later update
		if (typeof(Storage) == 'undefined') {
			// User is using a browser that doesn't support local storage
			this.setState({
				localStorageSupport: false
			});
		} else if (typeof(localStorage._sebastianpetak_recipes) !== 'undefined') {
			// Retrieve localStorage from users browser
			let usersLocalStorage = localStorage.getItem('_sebastianpetak_recipes');
			self.setState({
				recipes: usersLocalStorage
			});
		} else {
			// Create local storage object _sebastianpetak_recipes
			localStorage.setItem('_sebastianpetak_recipes', self.state.recipes);
		}
		*/
	}

	render() {
		// Create individual recipes to pass onto RecipeList component
		let currentRecipes;
		if (_.isEmpty(this.state.recipes)) {
			currentRecipes = null;
		} else {
			currentRecipes = this.state.recipes.map( (recipe) => {
				let strInstructions = recipe.instructions.join('\n');
				let shortInstructions;
				strInstructions.length > 115 ?
				shortInstructions = strInstructions.substring(0, 115) + '...' :
				shortInstructions = strInstructions;
				return (
					<div key={recipe.name} className='small-6 large-3 columns'>
						<div style={listingDivStyles}>
							<img style={recipeListingStyles} src={recipe.image} alt={recipe.name} />
						</div>
						<figcaption style={listingFigTitleStyles}>{recipe.name}</figcaption>
						<figcaption style={listingFigTextStyles}>{shortInstructions}</figcaption>
					</div>
				);
			});
		}

		return (
			<div className='container'>
				<RecipesHeading />
				<RecipeList currentRecipes={currentRecipes} />
				<RecipeFooter />
			</div>
		);
	}
};
