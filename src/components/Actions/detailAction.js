import axios from 'axios';
import {movieDetailsURL} from '../../Api';

export const loadDetail = (movie_id) => async (dispatch) => {
    const detailData = await axios.get(movieDetailsURL(movie_id));

    dispatch({
        type: "GET_DETAIL",
        load:{
         details:detailData.data
        }
    });
}

