import React, {Component} from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';

library.add(faGhost);

class HeaderToolBar extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <FontAwesomeIcon icon="ghost" />
                <span id="app-info">React Sanbox</span>
            </div>
        );
    }

}

export default HeaderToolBar;