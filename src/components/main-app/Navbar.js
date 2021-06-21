import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import plantLogo from "../../styles/plantLogo.png";
import { useHistory } from "react-router-dom";
import { LinksDiv, Links, Nav, Logo, H1 } from "../../styles/StyledComponents";

function NavBar() {
  const history = useHistory();

  const logout = () => {
    localStorage.clear("token");
    history.push("/");
  };
  return (
    <Nav>
      <Logo>
        <Links to="/home">
          <img src={plantLogo} alt="logo" width="50%" />
        </Links>
      </Logo>
      <Links to="/">
        <H1> Water My Plants</H1>
      </Links>
      <LinksDiv>
        <Links to="/login">Log In</Links>
        <Links to="/signup">Sign Up</Links>
        <Links onClick={logout}>Log Out</Links>
      </LinksDiv>
    </Nav>
  );
}

export default NavBar;
