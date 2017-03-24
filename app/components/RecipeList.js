const React = require('react');

module.exports = class RecipeList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='row'>
				{this.props.currentRecipes}
			</div>
		);
	}
};
