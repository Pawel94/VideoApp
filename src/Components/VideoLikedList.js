import React, { useContext } from "react";
import VideoItemDetails from "./VideoItemDetails";
import { MovieContex } from "../Context/MovieContex";
const VideoLikedList = () => {
  const { movies } = useContext(MovieContex);

  return (
    <div className="ui relaxed divided list">
      <h3>Liked LIST </h3>
      {movies.length > 0 ? (
        movies.map((movie) => {
          return <VideoItemDetails movie={movie} />;
        })
      ) : (
        <p>Liked list is empty </p>
      )}
    </div>
  );
};
export default VideoLikedList;
