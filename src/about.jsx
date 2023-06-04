import React from "react";
import Navbar from './Navbar'
import {Link} from "react-router-dom"
function About(){
    return(
        <div>
            <Navbar/>
            <div>About</div>
            <Link to="/display">Go to Form</Link>
            {" "}
        </div>
    )
}
export default About;