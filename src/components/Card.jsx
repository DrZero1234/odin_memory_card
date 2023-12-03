import styled from "styled-components";

import { HpCardTemplate } from "./styled/HpCardTemplate";

import hufflepuffLogo from "../assets/Hufflepuff.png";
import slytherinLogo from "../assets/Slytherin.png";
import gryffindorLogo from "../assets/Gryffindor.png";
import ravenclawLogo from "../assets/Ravenclaw.png";
import OtherLogo from "../assets/Other.png";

const COLORS = {
  Gryffindor: "#a02727",
  Slytherin: "#257b3f",
  Ravenclaw: "#0598b6",
  Hufflepuff: "#cb9c27",
  Other: "#808080",
};

const StyledCard = styled(HpCardTemplate)`
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  h3 {
    font-size: 2rem;
  }
`;

const CardContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-style: solid;
  border-width: 20px;
  border-radius: 2em;
  overflow: hide;
  word-break: break-word;
  border-color: ${(props) =>
    props.house === "Slytherin"
      ? COLORS.Slytherin
      : props.house === "Gryffindor"
      ? COLORS.Gryffindor
      : props.house === "Ravenclaw"
      ? COLORS.Ravenclaw
      : props.house === "Hufflepuff"
      ? COLORS.Hufflepuff
      : COLORS.Other};
  padding: 0.5em;
  letter-spacing: 0.1em;

  h3 {
    text-align: center;
  }
`;

export const Card = ({ wizard_data, handleClick }) => {
  const { name, house } = wizard_data;

  const logoSrc =
    house === "Hufflepuff"
      ? hufflepuffLogo
      : house === "Slytherin"
      ? slytherinLogo
      : house === "Gryffindor"
      ? gryffindorLogo
      : house === "Ravenclaw"
      ? ravenclawLogo
      : OtherLogo;

  return (
    <StyledCard onClick={() => handleClick(wizard_data.id)}>
      <CardContent house={house}>
        <h3>{name}</h3>
        {wizard_data.image && (
          <img
            src={wizard_data.image}
            style={{
              display: "flex",
              height: "150px",
              width: "150px",
              objectFit: "cover",
              order: -1,
            }}
          />
        )}
        <img src={logoSrc} className="cardLogo" />
      </CardContent>
    </StyledCard>
  );
};
