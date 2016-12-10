import * as actionTypes from './../actions/actionTypes.js';

export const petsReducer = (state = [], action) => {
    switch (action.type){
        case 'FETCH_PETS_SUCCESS':
            return action.pets;
        case 'CREATE_PET_SUCCESS':
            return [
                ...state,
                Object.assign({}, action.pet)
            ];
        default:
            return state;
    }
};

export const petReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_PET_BY_ID_SUCCESS:
            return action.pet;
        default:
            return state;
    }
};