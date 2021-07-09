const GetIdFromLink = (url) => {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  console.log(url);
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
};

const GetByIdYoutube = (url) => {
  let id = GetIdFromLink(url);
  const KEY = "";
  const fetchUrl = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${KEY}&part=snippet,contentDetails,statistics,status`;
  const movieUrl = `https://www.youtube.com/watch?v=${id}`;
  //const fetchUrl = `https://www.googleapis.com/youtube/v3/videos?&key=${KEY}&part=snippet,contentDetails,statistics,status`;
  return [fetchUrl, movieUrl];
};

export default GetByIdYoutube;
