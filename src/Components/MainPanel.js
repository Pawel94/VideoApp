import React, { useState } from "react";
import { Container } from "reactstrap";
import useApiFromVimeo from "../FetchHook/FetchHookVimeo";
import useApiFromYT from "../FetchHook/FetchHookYouTube";
import SearchVideoBar from "./SearchVideoBar";
import VideoFoundDetail from "./VideoFoundDetail";
import SelectVideoRadioButton from "./SelectVideoRadioButton";
const SearchVideo = () => {
  const [{ foundVideo, isLoading, isError }, setURL] = useApiFromVimeo();
  const [{ foundVideo2, isLoading2, isError2 }, setURL2] = useApiFromYT();
  const [selectedoption, setSelectedOption] = useState("youtube");

  return (
    <div>
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
      </Container>
    </div>
  );
};

export default SearchVideo;
