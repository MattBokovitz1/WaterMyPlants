import styled from "styled-components";
import { Link } from "react-router-dom";

export default {
  primaryColor: "#92817a",
  secondaryColor: "#bedbbb",
  backgroundColor: "#8db596",
  width: "75%",
};

export const Links = styled(Link)`
  padding: 0% 3% 0% 3%;
  text-decoration: none;
  color: white;
`;

export const NavigationDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 2% 0% 2% 70%;
  font-size: 1.5rem;
  color: black;
  background: #8db596;
  text-decoration: none;

  @media (max-width: 800px) {
  }
`;

//SignUp

export const Header = styled.h2`
  font-size: 3rem;
  padding: 0% 0% 1% 0%;
  color: #92817a;
`;

export const Input = styled.input`
  font-size: 1rem;
  margin: 0.5% 0% 0.5% 0%;
`;

//Login

export const Button = styled.button`
  font-size: 1rem;
  margin: 0.5% 0% 5% 0%;
`;

// export const

//MyPlants

export const H3 = styled.h3`
  font-size: 2rem;
  color: white;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: white;
  padding: 0% 1% 0 0.5%;
`;
