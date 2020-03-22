import React, { createContext, useReducer } from 'react';
import { IState, IAction } from './interfaces';


const initialState:IState = {
  episodes: [],
  favourites: []
}

export const StoreContext = createContext<IState | any>(initialState);

const reducer = (state:IState, action:IAction):IState => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        episodes: action.payload
      }
    case "ADD_FAV":
      return {
        ...state,
        favourites: [action.payload, ...state.favourites]
      }
    case "DEL_FAV":
      return {
        ...state,
        favourites: action.payload
      }
    default:
      return state;
  }
}

export const StoreProvider = ({children}: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={{state, dispatch}}>{children}</StoreContext.Provider>
  )
}