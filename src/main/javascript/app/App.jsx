import React from 'react';
import {Provider} from 'react-redux';
import store from './fundation/redux/App.redux-store';
import { BrowserRouter as Router, Link } from "react-router-dom";

import MainLayout from './fundation/layout/MainLayout'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/es/styles";

import ApplicationContext from './ApplicationContext'

const THEME = createMuiTheme({
    typography: {
        "fontFamily": "\"Nunito Sans\", \"Helvetica\", \"Arial\", sans-serif",
        "fontSize": 14,
        "fontWeight": 600
    }
});

const context = {};

const App = () => (
    <MuiThemeProvider theme={THEME}>
        <Router>
            <Provider store={store}>
                <ApplicationContext.Provider value={context}>
                    <MainLayout />
                </ApplicationContext.Provider>
            </Provider>
        </Router>
    </MuiThemeProvider>
);

export default App;
