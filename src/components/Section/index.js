import React, { Component } from "react"
import "./styles.css"
import Expander from "../Expander"
import classNames from "classnames"
import {CSSTransition} from "react-transition-group"

class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
    }
    render() {
        const { children, title } = this.props
        const { expanded } = this.state
        const toggleExpand = () => {
            this.setState(prevState => ({
                expanded: !prevState.expanded
            }));
        }
        return (
            <div>
                <CSSTransition in={expanded} timeout={500} classNames="headerTransition">
                    <div className={classNames({
                        'sectionTitle': true,
                        'active': expanded,
                    })} onClick={toggleExpand}>{title}
                    </div>
                </CSSTransition>
                <Expander expanded={expanded}>
                    {children}
                </Expander>
            </div>
        )
    }
}
export default Section