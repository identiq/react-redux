import Axios from 'axios';
import * as actionTypes from './actionTypes';
const apiUrl = 'http://584ad7b692dfcc120034cb7d.mockapi.io/api/v1/pets';

export const fetchPetsSuccess = (pets) => {
    return {
        type: 'FETCH_PETS_SUCCESS',
        pets
    };
};

export const fetchPets = () => {

    return (dispatch) => {
        return Axios.get(apiUrl)
            .then(response => {

                dispatch(fetchPetsSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createPet = (pet) => {
    return (dispatch) => {
        return Axios.post(apiUrl, pet)
            .then(response => {
                dispatch(createPetSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createPetSuccess = (pet) => {
    return {
        type: 'CREATE_PET_SUCCESS',
        pet
    };
};

export const fetchPetByIdSuccess = (pet) => {
    return {
        type: actionTypes.FETCH_PET_BY_ID_SUCCESS,
        pet
    };
};

export const fetchPetById = (petId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + '/' +petId)
            .then(response => {
                dispatch(fetchPetByIdSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};