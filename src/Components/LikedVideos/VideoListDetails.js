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
  Col,
  Row,
} from "reactstrap";

import { MovieContex } from "../../Context/MovieContex";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
const VideoListDetails = ({ movie }) => {
  const { dispatch } = useContext(MovieContex);
  const deleteVideoFromList = (id) => {
    console.log(id);
    dispatch({
      type: "REMOVE_MOVIE",
      id,
    });
  };
  console.log(movie.length);

  return (
    <div>
      <ListGroupItem class="mx-auto">
        <ListGroupItemHeading>{movie.title}</ListGroupItemHeading>
        <div class="container">
          <Row>
            <Col class="col-sm-2">
              <img src={movie.img} class="img-thumbnail w-75" />
            </Col>
            <Col class="col-6">
              <CardText>Upload Date: {movie.dateUpload}</CardText>
              <CardText> ID: {movie.id}</CardText>
              <CardText>Published Date: {movie.publishedAt}</CardText>
              <CardText>Liked: {movie.likeCount}</CardText>
            </Col>

            <Col class="col-2">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1"></h5>
                <small class="text-muted">3 days ago</small>
                <Button
                  outline
                  color="danger"
                  onClick={() => deleteVideoFromList(movie.id)}
                >
                  Delete
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </ListGroupItem>
    </div>
  );
};
export default VideoListDetails;
