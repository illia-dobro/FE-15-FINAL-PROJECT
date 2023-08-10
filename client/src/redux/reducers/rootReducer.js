import { combineReducers } from 'redux';
import { tokenReducer as token } from './tokenReducer';
import { errorReducer as error } from './errorReducer';

export const rootReducer = combineReducers({
	error,
	token,
});
