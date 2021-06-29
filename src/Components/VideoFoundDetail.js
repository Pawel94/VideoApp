import React, { useContext } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import { MovieContex } from "../Context/MovieContex";

const VideoFoundDetail = ({ movie }) => {
  const { dispatch } = useContext(MovieContex);
  console.log("movie");
  console.log(movie.id);
  const addMovieToLikeList = () => {
    console.log("Dodaje");
    dispatch({
      type: "ADD_MOVIE_TO_LIKE_LIST",
      movie: {
        id: movie.id,
        title: movie.title,
        img: movie.img,
        linkToClick: movie.linkToClick,
      },
    });
  };

  return (
    <Card
      className="bg-secondary text-warning"
      style={{ margin: "1%", textAlign: "center" }}
    >
      <CardImg
        top
        width="100%"
        src={movie.img}
        alt="Card image cap"
        onClick={() => window.open(movie.linkToClick)}
      />
      <CardBody class="width:80%">
        <CardTitle tag="h5">{movie.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2">
          Upload Date: {movie.dateUpload}
          ID: {movie.id}
        </CardSubtitle>
        <CardText>{movie.linkToClick}</CardText>
        <Button outline color="info" onClick={addMovieToLikeList}>
          LIKE This video!
        </Button>
      </CardBody>
    </Card>
  );
};
export default VideoFoundDetail;
