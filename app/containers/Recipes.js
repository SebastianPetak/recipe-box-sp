const React = require('react');
const _ = require('lodash/core');
const RecipesHeading = require('../components/RecipesHeading');
const RecipeList = require('../components/RecipeList');

module.exports = class Recipes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: {}
		};
		const self = this
		self.meal1 = {
			name: 'Meal1Name',
			ingredients: [1,2,3,4,5],
			instructions: [1,2,3],
			image: 'https://images.nypl.org/index.php?id=1588340&t=w'
		}
	}

	componentDidMount() {
		this.setState({
			recipes: [
				this.meal1
			]
		});
	}

	render() {
		let currentRecipes;
		if (_.isEmpty(this.state.recipes)) {
			currentRecipes = null;
		} else {
			currentRecipes = this.state.recipes.map( (recipe) => {
				return (
					<div key={recipe.name} className='small-2 large-4 columns'>
						<img className="thumbnail" src={recipe.image} alt={recipe.name} />
					</div>
				);
			});
		}

		return (
			<div className='container'>
				<RecipesHeading />
				<RecipeList currentRecipes={currentRecipes}/>
			</div>
		);
	}
};
