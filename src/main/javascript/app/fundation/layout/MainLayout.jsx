import React from "react";
import {compose} from "react-apollo";
import {withStyles, Grid, Paper, Typography, Button} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

let styles = theme => ({
    topBar: {
        position: "absolute",
        left: "0%",
        right: "0%",
        top: "0%",
        bottom: "94.22%",
        background: "#3B3D40",
        color: "#fff"
    },
    topBarText: {
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        color: "#FFFFFF"
    },
    topBarButton: {
        position: "absolute",
        right: "1.67%",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "20px",
        fontSize: "14px",
        textAlign: "right",
        color: "#fff"
    },
    mainPanel: {
        position: "absolute",
        width: "817px",
        height: "84%",
        left: "22px",
        top: "94px"
    },
    mainText: {
        position: "absolute",
        width: "300px",
        height: "23px",
        left: "32px",
        top: "32px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "20px",
        fontSize: "16px",
        color: "#373C42"
    },
    viewerPanel: {
        position: "absolute",
        width: "519px",
        height: "84%",
        left: "857px",
        top: "94px",
        background: "#1F262A",
        boxShadow: "0px 3px 2px rgba(54, 63, 69, 0.2), 0px 1px 8px rgba(54, 63, 69, 0.08)",
        borderRadius: "3px"
    },
    viewerText: {
        position: "absolute",
        width: "114px",
        left: "24px",
        top: "24px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "20px",
        fontSize: "14px",
        color: "#fff"
    }
});

const login = () => {
    window.location = "/login";
}

const MainLayout = ({classes, topBarProps, children}) => (
    <Grid container spacing={24}>

        <AppBar position="static">
            <Toolbar className={classes.topBar}>
                <Typography className={classes.topBarText}>
                    Foundation React App
                </Typography>
                <Button className={classes.topBarButton} onClick={login}>Login</Button>
            </Toolbar>
        </AppBar>

        {/* SDL Definition Components*/}
        <Grid item xs={12} sm={7}>
            <Paper className={classes.mainPanel}>
                <Grid item>
                    <Typography className={classes.mainText}>
                        Right Area
                    </Typography>
                </Grid>
                <Grid item>
                    {/*<ToolsSteps children={children}/>*/}
                </Grid>
            </Paper>
        </Grid>

        {/* SDL Viewer Component*/}
        <Grid item xs={12} sm={5}>
            <Paper className={classes.viewerPanel}>
                <Typography className={classes.viewerText}>
                    Left Area
                </Typography>
            </Paper>
        </Grid>

    </Grid>
);

export default compose(
    withStyles(styles)
)(MainLayout);
