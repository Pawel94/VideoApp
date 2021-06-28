import React, { useState, useContext } from "react";
import { Container } from "reactstrap";
import GetByIdVimeo from "../FetchData/Viemo";
import SearchVideoBar from "./SearchVideoBar";
import VideoList from "./VideoList";
import VideoLikedList from "./VideoLikedList";
import { MovieContex } from "../Context/MovieContex";

const SearchVideo = () => {
  //const [videoSearch, setVideoSearch] = useState([]);
  const [foundVideo, SetFoundVideo] = useState([]);
  const { dispatch } = useContext(MovieContex);
  const handleSubmit = (termFromSearchBar) => {
    let [videoLinkJSON, linkToClick] = GetByIdVimeo(termFromSearchBar);

    fetch(videoLinkJSON)
      .then((response) => response.json())
      .then((jsonData) => {
        dispatch({
          type: "ADD_MOVIE_TO_LIKE_LIST",
          movie: {
            title: jsonData.title,
            img: jsonData.thumbnail_url,
            linkToClick: linkToClick,
          },
        });
        SetFoundVideo({
          title: jsonData.title,
          img: jsonData.thumbnail_url,
          linkToClick: linkToClick,
        });
        console.log("jsonData");
        console.log(jsonData);
        return jsonData;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <SearchVideoBar handleFormSubmit={handleSubmit} />
      <Container className="themed-container">
        <VideoList foundVideo={foundVideo} />
        <VideoLikedList foundVideo={foundVideo} />
      </Container>
    </div>
  );
};

export default SearchVideo;
