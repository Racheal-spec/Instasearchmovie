
const initialState = {
    Trends: [],
    Latest: [],
    Discover: [],
    Search: [],
    watchlists: []
};

const MovieReducer = (state=initialState, action) => {
    console.log(action);
    
    switch (action.type) {
        case "FETCH_MOVIES":
     
     return{
        ...state,
        Trends: action.load.Trends,
        Latest: action.load.Latest,
        Discover: action.load.Discover
     }  
     case "ADD_TO_WATCHLIST":

        return {
            ...state,
            watchlists: [...state.watchlists, action.movie]
        }
       case "REMOVE_FROM_WATCHLIST":
        let newList = [...state.watchlists];
            const indexVal = state.watchlists.findIndex(
                (listItem) => listItem.id === action.id
            );
            if (indexVal >= 0) {
                newList.splice(indexVal, 1);
             } else {
                 console.warn(`Can't remove product (id: ${action.id}) as it's not in basket!`);
          }
           return{
             ...state,
             watchlists: newList,
           } 
     default:  
         return state;
}

}

export default MovieReducer;