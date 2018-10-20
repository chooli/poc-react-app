import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import HeaderToolBar from "./headerTools/headerToolbar.jsx";

const Index = () => {
    return <h4>This is the start of POC React App</h4>;
};

ReactDOM.render(<HeaderToolBar />, document.getElementById("header"));
ReactDOM.render(<Index />, document.getElementById("root"));