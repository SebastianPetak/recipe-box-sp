const React = require('react');

module.exports = class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
};
