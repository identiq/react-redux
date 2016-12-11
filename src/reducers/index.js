import {combineReducers} from 'redux';
import apiReducer from './apiReducers';
import {petsReducer, petReducer} from './petReducers';
import paginationReducer from './paginationReducers';

export default combineReducers({
    loading: apiReducer,
    pets: petsReducer,
    pet: petReducer,
    pagination: paginationReducer
});