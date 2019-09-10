import React, { Component } from "react"
import classNames from "classnames"
import { NavLink } from "react-router-dom"
import "./styles.css"
import file from "../../static/MyResume.pdf";

const Header = ({ links }) => {
    return (
        <div className="tchang-header">
            <div className={classNames("header-element", "tchang-title")}> Ted Chang </div>
            <div className={classNames("header-element", "tchang-navbar")}>
                {links.map((link, index) =>
                    <React.Fragment><NavLink styles={{ textDecoration: 'none' }} to={link.link} className="nav-action">{link.name}</NavLink> </React.Fragment>
                )}
                <a href={file} target="_blank" className="nav-action">Resume</a>
            </div>
        </div>
    )
}

export default Header