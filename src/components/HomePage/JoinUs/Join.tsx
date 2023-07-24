import React from "react";
import Button from "../../Button";
import greenland from "../../../images/greenland.jpg";
import "./Join.scss";
import { useNavigate } from "react-router-dom";

const Join: React.FC = () => {
  let navigate = useNavigate();
  return (
    <section className="joinWrapper">
      <div className="JoinDiv">
        <div className="joinDesc">
          <h1>Join Us Today</h1>
          <p>
            Join over 100, 000 Nigerians to Watch top rated hollywood, nollywood
            and bollywood hits for family and kids---All free
          </p>
          <Button
            primary
            onClick={() => {
              navigate("/login");
            }}
            arialabel="joinus-button"
          >
            Join Us
          </Button>
        </div>
        <img src={greenland} alt="amazon-prime"></img>
      </div>
    </section>
  );
};

export default Join;
