import axios from "axios";
let KEY = "AIzaSyAR2K7nwWP7HGHaDueClO1Fq5uSNqTRYR4";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    //  statistics: "statistics",
    part: "snippet,statistics",
    maxResults: 5,
    key: KEY,
  },
});
