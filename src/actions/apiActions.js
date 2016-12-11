import * as actionTypes from './actionTypes';

export function apiRequestRunning() {
    return { type: actionTypes.API_REQUEST_RUNNING };
}

export function apiRequestError() {
    return { type: actionTypes.API_REQUEST_ERROR };
}