import React from "react";
import "./title.scss";
import { TitleProp } from "../../Types/ComponentTypes/ComponentTypes";

const GlobalTitle: React.FC<TitleProp> = ({ title, description }) => {
  return (
    <div className="titleDiv">
      <div className="title">
        <h1>{title}</h1>
        <div className="line"></div>
        <p className="desc">{description ? description : ""}</p>
      </div>
    </div>
  );
};

export default GlobalTitle;
