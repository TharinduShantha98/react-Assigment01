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
import history  from "../../history"


class Login extends  Component{
    constructor(props) {
        super(props);

        this.state = {


            user:{
                username:"",
                password:"",

            },


            location:"#",

        }

    }




    handleSubmit =  async  ()=>{


    }



    searchUser1 = async ()=>{
        console.log(this.state.user.username)
        console.log(this.state.user.password)
        const loginForm  =  this.state.user;


        const response  = await UserService.searchUser(loginForm)

        const token = response.data.token;
        const  decoded = jwt_decode(token);
        console.log(decoded);



        if(decoded.user === this.state.user.username){
            console.log("Eka fatta");
            this.setState({location:"/layout"})
            localStorage.setItem("userName",decoded.user);
            history.push({
                pathname:"/layout"
            })

        }

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
                                  user.username = userName;
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
                                 this.searchUser1
                              }




                          >
                          <Link to={this.state.location}>
                                Log In
                            </Link>




                          </Button>


                          <Grid container>
                              <Grid item xs>
                                  <Link to={"#"} variant="body2">
                                      Forgot password?
                                  </Link>
                              </Grid>
                              <Grid item>
                                  <Link to={"userRegistration"} variant="body2">
                                      {"Don't have an account? Sign Up"}
                                  </Link>
                              </Grid>
                          </Grid>

                      </Box>







                  </div>




              </div>


              </ValidatorForm>
          )


        }


}

export default withStyles (styleSheet)(Login)