const React = require('react');
const topBarStyles = require('../styles/styles.js').topBarStyles;
const addRecipeButton = require('../styles/styles.js').addRecipeButton;
const topBarTitleStyles = require('../styles/styles.js').topBarTitleStyles;

const RecipesHeading = (props) => {
	return (
		<div className='row'>
			<div className='top-bar' style={topBarStyles}>
				<div className="top-bar-title">
					<h1 style={topBarTitleStyles}>Recipe Box</h1>
				</div>
				<button className='button large' type='button' style={addRecipeButton}>Add Recipe</button>
			</div>
		</div>
	);
};

module.exports = RecipesHeading;
