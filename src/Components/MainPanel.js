import React from "react";
import { Container } from "reactstrap";
import useApiFromVimeo from "../FetchHook/FetchHookVimeo";
import SearchVideoBar from "./SearchVideoBar";
import VideoFoundDetail from "./VideoFoundDetail";
const SearchVideo = () => {
  const [{ foundVideo, isLoading, isError }, setURL] = useApiFromVimeo();

  return (
    <div>
      <SearchVideoBar setURL={setURL} />
      <Container className="themed-container">
        <VideoFoundDetail movie={foundVideo} />
      </Container>
    </div>
  );
};

export default SearchVideo;
