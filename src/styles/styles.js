import styled from "styled-components";
import { Link } from "react-router-dom";

export default {
  primaryColor: "#92817a",
  secondaryColor: "#bedbbb",
  backgroundColor: "#8db596",
  width: "75%",
};

//Nav
//@850px

export const Links = styled(Link)`
  padding: 0% 3% 0% 3%;
  text-decoration: none;
`;

export const NavigationDiv = styled.div`
  width: 100%;
  padding: 2% 0% 2% 75%;
  font-size: 2.5rem;
  color: black;
  background: white;
  text-decoration: none;
`;

//SignUp

export const Label = styled.label`
  padding: 0.5% 0% 0.5% 0%;
  font-size: 3rem;
`;

export const Header = styled.h2`
  font-size: 6rem;
  padding: 0% 0% 3% 0%;
  color: " #bedbbb ";
`;

export const Input = styled.input`
  font-size: 2rem;
  margin: 0.75% 0% 0.75% 0%;
`;

//Login

export const Button = styled.button`
  font-size: 3rem;
  margin: 2% 0% 0% 0%;
`;

//MyPlants

export const H3 = styled.h3`
  font-size: 3rem;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
`;
