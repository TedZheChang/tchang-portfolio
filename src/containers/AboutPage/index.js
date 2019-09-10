import React, { Component } from "react";
import classNames from "classnames"
import "./styles.css";
const AboutPage = () => {
  return (
    <div className={classNames("grid-content","about-content")}>
      <h2 className="title"> About Me </h2>
      <div className="introduction">
        <p>
          Hi! My name is Ted. I'm currently a junior at Brown University
          studying computer science. My studies primarily revolve around
          computer systems and data science. I also enjoy learning about
          behavioural psychology as well as psychological disorders.
        </p>
        <p>
          I'm very interested in data pipelining
          and management, more specifically the optimization of computer systems
          and networks for the collection and storage of big data.
        </p>
        <p>
          Outside of my studies I enjoy relaxing as home and spending time with
          my friends and significant other. Otherwise you'll find me in the gym
          working off said relaxation ;)
        </p>
      </div>
      <img src={require("../../static/me.jpeg")} className="portrait" />
    </div>
  );
};

export default AboutPage;
