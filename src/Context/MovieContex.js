import React, { createContext, useEffect, useReducer } from "react";
import { MovieReducer } from "../Reducers/MovieReducer";
import { MovieReducerLikedList } from "../Reducers/MovieReducerLikedList";
export const MovieContex = createContext();

const MovieProvider = (props) => {
  const [movies, dispatch] = useReducer(MovieReducer, [], () => {
    const localData = localStorage.getItem("movies");
    return localData ? JSON.parse(localData) : [];
  });
  const [likedMovies, dispatchLiked] = useReducer(
    MovieReducerLikedList,
    [],
    () => {
      const localData = localStorage.getItem("likedMovies");
      console.log("localData");
      console.log(localData);
      return localData ? JSON.parse(localData) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
  }, [movies, likedMovies]);

  return (
    <MovieContex.Provider
      value={{ movies, likedMovies, dispatch, dispatchLiked }}
    >
      {props.children}
    </MovieContex.Provider>
  );
};

export default MovieProvider;
