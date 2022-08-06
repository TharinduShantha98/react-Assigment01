import React, {Component} from "react";
import {styleSheet} from "./index";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


class CartManage extends Component{
    constructor(props) {
        super(props);

        this.state={
            position1: [
                { label: 'AirPort'},
                { label: 'Trip' },
                { label: 'Wedding' },
                { label: 'self driving' },
                { label: 'add driver' },

            ],

            position2: [
                { label: 'AirPort'},
                { label: 'Trip' },
                { label: 'Wedding' },
                { label: 'self driving' },
                { label: 'add driver' },

            ],
        }
    }








    render() {
        const {classes} = this.props;



        return(
            <div className={classes.container}>
                <Typography variant="h3">Cart Manage</Typography>

                <div className={classes.container_main1} >
                    <div className={classes.container_main1_div1}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"

                            options={this.state.position1}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params}
                                                                label="userName"
                                                                variant="outlined"
                                                                size={"small"}

                            />}
                            getOptionLabel={
                                (option) => option.label
                            }

                            size="small"
                            //variant="outlined"


                            style={{ width: '100%' }}
                        />

                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"

                            options={this.state.position2}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params}
                                                                label="product tittle"
                                                                variant="outlined"
                                                                size={"small"}

                            />}
                            getOptionLabel={
                                (option) => option.label
                            }

                            size="small"
                            //variant="outlined"


                            style={{ width: '100%' ,
                                marginTop:"3%",

                            }}
                        />
                    </div>

                    <div className={classes.container_main1_div2}>
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            //  className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                        />


                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="qty"
                            label="qty"
                            name="qty"
                            //  autoComplete="email"
                            variant="outlined"
                            size={'small'}

                        />




                    </div>
                </div>

                <div className={classes.container_main2}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{width:"20%",
                            marginLeft:"5%"
                        }}
                    >
                        Clear
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{width:"20%",
                            marginLeft:"5%"
                        }}
                    >
                        Save
                    </Button>



                </div>


            </div>

        )
    }

}

export default withStyles (styleSheet)(CartManage)

