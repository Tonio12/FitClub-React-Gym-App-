import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import tic from "../../assets/whiteTick.png";
import rightArrow from "../../assets/rightArrow.png";
function Plans() {
  return (
    <div className="plan-container" id="plans">
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
      <div className="program-header">
        <span className="stroke-text">Ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">with us</span>
      </div>

      <div className="plan-details">
        {plansData.map((plan, i) => {
          return (
            <div className="plan" key={i}>
              {plan.icon}
              <span style={{ fontWeight: "bold" }}>{plan.name}</span>
              <span>$ {plan.price}</span>
              <div className="features">
                {plan.features.map((feature, i) => {
                  return (
                    <div key={i}>
                      <img src={tic} alt="" />
                      <span>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div className="benefits-p">
                <span>See more benefits</span>
                <img src={rightArrow} alt="" />
              </div>
              <button className="btn">Join Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Plans;
