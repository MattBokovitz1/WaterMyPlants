import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import plantLogo from "../../styles/plantLogo.png";
import { LinksDiv, Links, Nav, Logo, H1 } from "../../styles/StyledComponents";

function NavBar() {
  return (
    <Nav>
      <Logo>
        <Links to="/">
          <img src={plantLogo} alt="logo" width="50%" />
        </Links>
      </Logo>
      <H1>Water My Plants</H1>
      <LinksDiv>
        <Links to="/login">Log In</Links>
        <Links to="/signup">Sign Up</Links>
      </LinksDiv>
    </Nav>
  );
}

export default NavBar;
