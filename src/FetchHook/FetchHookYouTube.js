import React, { useState, useEffect } from "react";
import GetByIdYoutube from "../FetchData/YouTubeF";
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
const useApiFromYT = () => {
  const [foundVideo2, SetFoundVideo] = useState([]);
  const [url, setURL] = useState("");
  const [isLoading2, setIsLoading] = useState(false);
  const [isError2, setIsError] = useState(true);

  function handleErrors(response) {
    if (!response.ok) {
      console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRR");
      SetFoundVideo({});
      throw Error(response.statusText);
    }
    return response;
  }
  useEffect(() => {
    let [videoLinkJSON, linkToClick] = GetByIdYoutube(url);

    fetch(videoLinkJSON)
      .then(handleErrors)
      .then((response) => response.json())
      .then((jsonData) => {
        setIsLoading(true);
        console.log(jsonData);
        jsonData.items.length !== 0
          ? jsonData.items.map((item) => {
              SetFoundVideo({
                id: item.id,
                title: item.snippet.title,
                img: item.snippet.thumbnails.standard.url,
                description: item.snippet.description,
                publishedAt: item.snippet.publishedAt,
                linkToClick: linkToClick,
                viewCount: item.statistics.viewCount,
                likeCount: item.statistics.likeCount,
              });
              console.log("foundVideo2");
              console.log(foundVideo2);
            })
          : SetFoundVideo([]);
      })
      .catch(function (error) {
        console.log("error is ");
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      });
  }, [url]);

  return [{ foundVideo2, isLoading2, isError2 }, setURL];
};

export default useApiFromYT;
