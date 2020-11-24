import React, {Component} from "react";
import {AppWrapper} from "./app-layout.style";
import {GlobalStyle} from "../assets/styles/global.style";
import {getStore} from "../redux";
import {updateTheme} from "../redux/hardware";

class AppLayout extends Component {
    componentDidMount() {
        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                getStore().dispatch(updateTheme(true));
            }

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
                getStore().dispatch(updateTheme(event.matches));
            });
        }
    }

    render() {
        return (
            <AppWrapper>
                <GlobalStyle/>

                {this.props.children}
            </AppWrapper>
        );
    }
}

export default AppLayout;
