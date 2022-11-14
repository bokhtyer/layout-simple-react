import React from "react";
import {pageTitle} from "../helper/CommonFunctions";

const About = (props) => {
    pageTitle(props.pageTitle)
    return(
        <>This is About Page <i className="fa-solid fa-magnifying-glass"></i> <i className="bi bi-windows"></i></>
    )
}
export default About;