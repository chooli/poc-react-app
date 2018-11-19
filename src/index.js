import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import HeaderToolBar from "./headerTools/headerToolbar.jsx";
import WrapperTest from "./testComponents/wrapperTest";
import ComposeTest from "./testComponents/ComposeTest";
import ApplicationContext from "./ApplicationContext.jsx";

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};


const Index = () => {

    return <div>
        <h4>Welcome to the studio of React world!</h4>

        <ApplicationContext.Provider value={themes}>
            <WrapperTest>
                <ComposeTest/>
            </WrapperTest>
        </ApplicationContext.Provider>

    </div>;
};

ReactDOM.render(<HeaderToolBar />, document.getElementById("header"));
ReactDOM.render(<Index />, document.getElementById("root"));