import React, { useContext, useState } from "react";
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

const VideoFoundDetail = ({ movie, selectedoption }) => {
  const { dispatch } = useContext(MovieContex);

  const addMovieToLikeList = () => {
    console.log("Dodaje");
    dispatch({
      type: "ADD_MOVIE_TO_LIKE_LIST",
      movie: {
        id: movie.id,
        title: movie.title,
        img: movie.img,
        linkToClick: movie.linkToClick,
        description: movie.description,
        publishedAt: movie.publishedAt,
        linkToClick: movie.linkToClick,
        viewCount: movie.viewCount,
        likeCount: movie.likeCount,
      },
    });
  };
  return (
    <div>
      {movie.id !== undefined ? (
        <Card
          variant="top"
          className="shadow-lg m-2 bg-white rounded text-secondary "
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
            <h1>{selectedoption}</h1>
            <CardSubtitle tag="h6" className="mb-2">
              ID: {movie.id}
              published: {movie.published}
              viewCount: {movie.viewCount}
              Desription: {movie.description}
            </CardSubtitle>
            <CardText>{"movie.linkToClick"}</CardText>
            <Button outline color="info" onClick={addMovieToLikeList}>
              LIKE This video!
            </Button>
          </CardBody>
        </Card>
      ) : (
        <h3 class="row justify-content-center m-2">
          ADD new video from search bar
        </h3>
      )}
    </div>
  );
};
export default VideoFoundDetail;
