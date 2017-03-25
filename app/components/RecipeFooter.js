const React = require('react');
const footerRowStyles = require('../styles/styles').footerRowStyles;
const footerIconStyles = require('../styles/styles').footerIconStyles;

module.exports = class RecipeFooter extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<footer>
				<div className='row' style={footerRowStyles}>
					<div className='small-6 columns'>
						<i className='fi-laptop' style={footerIconStyles}></i>
						<p>Created with Node.js/Express, React, and Foundation.</p>
					</div>
					<div className='small-6 columns'>
						<i className='fi-social-github' style={footerIconStyles}></i>
						<p>Create by <a href='http://www.sebastianpetak.com/'>Sebastian Petak</a>.
						See the code on <a href='https://github.com/SebastianPetak/recipe-box-sp'>
						<i className='fi-social-github'></i> GitHub</a>.</p>.
					</div>
				</div>
			</footer>
		);
	}
};
