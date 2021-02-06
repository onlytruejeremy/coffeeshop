import React from "react";
import Layout from "../Layout/Layout";
import Profile from "../../assets/profile.PNG";
import "./About.css";

const About = (props) => {
  return (
    <Layout>
      <div className="about__container">
        <div className="about__inner">
          <div className="about__paragraph">
            <div
              className="about__inner__img"
              style={{ backgroundImage: `url(${Profile})` }}
            ></div>
            <p className="name">Jeremy Barber</p>
            <p>
              Welcome to BreakTimeCoffee. I founded BreakTimeCoffee with one
              goal, bringing people together. In ancient times coffee houses
              were a place where rich, poor, and everyone in between, would come
              together and have discussions about what was happening in their
              lives and the world. We have brought that back. Come on down and
              share a pleasant experience with our other patrons.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
