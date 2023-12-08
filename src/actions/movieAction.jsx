import axios from "axios";
import {
    MOVIE_DETAILS_REQUEST,
    MOVIE_DETAILS_FAIL,
    MOVIE_DETAILS_SUCCESS,
} from '../constants/movieConstant'

export const getMovieDetails = (id) => async (dispatch) => {
    try{
        dispatch({
            type: MOVIE_DETAILS_REQUEST
        })

        const {data} = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=87ede1f1`)

        dispatch({
            type: MOVIE_DETAILS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: MOVIE_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}
