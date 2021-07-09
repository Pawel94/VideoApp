import React, { useContext } from "react";
import { CardText, Button, Col, Row } from "reactstrap";

import { MovieContex } from "../../Context/MovieContex";
import { ListGroupItem, ListGroupItemHeading } from "reactstrap";
const VideoListDetails = ({ movie }) => {
  const { dispatch, dispatchLiked } = useContext(MovieContex);

  const deleteVideoFromList = (id) => {
    dispatch({
      type: "REMOVE_MOVIE",
      id,
    });
  };
  const removeFromLikeList = (id) => {
    dispatchLiked({
      type: "REMOVE_MOVIE_LIKE_LIST",
      id,
    });
    dispatch({
      type: "NOT_LIKE_MOVIE",
      id,
    });
  };

  const addToList = (id) => {
    dispatch({
      type: "LIKE_MOVIE",
      id,
    });
    console.log(id);
    dispatchLiked({
      type: "ADD_MOVIE_LIKE_LIST",
      likedMovies: {
        id: movie.id,
        title: movie.title,
        img: movie.img,
        linkToClick: movie.linkToClick,
        description: movie.description,
        publishedAt: movie.publishedAt,
        viewCount: movie.viewCount,
        likeCount: movie.likeCount,
        liked: true,
      },
    });
  };

  return (
    <div>
      <div class="mx-auto    ">
        <div class="container shadow-lg p-3 mb-5 bg-white rounded text-secondary  ">
          <ListGroupItemHeading>{movie.title}</ListGroupItemHeading>
          <small class="text-muted">3 days ago</small>
          <hr></hr>
          <Row>
            <Col class="col-sm-2">
              <img src={movie.img} class="img-thumbnail w-75" />
            </Col>
            <Col class="col-5">
              <CardText> ID: {movie.id}</CardText>
              <CardText>Published Date: {movie.publishedAt}</CardText>
              <CardText>Liked: {movie.likeCount}</CardText>
            </Col>

            <Col class="col-2">
              <div class="d-flex w-100 justify-content-between">
                <Col class="m-2">
                  {movie.liked ? (
                    <Button
                      outline
                      color="btn btn-warning"
                      onClick={() => removeFromLikeList(movie.id)}
                    >
                      Dislike it!
                    </Button>
                  ) : (
                    <Button
                      outline
                      color="btn btn-primary"
                      onClick={() => addToList(movie.id)}
                    >
                      Like it!
                    </Button>
                  )}
                </Col>
                <Col class="m-2">
                  <Button
                    outline
                    color="danger"
                    onClick={() => deleteVideoFromList(movie.id)}
                  >
                    Delete from list
                  </Button>
                </Col>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default VideoListDetails;
