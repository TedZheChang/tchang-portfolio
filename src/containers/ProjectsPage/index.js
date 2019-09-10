import React, { Component } from "react";
import classNames from "classnames";
import "./styles.css";
import ProjectModal from "../../components/ProjectModal";
const ProjectsPage = () => {
  return (
    <div className={classNames("grid-content", "project-content")}>
      <ProjectModal
        title="Spell Intern"
        bkColor="#C58BE7"
        description="While at Spell I got a chance to work on machine learning infastructure. I primarily worked on their data pipeline as well as their web console."
      />
      <ProjectModal title="Twitch Match" bkColor="#6441a5" description={"Twitch match is a platform created to allow streamers to connect with one another in order to build larger followings based on the similarities of their audiences and content."} />
      <ProjectModal title="Maps" bkColor="#1EA362" description="Maps is a simple clone of google maps for the providence area. It's features include finding shortest paths based on traffic as well as searching for streets and addresses"/>
      <ProjectModal title="Applied Materials Intern" bkColor="#569CBE" />
      <ProjectModal title="Portfolio" bkColor="#00d8ff" />
    </div>
  );
};

export default ProjectsPage;
