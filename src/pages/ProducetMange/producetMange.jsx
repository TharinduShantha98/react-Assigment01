import React, {Component} from "react";
import {styleSheet} from "./index";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {ValidatorForm} from "react-material-ui-form-validator";
import productService from "../../services/productService";
class ProductMange extends  Component{

    constructor(props) {
        super(props);

        this.state={
            position: [
                { label: 'electronic'},
                { label: 'toys' },
                { label: 'shoes' },

            ],


            formData:{

                title: '',
                price: '',
                description: '',
                image: '',
                category: ''


            },

            file:"",

        }



    }
    handleSubmit= async ()=>{

        let formData = this.state.formData;
        let response  = await productService.addProductService(formData);
        console.log(response);
        console.log(response.status);
        if(response.status === 200){
            alert("successfully added");

        }else{
            alert("not successfully added");

        }





    }



    handleChange = (e)=>{
        this.setState({file: URL.createObjectURL(e.target.files[0])})



    }

    render() {
        const {classes} = this.props;




        return(

            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >


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
                            onChange={(e)=>{
                                let formData  = this.state.formData;
                                formData.title = e.target.value;
                                this.setState(formData);
                            }}


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
                            onChange={(e, value) => {
                                console.log(value.label);
                                let formData  = this.state.formData;
                                formData.category = value.label;
                                this.setState(formData);



                            }}




                        />

                        <div className={classes. container_main1_div1_div1}>

                            <div className={classes. container_main1_div1_div1_img}
                                style={{backgroundColor:"#c1baba"}}
                            >
                                <img src={this.state.file}
                                style={{width: "100%",
                                        height:"100%",

                                }}
                                     onChange={()=>{
                                         let formData = this.state.formData;
                                         formData.image = this.state.file;
                                         this.setState(formData);

                                     }}



                                />
                            </div>

                            <input
                                id="downPayment"
                                label=""
                                type={'file'}
                                fullWidth
                                variant="outlined"
                                accept={"image/png,image/jpeg"}
                                size={"small"}
                                onChange={this.handleChange}
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
                            onChange={(e)=>{
                                let formData = this.state.formData;
                                formData.price = e.target.value;
                                this.setState(formData);



                            }}




                        />
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={2.4}
                            placeholder="description"
                            style={{width:"98%"}}
                            onChange={(e)=>{
                                let formData = this.state.formData;
                                formData.description =  e.target.value;
                                this.setState(formData);


                            }}

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
                        type="submit"

                        // onClick={()=>{
                        //     console.log(this.state.file);
                        //     console.log(this.state.formData.description);
                        //
                        //
                        //
                        // }}
                    >
                        Save
                    </Button>



                </div>


            </div>


            </ValidatorForm>


        )
    }


}


export default withStyles(styleSheet)(ProductMange)