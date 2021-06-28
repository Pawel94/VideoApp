import React, { createContext, useReducer } from "react";
import { MovieReducer } from "../Reducers/MovieReducer";
export const MovieContex = createContext();

const MovieProvider = (props) => {
  const [movies, dispatch] = useReducer(MovieReducer, []);
  return (
    <MovieContex.Provider value={{ movies, dispatch }}>
      {props.children}
    </MovieContex.Provider>
  );
};

export default MovieProvider;
