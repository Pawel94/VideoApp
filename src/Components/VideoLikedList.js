import React, { useContext } from "react";
import VideoItemDetails from "./VideoItemDetails";
import { MovieContex } from "../Context/MovieContex";
import { Container, Row, Col } from "reactstrap";
const VideoLikedList = () => {
  const { movies } = useContext(MovieContex);

  return (
    <div class="row">
      <h3>Liked LIST </h3>

      {movies.length > 0 ? (
        movies.map((movie) => {
          return <VideoItemDetails key={movie.id} movie={movie} />;
        })
      ) : (
        <p>Liked list is empty </p>
      )}
    </div>
  );
};
export default VideoLikedList;
