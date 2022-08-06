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
import history from "../../history";

class  NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:"",




        }



    }






    componentDidMount() {
        let item = localStorage.getItem("userName");
        this.setState({userName:item});


    }


    render() {
        let {classes} = this.props;


        return(
                <div className={classes.container}>
                    <AppBar position="static" className={classes.container_AppBar}>
                        <Toolbar style={{
                           // width:"100%",
                            display:"flex",
                            flexDirection:"row",
                          //  backgroundColor:"#2f55a1",
                            alignItems:"center",
                            justifyContent:"space-between",


                        }}>
                            <div style={{display:"flex",
                                width:"20%",
                                //height:"100%",
                          //      backgroundColor:"#a16a2f",

                            }}>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Link to={"dashBord"} style={{textDecoration:"none"}}>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        style={{
                                            width:"40px!important",


                                        }}

                                    >DashBord</Button>
                                </Link>


                            </div>

                            <div style={{display:"flex",
                                width:"20%",
                                flexDirection:"row",
                              //  backgroundColor:"#a16a2f",
                            }}>


                                <div style={{width:"50%"}}>
                                    <Link to={"productManage"} style={{textDecoration:"none"}}>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            fullWidth
                                        >Product</Button>
                                    </Link>
                                </div>


                                <div style={{width:"50%"}}>
                                    <Link to={"cartMange"} style={{textDecoration:"none"}}>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            fullWidth
                                        >Cart</Button>
                                    </Link>
                                </div>




                            </div>


                            <div style={{display:"flex",
                                width:"20%",
                           //     backgroundColor:"#a16a2f",
                            }}>
                                <Typography variant="" className={classes.title}>
                                    {this.state.userName}
                                </Typography>


                            </div>



                        </Toolbar>
                    </AppBar>


                </div>


        )

    }


}

export default withStyles(styleSheet)(NavBar)