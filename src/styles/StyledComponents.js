import styled from "styled-components";
import { Link } from "react-router-dom";
import backgroundImage from "../components/images/bg.jpg";

export default {
  primaryColor: "#92817a",
  secondaryColor: "#bedbbb",
  backgroundColor: "#8db596",
};

// Nav

export const Links = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export const Forms = styled.div`
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  padding: 10% 0 8% 0;
  background-color: #bedbbb;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #8db596;
  text-decoration: none;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const LinksDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 22%;
  font-size: 1rem;
  color: black;
  text-decoration: none;

  @media (max-width: 500px) {
    width: 50%;
  }
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 15%;
`;

// SignUp

export const Header = styled.h2`
  font-size: 3rem;
  margin-bottom: 3%;
  padding: 0% 0% 1% 0%;
  color: #92817a;
`;

export const Input = styled.input`
  font-size: 1rem;
  margin: 0.5% 0% 0.5% 0%;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Footers = styled.div`
  position: fixed;
  background: black;
  z-index: 100;
  margin: 30% 20% 0 0;
`;

// Login

export const Button = styled.button`
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.1em 2.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  font-size: 1rem;
  box-sizing: border-box;
  text-decoration: none;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
  background: #8db596;
`;

export const Quote = styled.div`
  width: 50%;
  margin: 5% 30% 0 25%;
  text-align: center;
  @media (max-width: 500px) {
    display: none;
  }
`;

// MyPlants

export const H3 = styled.h3`
  font-size: 2rem;
  color: white;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: white;
  padding: 0% 1% 0 0.5%;
`;

export const Background = styled.div`
  background: url(https://cdn.britannica.com/42/91642-050-332E5C66/Keukenhof-Gardens-Lisse-Netherlands.jpg);
`;

export const StyledPage = styled.div`
  position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  width: 35%;
  height: 100%;
  margin: 5% 0 0 0;
`;

export const StyledHeader = styled.h1`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding-right: 1rem;
  align-items: center;
  color: white;
  margin-left: 20%;
  font-size: 1.7rem;
  font-weight: 450;
  justify-items: center;
  margin-top: 15%;
  width: 75%;
`;

export const Span = styled.span`
  font-weight: bolder;
  color: white;
  border-bottom: 2px solid white;
`;
