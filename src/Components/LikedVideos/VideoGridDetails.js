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

import { MovieContex } from "../../Context/MovieContex";

const VideoGridDetails = ({ movie }) => {
  const { dispatch, dispatchLiked } = useContext(MovieContex);

  const deleteVideoFromList = (id) => {
    console.log(id);
    dispatch({
      type: "REMOVE_MOVIE",
      id,
    });
  };

  const removeFromLikeList = (id) => {
    console.log(id);
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
    <div class="col-sm-3 ">
      <Card
        variant="top"
        className="shadow-lg p-3 mb-5 bg-white rounded text-secondary min-vh-100  "
      >
        <CardImg
          top
          width="10%"
          height="200px"
          src={movie.img}
          alt="Card image cap"
          onClick={() => window.open(movie.linkToClick)}
        />
        <CardBody>
          <CardTitle tag="h5">{movie.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 ">
            <CardText> ID: {movie.id}</CardText>
            <CardText>Upload Date: {movie.publishedAt}</CardText>
            <CardText>Liked: {movie.likeCount}</CardText>
          </CardSubtitle>
          <hr></hr>

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
          <Button
            outline
            color="danger"
            onClick={() => deleteVideoFromList(movie.id)}
          >
            Delete from list
          </Button>
        </CardBody>

        <CardText>
          <small className="text-muted">Last updated 3 mins ago</small>
        </CardText>
      </Card>
    </div>
  );
};
export default VideoGridDetails;
