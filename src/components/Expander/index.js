import React from "react"
import { CSSTransition } from "react-transition-group"
import "./styles.css"

class Expander extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // do things with nextProps.someProp and prevState.cachedSomeProp
        return {
            expanded: nextProps.expanded,
            // ... other derived state properties
        };
    }

    render() {
        const { children } = this.props
        const { expanded } = this.state
        return (
            <CSSTransition in={expanded} timeout={500} classNames="dropdown" unmountOnExit={true} >
                <div className="random">
                    {children}
                </div>
            </CSSTransition>

        )
    }
}

export default Expander