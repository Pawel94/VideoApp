import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    //statistics: "statistics",
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
