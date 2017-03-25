const React = require('react');
const fullListDivStyles = require('../styles/styles').fullListDivStyles;

module.exports = class RecipeList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='row' style={fullListDivStyles}>
				{this.props.currentRecipes}
			</div>
		);
	}
};
