import React from "react";
import "./title.scss";

type TitleProp = {
  title: string;
};
const GlobalTitle: React.FC<TitleProp> = ({ title }) => {
  return (
    <div>
      <div className="title">
        <h1>{title}</h1>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default GlobalTitle;
