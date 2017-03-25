const React = require('react');
const _ = require('lodash/core');
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
			recipes: {}
		};
		const self = this;
		self.meal1 = {
			name: 'Meal1Name',
			ingredients: [1,2,3,4,5],
			instructions: ['1. ksadfjasdkfjdsfjads','2. aldajsfka dfads f adsf sjdf', '3. akajf fdjkas asdfkjadf dkjadf adfasdf asdf asdf asdf sadf asd fsd asd fasdf'],
			image: 'https://images.nypl.org/index.php?id=1588340&t=w'
		};
		self.meal2 = {
			name: 'Meal2Name',
			ingredients: [1,2,3,4,5],
			instructions: [1,2,3],
			image: 'https://images.nypl.org/index.php?id=1586958&t=w'
		};
		self.meal3 = {
			name: 'Meal3Name',
			ingredients: [1,2,3,4,5],
			instructions: [1,2,3],
			image: 'https://images.nypl.org/index.php?id=1588340&t=w'
		};
		self.meal4 = {
			name: 'Meal4Name',
			ingredients: [1,2,3,4,5],
			instructions: [1,2,3],
			image: 'https://images.nypl.org/index.php?id=1588340&t=w'
		};
	}

	componentDidMount() {
		this.setState({
			recipes: [
				this.meal1,
				this.meal2,
				this.meal3,
				this.meal4
			]
		});
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
