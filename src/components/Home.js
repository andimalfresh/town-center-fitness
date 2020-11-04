import React from "react";
import workout from "./img/workout.svg";
import gym1 from "./img/gymclipart1.svg";
import gym2 from "./img/gymclipart2.svg";
import gymLogo from "./img/tc_logo.svg";
import mockup from "./img/tcf_mockup.jpg";
import gymImage from "./img/gymImage.jpg";
import introVid from "./img/videos/facebook_cover.mp4";
import Social from "./Social";
import { Player, LoadingSpinner } from "video-react";

const vid = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";

const Home = () => {
  return (
    <>
      <div className="pageContainer">
        <div className="homeHeader">
          <img src={gymLogo} className="tcfLogo" />
        </div>
        <div className="videoElement" style={{ backgroundColor: "#CCF2F5" }}>
          <p className="blueWaveText">
            <h2>Your New Southwood Fitness Center</h2>
            Town Center Fitness is excited to announce its grand Opening
            December 5th! Below you will find resources and information about
            the developing changes and additions to your Southwood neighborhood
            fitness center. Feel free to reach out to us on social media or
            using the contact form below, and we will be happy to answer any
            questions you make have.
          </p>
          <Player fluid autoPlay src={vid}>
            <LoadingSpinner />
          </Player>
        </div>
        <div className="contextElement" style={{ backgroundColor: "#E2DFDF" }}>
          <img className="gymSvg" src={gym1} alt="test" />

          <p className="blueWaveText">
            <h2>Pardon Our Dust</h2>
            While are remaining open to our members 24/7, we are currently
            making improvements for our December 5th, 2020 Grand Opening. We
            cant wait to show you all the our new improvments and rennovations
            to offer you the best neighborhood fitness experience.
          </p>
        </div>
        <div className="mockupContainer">
          <img src={mockup} className="mockupImage" />
        </div>

        <div className="contextElement" style={{ backgroundColor: "#CCF2F5" }}>
          <p className="blueWaveText">
            <h2>New Look, New Classes, New Support</h2>
            Town Center Fitness is Southwood's newest modern gym working in
            colloboration with MSK industry leaders JointStrong. The fitness
            center offers 24 hour access, top of the line equiptment, weekly
            classes to fit all scheules both virtual and in person as on site
            MSK and mobility coaching. Stop by, give us a call or send us a
            message and see how Town Center Fitness can help bring out the best
            in you.
          </p>
        </div>

        <div className="videoElement">
          <Player src={vid}>
            <LoadingSpinner />
          </Player>
        </div>

        <div className="contextElement" style={{ backgroundColor: "#DEEad7" }}>
          <p className="blueWaveText">
            <h2>We Would Love to Hear From You</h2>
            Our facility provides a full gym with weight machines, free weights,
            functional fitness equipment, spin classes and MSK coaching in the
            heart of Southwood. We practice current CDC guidelines for
            cleanileness and steralization ensuring our staff and guest stay
            healthy and safe. We love feedback to help deliver our guest and
            memebers the best possible experience. Feel free to contact us on
            any of our social media outlets or via the contact form below.
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
