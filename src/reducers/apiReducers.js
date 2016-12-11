import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const apiReducer = (state = initialState.apiRequestRunning, action) => {
    if (action.type === actionTypes.API_REQUEST_RUNNING) {
        return state + 1;
    } else if (action.type === actionTypes.API_REQUEST_ERROR || action.type.indexOf('SUCCESS') >= 0) {
        return state - 1;
    }

    return state;
};

export default apiReducer;