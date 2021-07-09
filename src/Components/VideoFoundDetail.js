import React, { useContext, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Alert,
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
          className="shadow-lg m-2 bg-white rounded text-secondary text-dark "
        >
          <CardImg
            top
            width="100%"
            src={movie.img}
            alt="Card image cap"
            onClick={() => window.open(movie.linkToClick)}
          />
          <CardBody class="width:80% text-dark">
            <CardTitle class="text-primary" tag="h4">
              {movie.title}
            </CardTitle>
            <CardSubtitle class="text-dark" tag="h6" className="mb-2">
              Desription: {movie.description}
            </CardSubtitle>
            <CardText class="text-dark">ID: {movie.id} </CardText>
            <CardText class="text-dark">Views: {movie.viewCount}</CardText>
            <CardText class="text-dark">
              Published: {movie.publishedAt}
            </CardText>

            <CardText class="text-dark">Likes: {movie.likeCount}</CardText>
            <hr></hr>

            <Button outline color="info" onClick={addMovieToLikeList}>
              ADD VIDEO TO YOUR LIST!
            </Button>
          </CardBody>
        </Card>
      ) : (
        <div>
          <Alert color="dark" isOpen={true}>
            Add new video - type correct URL
          </Alert>
        </div>
      )}
    </div>
  );
};
export default VideoFoundDetail;
