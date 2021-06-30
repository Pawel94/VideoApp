import React, { useState } from "react";
import { Container } from "reactstrap";
import { Alert } from "reactstrap";
import useApiFromVimeo from "../FetchHook/FetchHookVimeo";
import SearchVideoBar from "./SearchVideoBar";
import VideoFoundDetail from "./VideoFoundDetail";
const SearchVideo = () => {
  const [{ foundVideo, isLoading, isError }, setURL] = useApiFromVimeo();

  return (
    <div>
      <Alert color="danger" isOpen={isError}>
        Wrong url/index
      </Alert>{" "}
      <Container className="">
        <SearchVideoBar setURL={setURL} />

        {isLoading === true ? <VideoFoundDetail movie={foundVideo} /> : null}
      </Container>
    </div>
  );
};

export default SearchVideo;
