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

const VideoItemDetails = ({ movie }) => {
  console.log("list2 item !!!!");
  console.log(movie);

  return (
    <Card style={{ margin: "1%", textAlign: "center" }}>
      <CardImg
        top
        width="100%"
        src={movie.img}
        alt="Card image cap"
        onClick={() => window.open(movie.linkToClick)}
      />
      <CardBody class="width:80%">
        <CardTitle tag="h5">{movie.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Upload Date: {movie.dateUpload}
        </CardSubtitle>
        <CardText>{movie.linkToClick}</CardText>
        <Button onClick={() => window.open(movie.linkToClick)}>
          LIKE This video!
        </Button>
      </CardBody>
    </Card>
  );
};
export default VideoItemDetails;
