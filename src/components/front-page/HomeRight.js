import React from "react";
import styled from "styled-components";
import img1 from "../images/01.jpg";
import img2 from "../images/02.jpg";
import img3 from "../images/03.jpg";
import img4 from "../images/04.jpg";
import img5 from "../images/05.jpg";
import img6 from "../images/06.jpg";

const HomeRight = () => {
  return (
    <StyledPage>
      <RightBottom>
        <TopDiv>
          <H1>This app adds flourishing to your life.</H1>
          <p>Remember to water so that you have a colorful and joyful world.</p>
          <Button>Learn More</Button>
        </TopDiv>

        <BottomDiv>
          <H2>Some of our plants.</H2>

          <ParDiv>
            <IndivPars>
              <Img src={img1} />
              <h4>Magna sed consequat tempus</h4>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </IndivPars>

            <IndivPars>
              <Img src={img2} />
              <h4>Ultricies lacinia interdum</h4>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </IndivPars>

            <IndivPars>
              <Img src={img3} />
              <h4>Tortor metus commodo</h4>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </IndivPars>

            <IndivPars>
              <Img src={img4} />
              <h4>Quam neque phasellus</h4>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </IndivPars>

            <IndivPars>
              <Img src={img5} />
              <h4>Nunc enim commodo aliquet</h4>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </IndivPars>

            <IndivPars>
              <Img src={img6} />
              <h4>Risus ornare lacinia</h4>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </IndivPars>
          </ParDiv>

          <ButtonBottom>Look at this button</ButtonBottom>
        </BottomDiv>
      </RightBottom>
    </StyledPage>
  );
};

export default HomeRight;

const StyledPage = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 200;
  max-width: 100%;
  padding: 1rem;
  width: 60%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% 10%;
  width: 80%;
  position: relative;
  padding-bottom: 2rem;
  border-bottom: 2px solid lightgrey;
  font-size: 0.8rem;
`;

const RightBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  position: absolute;
  width: 65%;
  margin-left: 35%;
  margin-top: 2rem;
  padding-bottom: 2rem;
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  position: relative;
  align-items: left;
`;

const Button = styled.button`
  border: 2px solid lightgray;
  border-radius: 8px;
  padding: 1.5rem;
  background: none;
  font-size: 0.8rem;
  margin-top: 2rem;
  width: 30%;
  min-width: 125px;
  margin-bottom: 2rem;
  max-width: 125px;
`;

const H1 = styled.h1``;

const H2 = styled.h2`
  width: 70%;
`;

const ParDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const IndivPars = styled.div`
  justify-content: space-evenly;
  padding-right: 2rem;
  padding-left: 2rem;
  width: 35%;
  padding-bottom: 5rem;
  font-size: 0.8rem;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  min-width: 200px;
  border-radius: 8px;
`;

const ButtonBottom = styled.button`
  border: 2px solid lightgray;
  border-radius: 8px;
  padding: 1.5rem;
  background: none;
  font-size: 0.8rem;
  width: 25%;
  margin-bottom: 3rem;
  width: 30%;
  min-width: 165px;
  max-width: 165px;
`;
