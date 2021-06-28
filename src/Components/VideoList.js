import React, { useContext } from "react";
import VideoItemDetails from "./VideoItemDetails";
import { MovieContex } from "../Context/MovieContex";
const VideoList = ({ foundVideo }) => {
  const { movies } = useContext(MovieContex);

  return (
    <div className="ui relaxed divided list">
      {movies.length > 0 ? (
        <VideoItemDetails movie={foundVideo} />
      ) : (
        <p>Write Link or ID to get video</p>
      )}
    </div>
  );
};
export default VideoList;
