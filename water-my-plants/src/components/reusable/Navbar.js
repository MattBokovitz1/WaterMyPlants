import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
