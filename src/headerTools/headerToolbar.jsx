import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBong,faFileUpload } from '@fortawesome/free-solid-svg-icons';

class HeaderToolBar extends Component {

    constructor(props){
        super(props);

        this.onFileBTN = this.onFileBTN.bind(this);
    }

    render() {
        return <div >
            <div id="logo-bar"><FontAwesomeIcon icon={faBong}/>&nbsp;<span>React Sanbox</span></div>
            <div id="header-tools"><button onClick={this.onFileBTN}><FontAwesomeIcon icon={faFileUpload}/></button></div>
        </div>;
    }

    onFileBTN() {
        //show file manager
    }

}

export default HeaderToolBar;