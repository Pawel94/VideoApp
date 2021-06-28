import React, { useState } from "react";
import { Button, Form, Input, Container, Row, Col } from "reactstrap";

const SearchVideo = ({ handleFormSubmit }) => {
  const [state, setState] = useState("https://vimeo.com/562114431");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(state);
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <Container className="themed-container mt-5" fluid="xl">
        <Row>
          <Col xs="11">
            <Input
              onChange={handleChange}
              name="video-search"
              type="text"
              value={state}
            />
          </Col>
          <Col xs="1">
            <Button>Find!</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default SearchVideo;
