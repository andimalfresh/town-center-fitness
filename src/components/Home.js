import React from "react"
import workout from "./img/workout.svg"
import gym1 from "./img/gymclipart1.svg"
import gym2 from "./img/gymclipart2.svg"
import gymLogo from "./img/tc_logo.svg"
import mockup from "./img/tcf_mockup.jpg"
import gymImage from "./img/gymImage.jpg"
import introVid from "./img/videos/facebook_cover.mp4"
import Social from "./Social"
import { Player } from "video-react"

const Home = () => {
  return (
    <>
      <div className="pageContainer">
        <div className="homeHeader">
          <img src={gymLogo} className="tcfLogo" />
        </div>
        <div className="contextElement">
          <img className="gymSvg" src={gym1} alt="test" />
          <h2>ADD CATCHY HEADING</h2>
          <Player
            playsInline
            poster="/assets/poster.png"
            src={introVid}
          />
          <p className="blueWaveText">Grand Opening DIV WIth video and text</p>
        </div>
        <div className="contextElement">
          <img className="gymSvg" src={gym1} alt="test" />
          <h2>ADD CATCHY HEADING</h2>
          <p className="blueWaveText">
            Town Center Fitness is Southwood's newest modern gym working in
            colloboration with MSK industry leaders JointStrong. The fitness
            center offers 24 hour access to top of the line equiptment, weekly
            classes to fit all scheules both virtual and in person as on site
            MSK and mobility coaching. Stop by, give us a call or send us a
            message and see how Town Center Fitness can help bring out the best
            in the new you.
          </p>
        </div>
        <div className="contextElement">
          <img className="gymSvg" src={workout} alt="test" />
          <h2>HERE WHEN YOU NEED US</h2>
          <p className="blueWaveText">
            Something about 24 hour access and accessibility, online classes and
            jS being there for you whenever you need it.
          </p>
        </div>
        <div className="mockupContainer">
          <img src={mockup} className="mockupImage" />
        </div>

        <div className="contextElement">
          <img className="gymSvg" src={gym2} alt="test" />
          <h2>SOME OTHER CLICHE STATEMENT</h2>
          <p className="blueWaveText">
            Our facility provides a full gym with weight machines, free weights,
            functional fitness equipment, spin classes and MSK coaching in the
            heart of Southwood. We practice current CDC guidelines for
            cleanileness and steralization ensuring our staff and guest stay
            healthy and safe.
          </p>
        </div>
        <div className="mockupContainer">
          <img src={gymImage} className="mockupImage" />
        </div>
      </div>
      <Social />
    </>
  );
};

export default Home;
