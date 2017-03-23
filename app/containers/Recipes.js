const React = require('react');
const RecipesHeading = require('../components/RecipesHeading');

module.exports = class Recipes extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='container'>
				<RecipesHeading />
			</div>
		);
	}
};
