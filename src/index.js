import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import HeaderToolBar from "./headerTools/headerToolbar.jsx";
import {ComposeTest} from "./testComponents/lodash";

const Index = () => {
    return <div>
        <h4>Welcome to the studio of React world!</h4>

        <ComposeTest/>

    </div>;
};

ReactDOM.render(<HeaderToolBar />, document.getElementById("header"));
ReactDOM.render(<Index />, document.getElementById("root"));