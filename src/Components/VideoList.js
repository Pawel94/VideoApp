import React, { useContext } from "react";
import VideoItemDetails from "./VideoItemDetails";
const VideoList = ({ foundVideo }) => {
  console.log("foundVideo");
  console.log(foundVideo);
  console.log(foundVideo.length);
  return (
    <div className="ui relaxed divided list">
      {/* {foundVideo.length > 0 ? ( */}
      <VideoItemDetails movie={foundVideo} />
      {/* // ) : (
      //   <p>Write Link or ID to get video</p>
      // )} */}
    </div>
  );
};
export default VideoList;
