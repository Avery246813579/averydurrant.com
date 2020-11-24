import React, {Component} from "react";
import Block from "../components/block/block";
import {AppWrapper} from "./app-layout.style";

class AppLayout extends Component {
    render() {
        return (
            <AppWrapper>
                Hey, I'm Avery. I like to build things.

                <h1>
                    Projects
                </h1>

                <div>
                    Drip
                </div>

                <div>
                    Drip Drinks
                </div>

                <div>
                    Cork Drinks
                </div>

                <div>
                    Instact
                </div>

                <div>
                    Commservus
                </div>

                <div>
                    Rainbow Chains

                    <div>
                        Open Source
                    </div>
                </div>

                <div>
                    Stripe Terminal

                    <div>
                        Open Source
                    </div>
                </div>

                <div>
                    Hey Deltek
                </div>

                <div>
                    VantagePoint
                </div>

                <h1>
                    Jobs
                </h1>

                <div>
                    PaySplit

                    <div>
                        Advisor
                    </div>
                </div>

                <div>
                    Frostbyte Technologies Inc

                    <div>
                        Co-founder
                    </div>
                </div>

                <div>
                    Deltek Inc

                    <div>
                        Contract Software Engineer
                    </div>
                </div>

                <div>
                    Frostbyte LLC

                    <div>
                        Founder
                    </div>
                </div>

                <div>
                    Eye of Ender

                    <div>
                        Software Engineer
                    </div>
                </div>

                <Block/>
            </AppWrapper>
        );
    }
}

export default AppLayout;
