import {combineReducers} from 'redux';
import MovieReducer from './MovieReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
    Movies: MovieReducer,
    Detail: detailReducer
})

export default rootReducer;