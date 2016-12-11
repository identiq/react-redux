import * as actionTypes from './../actions/actionTypes.js';
import initialState from './initialState';

function paginator(meta) {
    return {page: meta.page, perPage: meta.perPage, totalItems: meta.totalItems};
}

const paginationReducer = (state = initialState.pagination, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PETS_SUCCESS:
            return paginator(action.pets);
        default:
            return state;
    }
};

export default paginationReducer;