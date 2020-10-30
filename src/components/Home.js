import React from "react";

const Home = () => {
  return (
    <div className="pageContainer">
      <div className="homeHeader">
        <div className="imcLogo">
            <img src={require("./img/TCF_CLEAN.svg")} />
          <div className="topTag">Bringing modern fitness to Southwood.</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
