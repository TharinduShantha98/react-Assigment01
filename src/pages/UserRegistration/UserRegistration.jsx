import React, {Component} from "react";
import {styleSheet} from "./index";
import withStyles from "@material-ui/core/styles/withStyles";

class UserRegistration extends Component{

    constructor(props) {
        super(props);

    }


    render() {

        let {classes} = this.props



        return(
            <div className={classes.container}>



            </div>



        )
    }


}

export default withStyles(styleSheet)(UserRegistration)