import React from "react";
import workout from "./img/workout.svg";
import gym1 from "./img/gymclipart1.svg";
import gym2 from "./img/gymclipart2.svg";
import gymLogo from "./img/TCF_CLEAN.svg";

const Home = () => {
  return (
    <div className="pageContainer">
      <div className="homeHeader">
        <img src={gymLogo} className="tcfLogo" />
      </div>
       <img src={workout} />
       <img src={gym1} />
       <img src={gym2} />
    </div>
  );
};

export default Home;
