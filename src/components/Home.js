import React from "react";
import workout from "./img/workout.svg";
import gym1 from "./img/gymclipart1.svg";
import gym2 from "./img/gymclipart2.svg";
import gymLogo from "./img/TCF_CLEAN.svg";
import mockup from "./img/tcf_mockup.jpg";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="pageContainer">
        <div className="homeHeader">
          <img src={gymLogo} className="tcfLogo" />
        </div>
        <svg
          className="Wave-crest4"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          version="1.1"
          style={{ height: "40px" }}
        >
          <path d="M100 100 H0 V100 H0 V50 C 33.3333 100, 66.6666 0, 100 50"></path>
        </svg>
        <div className="contextElement">
          <img src={gym1} alt="test" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <svg
          className="Wave-crest3"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          version="1.1"
          style={{ height: "40px" }}
        >
          <path d="M100 100 H0 V100 H0 V50 C 33.3333 100, 66.6666 0, 100 50"></path>
        </svg>
        <img src={mockup} className="mockupImage" />

        <img src={gym1} />
        <img src={gym2} />
      </div>
      <Social />
    </>
  );
};

export default Home;
