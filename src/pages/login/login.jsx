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

class Login extends  Component{
        constructor(props) {
            super(props);
        }






        render() {

            let {classes} = this.props;

          return(

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
                              //  autoComplete="email"
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
                              InputProps={{
                                  startAdornment: (
                                      <InputAdornment position="start">
                                          <LockIcon />
                                      </InputAdornment>
                                  ),
                              }}



                          />
                          <FormControlLabel
                              control={<Checkbox value="remember" color="primary" />}
                              label="Remember me"
                          />
                          <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              sx={{ mt: 3, mb: 2 }}



                          >
                            <Link to={"layout"}>
                                Log In
                            </Link>




                          </Button>

                      </Box>







                  </div>




              </div>



          )


        }


}

export default withStyles (styleSheet)(Login)