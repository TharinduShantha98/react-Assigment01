import React, {Component} from "react";
import {styleSheet} from "./index";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
import Box from "@material-ui/core/Box";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import {ValidatorForm} from "react-material-ui-form-validator";
import UserService from "../../services/UserService";


class UserRegistration extends Component{

    constructor(props) {
        super(props);



        this.state= {

            user:{
                email:'',
                username:'',
                password:'',
                name:{
                    firstname:'',
                    lastname:''
                },
                address:{
                    city:'',
                    street:'',
                    number:'',
                    zipcode:'',
                    geolocation:{
                        lat:'',
                        long:''
                    }
                },
                phone:''
            },






            data: [],
        }

    }




    handleSubmit = async ()=>{

        let formData  = this.state.user;
        let response  = await UserService.addNewUser(formData);

        console.log(response);

        if(response.status === 200 ){
            alert("successfully added");

        }else{
            alert("not successfully added ")
        }


    }

    clearTextFiled = ()=>{





    }






    render() {

        let {classes} = this.props





            return(
                <div className={classes.container}>


                    <ValidatorForm
                        ref="form"
                        onSubmit={this.handleSubmit}
                        onError={errors => console.log(errors)}
                    >



                    <div className={classes.container_div}>

                        <div className={classes.container_div_div1}>

                            <div className={classes.container_div_div1_div1}>
                                {/*<DriveEtaIcon color={"success"}  className={classes.container_div1_icon}/>*/}
                                <Typography component="h1" variant="h5">
                                   User Registration
                                </Typography>
                            </div>

                            <div className={classes.container_div_div1_div2}>
                                <div className={classes.container_div_div1_div2_div1}>


                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="FirstName"
                                        label="FirstName"
                                        name="FirstName"
                                        //  autoComplete="email"
                                        variant="outlined"
                                        size={'small'}
                                        onChange={(e)=>{
                                            let user  = this.state.user;
                                            user.name.firstname = e.target.value;
                                            this.setState(user)



                                        }}


                                    >

                                    </TextField>

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        variant="outlined"
                                        autoFocus
                                        size={"small"}
                                        onChange={(e)=>{
                                            let user  = this.state.user;
                                            user.email= e.target.value;
                                            this.setState(user)



                                        }}


                                    />


                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        variant="outlined"
                                        autoComplete="current-password"
                                        // InputProps={{
                                        //     startAdornment: (
                                        //         <InputAdornment position="start">
                                        //             <LockIcon />
                                        //         </InputAdornment>
                                        //     ),
                                        // }}

                                        size={"small"}

                                        onChange={(e)=>{
                                            let user  = this.state.user;
                                            user.password = e.target.value;
                                            this.setState(user)



                                        }}



                                    />

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="street"
                                        label="street"
                                        name="street"
                                        //  autoComplete="email"
                                        variant="outlined"
                                        size={'small'}

                                        onChange={(e)=>{
                                            let user  = this.state.user;
                                            user.address.street = e.target.value;
                                            this.setState(user)



                                        }}


                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="ZipCode"
                                        label="Zip code"
                                        name="ZipCode"
                                        variant="outlined"
                                        size={'small'}


                                        onChange={(e)=>{
                                            let user  = this.state.user;
                                            user.address.zipcode = e.target.value;
                                            this.setState(user)



                                        }}


                                    />

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="longValue"
                                        label="longValue"
                                        name="longValue"
                                        variant="outlined"
                                        size={'small'}


                                        onChange={(e)=>{
                                            let user  = this.state.user;
                                            user.address.geolocation.long = e.target.value;
                                            this.setState(user)



                                        }}


                                    />

                                </div>
                                <div  className={classes.container_div_div1_div2_div2}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="lastName"
                                        name="lastName"
                                        //  autoComplete="email"
                                        variant="outlined"
                                        size={'small'}

                                        onChange={(e)=>{
                                            let user  = this.state.user;
                                            user.name.lastname = e.target.value;
                                            this.setState(user)



                                        }}

                                    />

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="userName"
                                        label="userName"
                                        name="userName"
                                        //  autoComplete="email"
                                        variant="outlined"
                                        size={'small'}


                                        onChange={(e)=>{
                                            let user  = this.state.user;
                                            user.username = e.target.value;
                                            this.setState(user)



                                        }}

                                    />


                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="city"
                                        label="city"
                                        name="city"
                                        // autoComplete="carType"
                                        variant="outlined"
                                        size={'small'}

                                        onChange={(e)=>{
                                            let user  = this.state.user;
                                            user.address.city = e.target.value;
                                            this.setState(user)



                                        }}




                                    />


                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="streetNo"
                                        label="streetNo"
                                        name="streetNo"
                                        //  autoComplete="email"
                                        variant="outlined"
                                        size={'small'}


                                        onChange={(e)=>{
                                            let user  = this.state.user;
                                            user.address.number = e.target.value;
                                            this.setState(user)



                                        }}

                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="lastValue"
                                        label="lastValue"
                                        name="lastValue"
                                        //  autoComplete="email"
                                        variant="outlined"

                                        size={'small'}

                                        onChange={(e)=>{
                                            let user  = this.state.user;
                                            user.address.geolocation.lat = e.target.value;
                                            this.setState(user)



                                        }}

                                    />


                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="mobile No"
                                        label="mobile No"
                                        name="mobile No"
                                        //  autoComplete="email"
                                        variant="outlined"

                                        size={'small'}
                                        onChange={(e)=>{
                                            let user  = this.state.user;
                                            user.phone = e.target.value;
                                            this.setState(user)



                                        }}


                                    />


                                </div>


                            </div>

                            <div className={classes.container_div_div1_div3}>
                                <div className={classes.container_div_div1_div4}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        style={{marginLeft:"5px",
                                        width: "20%",
                                        }}
                                    >
                                        Clear
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        color="primary"
                                        style={{marginLeft:"5px",
                                            width: "20%",
                                        }}
                                    >
                                        Save
                                    </Button>
                                </div>






                            </div>


                        </div>



                    </div>
                    </ValidatorForm>


                    <div className={classes.container_div2}>

                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead style={{backgroundColor:"#e26868",

                                }}>
                                    <TableRow >
                                        <TableCell style={{fontWeight:"bold",
                                                        width:"50% !important",
                                           // backgroundColor:"#f3e8e8"

                                        }}
                                                   align="right"

                                        >FirstName</TableCell>
                                        <TableCell style={{fontWeight:"bold"}} align="right">LastName</TableCell>
                                        <TableCell style={{fontWeight:"bold"}} align="right">Email address</TableCell>
                                        <TableCell style={{fontWeight:"bold"}} align="right">userName</TableCell>
                                        <TableCell style={{fontWeight:"bold"}} align="right">password</TableCell>
                                        <TableCell style={{fontWeight:"bold"}} align="right">city</TableCell>
                                        <TableCell style={{fontWeight:"bold"}} align="right">street</TableCell>
                                        <TableCell style={{fontWeight:"bold"}} align="right">street No</TableCell>
                                        <TableCell style={{fontWeight:"bold"}} align="right">ZipCode</TableCell>
                                        <TableCell style={{fontWeight:"bold"}} align="right">lastValue</TableCell>
                                        <TableCell style={{fontWeight:"bold"}} align="right">LongValue</TableCell>
                                        <TableCell style={{fontWeight:"bold"}} align="right">password</TableCell>
                                        <TableCell style={{fontWeight:"bold"}} align="right">Update</TableCell>
                                        <TableCell style={{fontWeight:"bold"}} align="right">Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.data.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            {/*<TableCell align="right">{row.calories}</TableCell>*/}
                                            {/*<TableCell align="right">{row.fat}</TableCell>*/}
                                            {/*<TableCell align="right">{row.carbs}</TableCell>*/}
                                            {/*<TableCell align="right">{row.protein}</TableCell>*/}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>


                    </div>


                </div>



            )
    }


}

export default withStyles(styleSheet)(UserRegistration)