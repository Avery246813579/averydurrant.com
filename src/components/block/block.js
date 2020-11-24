import React, {Component} from "react"
import {BlockWrapper} from "./block.style";

class Block extends Component {
    state = {expanded: false}

    render() {
        let {expanded} = this.state;

        return (
            <BlockWrapper onClick={() => {
                this.setState({expanded: !expanded});
            }}>
                Hello

                {expanded ? (
                    <div>
                        HELLLO
                    </div>
                ) : <div/>}
            </BlockWrapper>
        )
    }
}

export default Block;
