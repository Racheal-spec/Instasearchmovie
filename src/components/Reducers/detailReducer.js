const initialState = { 
    details: {
        genres: [],
        production_companies: [],
        videos: {results: []}
    },
    similars: {results: []},
    isLoading: true
}

const detailReducer = (state=initialState, action) => {
 
    switch(action.type) {
        case "GET_DETAIL":

        return{
            ...state,
            details: action.load.details,
            similars: action.load.similars,
            isLoading: false
        }
        case 'LOADING_DETAIL':
            return{
                ...state,
                isLoading: true
            }
        default: 
           return state;

    }
}

export default detailReducer;