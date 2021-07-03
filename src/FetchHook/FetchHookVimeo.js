import React, { useState, useEffect } from "react";
import GetByIdVimeo from "../FetchData/Viemo";
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
const useApiFromVimeo = () => {
  const [foundVideo, SetFoundVideo] = useState([]);
  //const [url, setURL] = useState("https://vimeo.com/562114431");
  const [url, setURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    let [videoLinkJSON, linkToClick] = GetByIdVimeo(url);

    // fetch(videoLinkJSON)
    //   .then(handleErrors)
    //   .then((response) => response.json())
    //   .then((jsonData) => {
    //     setIsError(false);
    //     setIsLoading(true);
    //     console.log(jsonData);
    //     SetFoundVideo(
    //       {
    //         id: jsonData.video_id,
    //         title: jsonData.title,
    //         img: jsonData.thumbnail_url,
    //         linkToClick: linkToClick,
    //         published: jsonData.upload_date,
    //         viewCount: "NO INFORMATION",
    //         likeCount: "NO INFORMATION",
    //       },
    //       (error) => {
    //         setIsLoading(false);
    //         SetFoundVideo({});
    //         setIsError(true);
    //         console.log(isError);
    //       }
    //     );
    //   })
    //   .catch(function (error) {
    //     console.log("error");
    //     setIsLoading(false);
    //     setIsError(true);
    //   });
    function handleErrors(response) {
      if (!response.ok) {
        console.log("EEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRROOOOR");
        setIsError(true);
        SetFoundVideo({});
        throw Error(response.statusText);
      }
      return response;
    }
    fetch(videoLinkJSON)
      .then(handleErrors)
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
            description: jsonData.description,
            published: jsonData.upload_date,
            viewCount: "NO INFORMATION",
            likeCount: "NO INFORMATION",
          },
          (error) => {
            setIsLoading(false);
            SetFoundVideo({});
            console.log(isError);
          }
        );
      })
      .catch(function (error) {
        console.log("error");
        setIsLoading(false);
        setIsError(true);
      });
  }, [url]);

  return [{ foundVideo, isLoading, isError }, setURL];
};

export default useApiFromVimeo;
