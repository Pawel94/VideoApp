import React, { useState, useContext } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

import { MovieContex } from "../../Context/MovieContex";
const ButtonDropdownComponent = ({ setViewState, movies, setpostPerPage }) => {
  const [dropdownOpen, setOpen] = useState(false);

  const [dropdownOpenSort, setOpenSort] = useState(false);
  const [dropdownOpenNumber, setOpenNumber] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const toggleSort = () => setOpenSort(!dropdownOpenSort);
  const toggleNumber = () => setOpenNumber(!dropdownOpenNumber);
  const { dispatch } = useContext(MovieContex);

  const changeView = (event) => {
    setViewState(event.target.value);
    console.log(event.target.value);
  };

  const sortByData = () => {
    dispatch({
      type: "SORT_BY_DATA",
      movie: movies,
    });
  };
  const sortByName = () => {
    dispatch({
      type: "SORT_BY_TITLE",
      movie: movies,
    });
  };
  const setPages = (event) => {
    console.log(event.target.value);
    setpostPerPage(event.target.value);
  };
  return (
    <div class="d-flex justify-content-center">
      <div class="m-2">
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Change View: </DropdownToggle>
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
      <div class="m-2">
        <ButtonDropdown isOpen={dropdownOpenSort} toggle={toggleSort}>
          <DropdownToggle caret>Sort by: </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Change by: </DropdownItem>
            <DropdownItem value="List" onClick={sortByName}>
              Name
            </DropdownItem>
            <DropdownItem value="Grid" onClick={sortByData}>
              Data
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
      <div class="m-2">
        <ButtonDropdown isOpen={dropdownOpenNumber} toggle={toggleNumber}>
          <DropdownToggle caret>Movies per page: </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Number of elements</DropdownItem>
            <DropdownItem value="2" onClick={setPages}>
              2
            </DropdownItem>
            <DropdownItem value="5" onClick={setPages}>
              5
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    </div>
  );
};
export default ButtonDropdownComponent;
