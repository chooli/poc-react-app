import React from "react";
import ReactDOM from "react-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import HeaderToolBar from "./headerTools/headerToolbar.jsx";

library.add(faGhost);

const Index = () => {
    return <h4>This is the start of POC React App</h4>;
};

ReactDOM.render(<HeaderToolBar />, document.getElementById("header-tool"));
ReactDOM.render(<Index />, document.getElementById("root"));