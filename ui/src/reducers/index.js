import { combineReducers } from 'redux';
import drinks from './drinks';
import drinkModal from './drinkModal';

export default combineReducers({
	drinks,
	drinkModal
});