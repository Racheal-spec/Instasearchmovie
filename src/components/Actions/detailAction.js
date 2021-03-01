import axios from 'axios';
import {movieDetailsURL, similarMovieURL} from '../../Api';

export const loadDetail = (movie_id) => async (dispatch) => {
    
    dispatch({
        type: "LOADING_DETAIL"
    })
    const detailData = await axios.get(movieDetailsURL(movie_id));
    const similarData = await axios.get(similarMovieURL(movie_id));
    dispatch({
        type: "GET_DETAIL",
        load:{
         details:detailData.data,
         similars:similarData.data
        }
    });
}

