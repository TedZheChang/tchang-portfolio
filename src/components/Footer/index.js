import React, { Component } from "react"
import classNames from "classnames"
import "./styles.css"
const Footer = () => {

    return (
        <div className="tchang-footer">
            <div className="outside-links">
                <a target="_blank" href="https://www.linkedin.com/in/ted-zhe-chang" className={classNames("outside-link", "linkedin")}> </a>
                <a target="_blank" href="https://www.facebook.com/ted.chang.16" className={classNames("outside-link", "facebook")}> </a>
                <a target="_blank" href="https://github.com/TedChangBrown" className={classNames("outside-link", "github")}> </a>
            </div>
        </div >
    )
}

export default Footer