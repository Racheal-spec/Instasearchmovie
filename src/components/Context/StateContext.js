import React, {useContext, useReducer, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({reducer, initialState, children})=> (

    <MovieContext.Provider value={useReducer(reducer, initialState)}>
       {children}
    </MovieContext.Provider>
);

export const useStateValue = () => useContext(MovieContext);
