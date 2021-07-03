import React, { useState, useContext } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

import { MovieContex } from "../../Context/MovieContex";
const ButtonDropdownComponent = ({ setViewState, movies }) => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const { dispatch } = useContext(MovieContex);
  const changeView = (event) => {
    setViewState(event.target.value);
    console.log(event.target.value);
  };
  console.log(movies);

  const sortByName = ({ movies }) => {
    console.log("Sort");

    // dispatch({
    //   type: "SORT_BY_NAME",
    //   movies,
    // });
  };

  return (
    <div class="row m-2">
      <div class="col-sm-3">
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Change View </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Change View</DropdownItem>
            <DropdownItem value="List" onClick={changeView}>
              List View
            </DropdownItem>
            <DropdownItem value="Grid" onClick={changeView}>
              Grid View
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
      <Button outline color="info" onClick={sortByName}>
        SORT
      </Button>
    </div>
  );
};
export default ButtonDropdownComponent;
