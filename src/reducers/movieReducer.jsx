import {
    MOVIE_DETAILS_REQUEST,
    MOVIE_DETAILS_FAIL,
    MOVIE_DETAILS_SUCCESS,
} from '../constants/movieConstant'

export const movieDetailsReducer = (state = { movie: [] }, action) => {
    switch (action.type) {
        case MOVIE_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case MOVIE_DETAILS_SUCCESS:
            return {
                loading: false,
                movie: action.payload,
            }
        case MOVIE_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}