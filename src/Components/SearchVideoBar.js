import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "reactstrap";

const SearchVideo = ({ setURL, selectedoption }) => {
  const [state, setState] = useState();

  useEffect(() => {
    if (selectedoption === "youtube")
      setState("https://www.youtube.com/watch?v=bPITHEiFWLc&ab");
    else setState("https://vimeo.com/562114431");
  }, [selectedoption]);
  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setURL(state);
    event.preventDefault();
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <div class="row justify-content-center m-2 ">
        <div class="col-6">
          <Input
            onChange={handleChange}
            name="video-search"
            type="text"
            value={state}
          />
        </div>
        <div class="col-2">
          <Button class="btn btn-info">Find video!</Button>
        </div>
      </div>
    </Form>
  );
};

export default SearchVideo;
