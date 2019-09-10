import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import "./styles.css";
import Expander from "../Expander";

class ProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  render() {
    const {
      imageSource,
      title,
      githubLink,
      bkColor,
      textColor,
      description
    } = this.props;
    const { active } = this.state;
    const toggleModal = () => {
      this.setState(prevState => ({
        active: !prevState.active
      }));
    };
    return (
      <React.Fragment>
        <div className="base-card">
          <div
            className="base-card-title"
            style={{ "background-color": bkColor }}
            onClick={toggleModal}
          >
            {title}
          </div>
          <div className="base-card-text" onClick={toggleModal}>
            <p>{description}</p>
          </div>
          <div className="base-card-links">
            <div
              className={classNames("base-card-link-item", "base-card-toggle")}
              onClick={toggleModal}
            >
              <div className="base-card-toggle-img"></div>
              <div className="base-card-toggle-text"> Read More </div>
            </div>
            <div
              className={classNames("base-card-link-item", "base-card-code")}
            >
              <div className="base-card-code-img"></div>
              <div className="base-card-code-text">View Code</div>
            </div>
          </div>
        </div>
        <CSSTransition
          in={active}
          timeout={{ enter: 1200, exit: 300 }}
          classNames="toggle"
          unmountOnExit={true}
        >
          <div className="modal" onClick={toggleModal}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
              <div
                className="modal-title"
                style={{ "background-color": bkColor }}
              >
                <h3>{title}</h3>
              </div>
              <button className="exitButton" onClick={toggleModal}>
                x
              </button>
              <div className="modal-content-body">
                <div className="modalSidebar">
                  <div className="imageContainer">
                    <img
                      src={require("../../static/me.jpeg")}
                      className="modal-image"
                    />
                  </div>
                </div>
                <div className="modalText"></div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </React.Fragment>
    );
  }
}

export default ProjectModal;
