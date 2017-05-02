import { combineReducers } from 'redux';
import reducer_toggle_localStorage from './reducer_toggle_localStorage';
import reducer_recipes from './reducer_recipes';

const rootReducer = combineReducers({
	localStorageSupport: reducer_toggle_localStorage,
	recipes: reducer_recipes
});

export default rootReducer;
