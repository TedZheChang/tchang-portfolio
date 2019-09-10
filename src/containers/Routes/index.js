import React, { Component } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "./styles.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import AboutPage from "../AboutPage"
import ProjectsPage from "../ProjectsPage"
const Routes = () => {
    return (
        <Router basename="/">
            <Route render={({ location }) => (
                <div className="main">
                    <Header links={[{ name: "About", link: "/" }, { name: "Projects", link: "/projects" }]} />
                        <TransitionGroup>
                            <CSSTransition key={location.pathname} timeout={{ enter: 500, exit: 0, appear: 500 }}
                                classNames="fade">
                                <Switch>
                                    <Route exact path="/" component={AboutPage} />
                                    <Route path="/projects" component={ProjectsPage} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    <Footer />
                </div>)} />
        </Router>
    )
}

export default Routes