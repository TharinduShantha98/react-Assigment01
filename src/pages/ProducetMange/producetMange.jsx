import React, {Component} from "react";
import {styleSheet} from "./index";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
class ProductMange extends  Component{

    constructor(props) {
        super(props);

        this.state={
            position: [
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
                <Typography variant="h3">Product Manage</Typography>

                <div className={classes.container_main1} >



                    <div className={classes.container_main1_div1}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="Tittle"
                            label="tittle"
                            name="tittle"
                            //  autoComplete="email"
                            variant="outlined"
                            size={'small'}

                        />


                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"

                            options={this.state.position}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params}
                                                                label="Option"
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

                        <div className={classes. container_main1_div1_div1}>

                            <div className={classes. container_main1_div1_div1_img}
                                style={{backgroundColor:"#c1baba"}}
                            >
                                <img />
                            </div>

                            <TextField
                                id="downPayment"
                                label=""
                                type={'file'}
                                fullWidth
                                variant="outlined"
                                accept={"image/png,image/jpeg"}
                                size={"small"}
                                style={{marginTop:"1px",marginBottom:'8px'}}


                            />

                        </div>




                    </div>

                    <div className={classes.container_main1_div2}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="price"
                            label="price"
                            name="price"
                            //  autoComplete="email"
                            variant="outlined"
                            size={'small'}

                        />
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={2.4}
                            placeholder="description"
                            style={{width:"98%"}}
                        />


                        <div className={classes. container_main1_div1_div1}>

                        </div>



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


export default withStyles(styleSheet)(ProductMange)