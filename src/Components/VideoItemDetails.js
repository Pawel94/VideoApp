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

const VideoItemDetails = ({ movie }) => {
  const { dispatch } = useContext(MovieContex);
  const deleteVideoFromList = (id) => {
    console.log(id);
    dispatch({
      type: "REMOVE_MOVIE",
      id,
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
        <CardSubtitle tag="h6" className="mb-2 ">
          Upload Date: {movie.dateUpload}
          ID: {movie.id}
        </CardSubtitle>
        <CardText>{movie.linkToClick}</CardText>
        <Button outline onClick={() => deleteVideoFromList(movie.id)}>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};
export default VideoItemDetails;
