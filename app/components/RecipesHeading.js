const React = require('react');

module.exports = class RecipesHeading extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='row'>
				<div className='top-bar'>
					<div className="top-bar-title">
						<h1>Recipe Box</h1>
					</div>
					<button className='button' type='button'>Add Recipe</button>
				</div>
			</div>
		);
	}
};
