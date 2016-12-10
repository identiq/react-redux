import {combineReducers} from 'redux';
import {petsReducer, petReducer} from './petReducers'

export default combineReducers({
    pets: petsReducer,
    pet: petReducer
});