import React from "react";
import ReactDOM from "react-dom";
import styles from '../../../../resources/css/contentmanager.css';
import {Grid, Paper, Button} from '@material-ui/core';
import {contentReducer} from "./redux/reducer"

class SimpleContentManager extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log("chooli test here ", styles);

        return <Grid container spacing={0}>
            <Grid item sm={3} className={styles.sideBar}>navigation side bar</Grid>
            <Grid item sm={9} className={styles.mainArea}><Paper square>Main area</Paper></Grid>
        </Grid>
    }

}

const mapStatesToProps = (state) => {
    return {
        content: state.content
    }
}

const mapDispatcherToProps = {
    updateContent: contentReducer
}

export default SimpleContentManager;