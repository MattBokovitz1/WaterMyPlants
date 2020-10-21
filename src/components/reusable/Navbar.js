import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationDiv, Links } from "../../styles/Styles";

function NavBar() {
  return (
    <NavigationDiv>
      <Links to="/">Home</Links>
      <Links to="/login">Log In</Links>
      <Links to="/signup">Sign Up</Links>
    </NavigationDiv>
  );
}

export default NavBar;
