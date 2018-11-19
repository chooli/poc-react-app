import React, {Component} from "react";
import ApplicationContext from "../ApplicationContext";

class WrapperTest extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return <div>
                wrapped content:
                <br/>
                <ApplicationContext.Consumer>
                    {
                        themes => this.props.children
                    }
                </ApplicationContext.Consumer>
            </div>
    }

}

export default WrapperTest;
