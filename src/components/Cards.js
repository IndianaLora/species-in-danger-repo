import React from "react";
import purpose from "../img/purpose.gif";
import commitment from "../img/commit.gif";
import goals from "../img/goals.gif";
function Cards() {
  return (
    <div className="cardContainer">
      <div className="cards">
        <h3> Purpose</h3>
        <img src={purpose} className="card-image" />
        <p className=" w3-center w3-animate-bottom">
          Our mission is to serve low income families with free online
          educational services To encourage the passion to learn through ethical
          and honest meansOur mission is to serve low income families with free online
          educational services To encourage the passion to learn through ethical
          and honest means
        </p>
      </div>
      <div className="cards">
        <h3>Goals</h3>
        <img src={goals} className="card-image" />
        <p className=" w3-center w3-animate-bottom">
          Continuos deliverment of updates info about climate change and species
          in danger
          Our mission is to serve low income families with free online
          educational services To encourage the passion to learn through ethical
          and honest means 
        </p>
      </div>
      <div className="cards">
        <h3>Commitment</h3>
        <img src={commitment} className="card-image" />

        <p className=" w3-center w3-animate-bottom">
          o spread the power of optimism. sweetgreen: To inspire healthier
          communities by connecting people to real food.
          Our mission is to serve low income families with free online
          educational services To encourage the passion to learn through ethical
          and honest means
        </p>
      </div>
    </div>
  );
}

export default Cards;
