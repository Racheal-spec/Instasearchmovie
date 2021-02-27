const initialState = { 
    details: {},
    watchlists: []
}

const detailReducer = (state=initialState, action) => {
 
    switch(action.type) {
        case "GET_DETAIL":

        return{
            ...state,
            details: action.load.details
        }
        case "ADD_TO_WATCHLIST":

            return {
                ...state,
                watchlists: [...state.watchlists, action.movie]
            }
        default: 
           return state;

    }
}

export default detailReducer;