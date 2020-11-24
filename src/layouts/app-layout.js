import React, {Component} from "react";
import Block from "../components/block/block";
import {AppWrapper} from "./app-layout.style";
import {GlobalStyle} from "../assets/styles/global.style";

class AppLayout extends Component {
    render() {
        return (
            <AppWrapper>
                <GlobalStyle />

                {this.props.children}
            </AppWrapper>
        );
    }
}

export default AppLayout;
