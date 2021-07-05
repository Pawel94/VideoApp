import React, { useContext } from "react";
import { CardText, Button, Col, Row } from "reactstrap";

import { MovieContex } from "../../Context/MovieContex";
import { ListGroupItem, ListGroupItemHeading } from "reactstrap";
const VideoListDetails = ({ movie }) => {
  const { dispatch } = useContext(MovieContex);

  const deleteVideoFromList = (id) => {
    console.log(id);
    dispatch({
      type: "REMOVE_MOVIE",
      id,
    });
  };

  return (
    <div>
      <div class="mx-auto    ">
        <div class="container shadow-lg p-3 mb-5 bg-white rounded text-secondary  ">
          <ListGroupItemHeading>{movie.title}</ListGroupItemHeading>
          <Row>
            <Col class="col-sm-2">
              <img src={movie.img} class="img-thumbnail w-75" />
            </Col>
            <Col class="col-6">
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
      </div>
    </div>
  );
};
export default VideoListDetails;
