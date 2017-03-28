const React = require('react');
const fullListDivStyles = require('../styles/styles').fullListDivStyles;

const RecipeList = (props) => {
	return (
		<div className='row' style={fullListDivStyles}>
			{props.currentRecipes}
		</div>
	);
};

module.exports = RecipeList;
