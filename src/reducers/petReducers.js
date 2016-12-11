import * as actionTypes from './../actions/actionTypes.js';
import initialState from './initialState';
import { bindRedux } from 'redux-form-utils';
import petFormConfig from '../utils/petFormConfig';
const { state: formState, reducer: formReducer, setInitValue: setInitValue} = bindRedux(petFormConfig);

export const petsReducer = (state = initialState.pets, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PETS_SUCCESS:
            return action.pets.member;
        case actionTypes.CREATE_PET_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.pet)
            ];
        case actionTypes.UPDATE_PET_SUCCESS:
            return [...state.filter(pet => pet.id !== action.pet.id), action.pet];

        case actionTypes.REMOVE_PET_SUCCESS:
            return [...state.filter(pet => pet.id !== action.petId)];
        default:
            return state;
    }
};

export const petReducer = (state = {...formState}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PET_BY_ID_SUCCESS:
            return {...setInitValue(action.pet, state), ...action.pet};
        case actionTypes.UPDATE_PET_SUCCESS:
            return {...setInitValue(action.pet, state), ...action.pet};
        case actionTypes.CLEAR_PET_SUCCESS:
            return formReducer({...formState}, action);
        default:
            return formReducer(state, action);
    }
};