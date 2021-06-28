const GetIdFromLink = (url) => {
  //let str = url.replace(/[^0-9\.]+/g, "");
  let id = url.replace("https://vimeo.com/", "");

  return id;
};

const GetByIdVimeo = (url) => {
  let id = GetIdFromLink(url);
  let fetchUrl = `https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/${id}`;
  let movieUrl = `https://www.vimeo.com/${id}`;
  return [fetchUrl, movieUrl];
};

export default GetByIdVimeo;
