import React, { useContext } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardFooter,
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
    <div class="col-sm-4">
      <Card
        variant="top"
        className="shadow-lg p-3 mb-5 bg-white rounded text-secondary"
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
          <Button
            outline
            color="danger"
            onClick={() => deleteVideoFromList(movie.id)}
          >
            Delete
          </Button>
        </CardBody>
        <CardText>
          <small className="text-muted">Last updated 3 mins ago</small>
        </CardText>
      </Card>
    </div>
  );
};
export default VideoItemDetails;
