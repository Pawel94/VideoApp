import React, { useState, useEffect } from "react";
import GetByIdVimeo from "../FetchData/Viemo";

const useApiFromVimeo = () => {
  const [foundVideo, SetFoundVideo] = useState([]);
  const [url, setURL] = useState("https://vimeo.com/");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();
  useEffect(() => {
    let [videoLinkJSON, linkToClick] = GetByIdVimeo(url);

    fetch(videoLinkJSON)
      .then((response) => response.json())
      .then((jsonData) => {
        setIsError(false);
        setIsLoading(true);
        console.log(jsonData);
        SetFoundVideo(
          {
            id: jsonData.video_id,
            title: jsonData.title,
            img: jsonData.thumbnail_url,
            linkToClick: linkToClick,
          },

          (error) => {
            setIsLoading(true);
            setIsError(error);
          }
        );
      });
  }, [url]);

  return [{ foundVideo, isLoading, isError }, setURL];
};

export default useApiFromVimeo;
