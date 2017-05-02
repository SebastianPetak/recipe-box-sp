import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import App from './components/App';
import Recipes from './containers/Recipes';

const store = createStore(reducers);

render(
	<Provider store={store}>
		<Recipes />
	</Provider>,
	document.getElementById('app')
);
