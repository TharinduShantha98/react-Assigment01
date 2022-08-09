import React, {Component} from "react";
import {styleSheet} from "./index";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import productService from "../../services/productService";

class DashBord extends Component{
    constructor(props) {
        super(props);

        this.state = {
            cartCount:"",
            productCount:"",
            usersCount:"",


        }




    }


    cartProductCount = async ()=>{
        let allCarts = await  productService.getAllCarts();
        console.log(allCarts.data.length);

        this.setState({cartCount:allCarts.data.length})




    }


    componentDidMount() {
        this.cartProductCount().then(r => {

        })
    }


    render() {
        const {classes} = this.props;


        return(

            <div className={classes.container}>
                <div className={classes.container_main1}>
                    <div  className={classes.container_main1_div1} >
                        <Typography variant="h3">Product</Typography>
                        <Typography variant="h6">60</Typography>

                    </div>
                    <div className={classes.container_main1_div2}>
                        <Typography variant="h3">Cart</Typography>
                        <Typography variant="h6">{this.state.cartCount}</Typography>
                    </div>

                </div>

                <div className={classes.container_main2}>

                    <div className={classes.container_main1_div2}>
                        <Typography variant="h3">Users</Typography>
                        <Typography variant="h6">43</Typography>
                    </div>


                    <div className={classes.container_main1_div1}>

                            <Typography variant="h6">

                                <Link to={"userRegistration"}>
                                User Registration

                                </Link>
                            </Typography>




                    </div>

                </div>

            </div>



        )


    }


}

export  default withStyles(styleSheet)(DashBord)