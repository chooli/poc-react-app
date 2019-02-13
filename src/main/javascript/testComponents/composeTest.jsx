import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {faJsSquare} from "@fortawesome/free-brands-svg-icons";

const ComposeTest = (props) => {

    const a = 1, b = 2;

    console.log("::: chooli test here ", a);

    return <FontAwesomeIcon icon={faJsSquare} size="2x"/>

}

export default ComposeTest;