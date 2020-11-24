import React, {Component} from "react"
import {SectionRow, SectionWrapper} from "./section.style";
import {setupReduxConnection} from "../../redux";

class Section extends Component {
    render() {
        let {darkMode} = this.props.hardware;

        return (
            <SectionWrapper dark={darkMode}>
                <SectionRow>
                    {this.props.children}
                </SectionRow>
            </SectionWrapper>
        )
    }
}

export default setupReduxConnection(["hardware"])(Section);
