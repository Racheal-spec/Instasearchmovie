import React from "react";
import "./tagButton.scss";

type TagProp = {
  title: string;
};
const TagButton: React.FC<TagProp> = ({ title }) => {
  return (
    <div>
      <div className="tagtitle">{title}</div>
    </div>
  );
};

export default TagButton;
