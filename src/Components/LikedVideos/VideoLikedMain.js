import React, { useContext, useState } from "react";
import VideoListDetails from "./VideoListDetails";
import { MovieContex } from "../../Context/MovieContex";
import ButtonDropdownComponent from "./ButtonDrop";
import VideoGridDetails from "./VideoGridDetails";

const VideoLikedMain = () => {
  const { movies } = useContext(MovieContex);
  const [viewState, setViewState] = useState("List");
  console.log(movies);
  return (
    <div class="row">
      <h3>Liked LIST </h3>

      <ButtonDropdownComponent setViewState={setViewState} movies={movies} />

      {movies.length === 0 ? <p>ADD VIDEO TO LIKE LIST :)</p> : null}

      {viewState === "List"
        ? movies.map((movie) => {
            return <VideoListDetails key={movie.id} movie={movie} />;
          })
        : null}
      {viewState === "Grid"
        ? movies.map((movie) => {
            return <VideoGridDetails key={movie.id} movie={movie} />;
          })
        : null}
    </div>
  );
};
export default VideoLikedMain;
