import React, {Component} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {styleSheet} from "./index";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

class  NavBar extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let {classes} = this.props;


        return(
                <div className={classes.container}>
                    <AppBar position="static" className={classes.container_AppBar}>
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>

                              <Button>DashBord</Button>
                              <Button>Product</Button>
                             <Button>Cart</Button>
                            <Typography variant="" className={classes.title}>
                            UserName
                            </Typography>






                        </Toolbar>
                    </AppBar>


                </div>


        )

    }


}

export default withStyles(styleSheet)(NavBar)