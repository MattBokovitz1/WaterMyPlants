import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationDiv, Links, Nav, Logo } from "../../styles/StyledComponents";

function NavBar() {
  return (
    <Nav>
      <Logo>
        <Links to="/">
          <img src="../../styles/logo" alt="logo" />
        </Links>
      </Logo>
      <NavigationDiv>
        <Links to="/login">Log In</Links>
        <Links to="/signup">Sign Up</Links>
      </NavigationDiv>
    </Nav>
  );
}

export default NavBar;
