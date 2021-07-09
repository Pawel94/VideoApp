import React from "react";

const SelectVideoRadioButton = ({ setSelectedOption, selectedoption }) => {
  const select = (event) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <div class="row justify-content-center m-2 " onChange={select}>
      <div class="col-2 ">
        <input
          type="radio"
          checked={selectedoption === "youtube"}
          value="youtube"
          name="typeOfVideo"
        />{" "}
        <span>YOUTUBE</span>
      </div>
      <div class="col-2 ">
        <input
          type="radio"
          checked={selectedoption === "Vimeo"}
          value="Vimeo"
          name="gender"
        />{" "}
        VIEMO
      </div>
    </div>
  );
};

export default SelectVideoRadioButton;
