import React, {Component} from "react"
import {GlobalStyle} from "./global.style";
import {setupReduxConnection} from "../../redux";

class Global extends Component {
    render() {
        let {darkMode} = this.props.hardware;

        return (
            <GlobalStyle darkMode={darkMode} />
        )
    }
}

export default setupReduxConnection(["hardware"])(Global);
