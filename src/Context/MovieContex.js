import React, { createContext, useEffect, useReducer } from "react";
import { MovieReducer } from "../Reducers/MovieReducer";
export const MovieContex = createContext();

const MovieProvider = (props) => {
  const [movies, dispatch] = useReducer(MovieReducer, [], () => {
    const localData = localStorage.getItem("movies");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <MovieContex.Provider value={{ movies, dispatch }}>
      {props.children}
    </MovieContex.Provider>
  );
};

export default MovieProvider;
