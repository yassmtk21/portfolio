import React from "react";
import "./bubbleText.css";
const BubleText = () => {
  return (
    <h2>
      {"Yassine".split("").map((child, i) => (
        <span key={i} className={"hoverText"}>{child}</span>
      ))}
    </h2>
  );
};

export default BubleText;
