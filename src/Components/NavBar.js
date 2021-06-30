import React from "react";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const NavBar = (props) => {
  return (
    <div className="text-warning">
      <Navbar
        className="text-warning p-2"
        color="dark text-warning"
        expand="md"
      >
        <NavbarBrand href="/"> VIDEOAPP</NavbarBrand>
        <Nav className="mr-auto text-warning" navbar>
          <NavItem>
            <NavLink href="/likedVideos/">LIKED VIDEOS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/aboutme/">About ME</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
