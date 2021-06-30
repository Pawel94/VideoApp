import React, { useState } from "react";
import { Button, Form, Input, Container, Row, Col } from "reactstrap";

const SearchVideo = ({ setURL }) => {
  const [state, setState] = useState("https://vimeo.com/562114431");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    setURL(state);
    event.preventDefault();
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <div class="row justify-content-center m-2">
        <div class="col-6">
          <Input
            onChange={handleChange}
            name="video-search"
            type="text"
            value={state}
          />
        </div>
        <div class="col-1">
          <Button>Find!</Button>
        </div>
      </div>
    </Form>
  );
};

export default SearchVideo;
