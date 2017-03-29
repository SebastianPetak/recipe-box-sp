const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;
const IndexRoute = ReactRouter.IndexRoute;
const Main = require('../components/Main');
const Recipes = require('../containers/Recipes');

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Recipes} />
		</Route>
	</Router>
);

module.exports = routes;
