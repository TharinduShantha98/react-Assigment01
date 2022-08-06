import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./index";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import UserService from "../../services/UserService";
import jwt_decode from "jwt-decode";


class Login extends  Component{
    constructor(props) {
        super(props);

        this.state = {


            user:{
                userName:"",
                password:"",

            },




        }




    }



    // handleChange = (event) => {
    //     const {user} = this.state.user
    //     user[event.target.name] = event.target.value;
    //     this.setState({user})
    //
    //
    // }




    handleSubmit =  async  ()=>{


    }



    searchUser = async ()=>{
        console.log(this.state.user.userName)
        console.log(this.state.user.password)
        const loginForm  =  this.state.user;


        const response  = await UserService.searchUser(loginForm)
        console.log(response);



    }





        render() {

            let {classes} = this.props;

          return(

              <ValidatorForm
                  ref="form"
                  onSubmit={this.handleSubmit}
                  onError={errors => console.log(errors)}
              >

              <div className={classes.container}>
                  <div className={classes.container_div1}>
                      <Box>
                          <TextField
                              margin="normal"
                              required
                              fullWidth
                              id="userName"
                              label="user Name"
                              name="userName"
                              onChange={(e)=>{
                                  const userName  =  e.target.value;
                                  let user  =  this.state.user;
                                  user.userName = userName;
                                  this.setState(user);
                              }

                              }
                              variant="outlined"


                              InputProps={{
                                  startAdornment: (
                                      <InputAdornment position="start">
                                         <AccountCircleIcon />
                                      </InputAdornment>
                                  ),
                              }}


                              size={'small'}
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
                              onChange={(e)=>{
                                  const password  =  e.target.value;
                                  let user  =  this.state.user;
                                  user.password = password;
                                  this.setState(user);
                              }

                              }
                              InputProps={{
                                  startAdornment: (
                                      <InputAdornment position="start">
                                          <LockIcon />
                                      </InputAdornment>
                                  ),
                              }}

                              size={"small"}



                          />
                          <FormControlLabel
                              control={<Checkbox value="remember" color="primary" />}
                              label="Remember me"
                          />
                          <Button
                             // type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              sx={{ mt: 3, mb: 2 }}
                              onClick={
                                 this.searchUser
                              }




                          >
                          {/*<Link to={"layout"}>*/}
                                Log In
                            {/*</Link>*/}




                          </Button>

                      </Box>







                  </div>




              </div>


              </ValidatorForm>
          )


        }


}

export default withStyles (styleSheet)(Login)