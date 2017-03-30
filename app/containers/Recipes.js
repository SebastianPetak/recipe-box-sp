const React = require('react');
const _ = require('lodash/core');
// Components
const RecipesHeading = require('../components/RecipesHeading');
const RecipeList = require('../components/RecipeList');
const RecipeFooter = require('../components/RecipeFooter');
// Styles
const recipeListingStyles = require('../styles/styles.js').recipeListingStyles;
const listingFigTitleStyles = require('../styles/styles.js').listingFigTitleStyles;
const listingFigTextStyles = require('../styles/styles.js').listingFigTextStyles;
const listingDivStyles = require('../styles/styles.js').listingDivStyles;
// Functions
const getLocalStorage = require('../utils/getLocalStorage');
const checkForLocalStorage = require('../utils/checkForLocalStorage');

module.exports = class Recipes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: getLocalStorage,
			localStorageSupport: checkForLocalStorage
		};
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
					<div key={recipe.id} className='small-6 large-3 columns'>
						<div style={listingDivStyles}>
							<img style={recipeListingStyles} src={recipe.image}
								alt={recipe.name}
							/>
						</div>
						<figcaption style={listingFigTitleStyles}>
							{recipe.name}
						</figcaption>
						<figcaption style={listingFigTextStyles}>
							{shortInstructions}
						</figcaption>
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
