import styled, { createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import background from "./assets/nature.jpg";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  body {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    padding: 0;
    margin: 0;

    background-image: url(${background});
    font-family: 'Roboto', sans-serif;  
  }
`;

export const StyledContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  z-index: 1;

  padding: 3em;

  background: rgba(199, 210, 254, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;

  background-clip: border-box;
  backdrop-filter: blur(10px);

  color: white;
  cursor: pointer;
`;

export const StyledUserPhoto = styled.img`
  width: 150px;
  height: 150px;

  object-fit: fill;

  border: solid 3px rgba(243, 244, 246, 1);
  border-radius: 50%;
`;

export const StyledName = styled.h1`
  margin: 0;
  margin-top: 1rem;

  line-height: 1.25;
  letter-spacing: 1.5;
  font-weight: 600;
`;

export const StyledRole = styled.h3`
  margin: 0;

  font-weight: 300;
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: 1.15;
`;
