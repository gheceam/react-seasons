import "./SeasonsDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun icon massive",
  },
  winter: {
    text: "Brrrr.... put some gloves on!",
    iconName: "snowflake icon massive",
  },
};

const getSeason = (latitude) => {
  const monthNumber = new Date().getMonth();
  if ((monthNumber > 2) & (monthNumber < 9) & (latitude > 0)) {
    return "summer";
  } else {
    return "winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat);
  const { iconName, text } = seasonConfig[season];
  console.log(season);
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName}`}></i>
      <h1>{text}</h1>
      <i className={`icon-right ${iconName}`}></i>
    </div>
  );
};

export default SeasonDisplay;
