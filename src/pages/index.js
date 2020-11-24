import React, {Component} from "react"
import {Route, Switch} from "react-router-dom"
import LandingPage from "./landing/landing-page";

class Pages extends Component {
    render() {
        return (
            <Switch>
                <Route path="/*" component={LandingPage}/>
            </Switch>
        )
    }
}

export default Pages;
