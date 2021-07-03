import React, { useState } from "react";
import { Container } from "reactstrap";
import { Alert, Label, Input } from "reactstrap";
import useApiFromVimeo from "../FetchHook/FetchHookVimeo";
import useApiFromYT from "../FetchHook/FetchHookYouTube";
import SearchVideoBar from "./SearchVideoBar";
import VideoFoundDetail from "./VideoFoundDetail";
import SelectVideoRadioButton from "./SelectVideoRadioButton";
const SearchVideo = () => {
  const [{ foundVideo, isLoading, isError }, setURL] = useApiFromVimeo();
  const [{ foundVideo2, isLoading2, isError2 }, setURL2] = useApiFromYT();
  const [selectedoption, setSelectedOption] = useState("youtube");
  console.log(isError2);
  return (
    <div>
      <Alert color="danger" isOpen={isError}>
        Wrong url/index
      </Alert>{" "}
      <Container>
        {selectedoption === "youtube" ? (
          <div>
            <SearchVideoBar setURL={setURL2} selectedoption={selectedoption} />
            <SelectVideoRadioButton
              selectedoption={selectedoption}
              setSelectedOption={setSelectedOption}
            />
            <VideoFoundDetail
              movie={foundVideo2}
              selectedoption={selectedoption}
            />
          </div>
        ) : (
          <div>
            <SearchVideoBar setURL={setURL} selectedoption={selectedoption} />
            <SelectVideoRadioButton
              selectedoption={selectedoption}
              setSelectedOption={setSelectedOption}
            />
            <VideoFoundDetail
              movie={foundVideo}
              selectedoption={selectedoption}
            />
          </div>
        )}
        {/* <div onChange={select}>
          <input
            type="radio"
            checked={selectedoption === "youtube"}
            value="youtube"
            name="typeOfVideo"
          />{" "}
          Youtube
          <input
            type="radio"
            checked={selectedoption === "Vimeo"}
            value="Vimeo"
            name="gender"
          />{" "}
          Vimeo
        </div> */}
      </Container>
    </div>
  );
};

export default SearchVideo;
