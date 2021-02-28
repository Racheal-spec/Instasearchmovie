const initialState = { 
    details: {
        genres: [],
        production_companies: [],
        videos: {results: []}
    },
}

const detailReducer = (state=initialState, action) => {
 
    switch(action.type) {
        case "GET_DETAIL":

        return{
            ...state,
            details: action.load.details
        }
        default: 
           return state;

    }
}

export default detailReducer;