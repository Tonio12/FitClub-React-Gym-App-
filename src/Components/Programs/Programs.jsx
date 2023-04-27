import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

export default function Programs() {
  return (
    <div className="programs" id="programs">
      <div className="program-header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs </span>
        <span className="stroke-text">To Shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => {
          return (
            <div key={program.key} className="categories">
              {program.image}
              <span className="heading">{program.heading}</span>
              <span className="details">{program.details}</span>
              <div className="join-now">
                <span>Join Now </span>
                <span>
                  <img src={RightArrow} alt="Join Now" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
