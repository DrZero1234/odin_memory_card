import styled, { keyframes } from "styled-components";
import cardBg from "../../assets/cardBg.jpg";

const slideIn = keyframes`
  from{
    transform: scale(0);
  } to {
    transform: scale(1);
  }
`;

export const HpCardTemplate = styled.div`
  background-image: url(${cardBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 1em;
  font-family: Henny Penny, sans-serif;
  transition: transform 0.15s ease-in;
  animation: ${slideIn} 0.2s linear;
`;
