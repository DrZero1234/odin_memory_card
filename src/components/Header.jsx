import titleText from "../assets/TitleText.png";

export const Header = ({ level, highestScore, currentScore }) => {
  return (
    <header>
      <span className="header-subtext">
        Level <span className="header-maintext">{level}</span>
      </span>
      <img
        src={titleText}
        alt="Header title"
        style={{ maxWidth: "250px", maxHeight: "250px" }}
      />
      <div
        style={{
          display: "grid",
          gap: "1em",
          gridTemplateRows: "1fr",
        }}
      >
        <span className="header-subtext">
          Highest score:{" "}
          <span className="header-maintext">{highestScore}</span>
        </span>
        <span className="header-subtext">
          Current score:{" "}
          <span className="header-maintext">{currentScore}</span>
        </span>
      </div>
    </header>
  );
};
