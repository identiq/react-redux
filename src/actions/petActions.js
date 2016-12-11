import Axios from 'axios';
import * as actionTypes from './actionTypes';
import {apiRequestRunning, apiRequestError} from './apiActions';
import config from '../config';

function validatePet(pet) {
    return {
        name: pet.name.value || '',
        breed: pet.breed.value || '',
        age: pet.age.value || '',
        price: pet.price.value || ''
    };
}

export const fetchPetsSuccess = (pets) => {
    return {
        type: actionTypes.FETCH_PETS_SUCCESS,
        pets
    };
};

export const fetchPets = (perPage = 10, page = 1) => {

    return (dispatch) => {
        dispatch(apiRequestRunning());
        return Axios.get(`${config.apiUrl}/${config.apiVersion}/pets?limit=${perPage}&page=${page}`)
            .then(response => {
                dispatch(fetchPetsSuccess({member: response.data, perPage: perPage, page: page, totalItems: 50}));
            })
            .catch(error => {
                dispatch(apiRequestError());
                throw error;
            });
    };
};

export const createPetSuccess = (pet) => {
    return {
        type: actionTypes.CREATE_PET_SUCCESS,
        pet
    };
};

export const createPet = (pet) => {
    return (dispatch) => {
        dispatch(apiRequestRunning());
        return Axios.post(`${config.apiUrl}/${config.apiVersion}/pets`, validatePet(pet))
            .then(response => {
                dispatch(createPetSuccess(response.data));
            })
            .catch(error => {
                dispatch(apiRequestError());
                throw error;
            });
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
        dispatch(apiRequestRunning());
        return Axios.get(`${config.apiUrl}/${config.apiVersion}/pets/${petId}`)
            .then(response => {
                dispatch(fetchPetByIdSuccess(response.data));
            })
            .catch(error => {
                dispatch(apiRequestError());
                throw error;
            });
    };
};

export const removePetSuccess = (petId) => {
    return {
        type: actionTypes.REMOVE_PET_SUCCESS,
        petId
    };
};

export const removePet = (petId) => {
    return (dispatch) => {
        dispatch(apiRequestRunning());
        return Axios.delete(`${config.apiUrl}/${config.apiVersion}/pets/${petId}`)
            .then(response => {
                dispatch(removePetSuccess(response.data.id));
            })
            .catch(error => {
                dispatch(apiRequestError());
                throw error;
            });
    };
};

export const updatePetSuccess = (pet) => {
    return {
        type: actionTypes.UPDATE_PET_SUCCESS,
        pet
    };
};

export const updatePet = (petId, pet) => {
    return (dispatch) => {
        dispatch(apiRequestRunning());
        return Axios.put(`${config.apiUrl}/${config.apiVersion}/pets/${petId}`, validatePet(pet))
            .then(response => {
                dispatch(updatePetSuccess(response.data));
            })
            .catch(error => {
                dispatch(apiRequestError());
                throw error;
            });
    };
};

export const clearPetSuccess = () => {
    return {
        type: actionTypes.CLEAR_PET_SUCCESS
    };
};

export const clearPet = () => {
    return (dispatch) => {
        dispatch(clearPetSuccess());
    };
};