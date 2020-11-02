import React from "react";
import workout from "./img/workout.svg";
import gym1 from "./img/gymclipart1.svg";
import gym2 from "./img/gymclipart2.svg";
import gymLogo from "./img/TCF_CLEAN.svg";
import mockup from "./img/tcf_mockup.jpg";
import gymImage from "./img/gymImage.jpg"
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
          <img className="gymSvg" src={gym1} alt="test" />
          <p className="blueWaveText">
    Town Center Fitness is Southwood's newest modern gym working in colloboration with MSK industry leaders JointStrong. The fitness center offers 24 hour access to top of the line equiptment, weekly classes to fit all scheules both virtual and in person as on site MSK and mobility coaching. Stop by, give us a call or send us a message and see how Town Center Fitness can help bring out the best in the new you.
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
        <div className="mockupContainer">
          <img src={mockup} className="mockupImage" />
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
          <img className="gymSvg" src={gym2} alt="test" />
          <p className="blueWaveText">
            Our facility provides a full gym with weight machines, free weights, functional fitness equipment, spin classes and MSK coaching in the heart of Southwood. We practice current CDC guidelines for cleanileness and steralization ensuring our staff and guest stay healthy and safe.  
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
        <div className="mockupContainer">
          <img src={gymImage} />
        </div>

      </div>
      <Social />
    </>
  );
};

export default Home;
