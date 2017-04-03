import { combineReducers } from 'redux';
import SetLocalStorageReducer from './reducer_recipes_list';

const rootReducer = combineReducers({
	localStorageSupported: SetLocalStorageReducer
});

export default rootReducer;
