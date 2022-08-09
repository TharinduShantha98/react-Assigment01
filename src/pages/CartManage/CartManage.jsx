import React, {Component} from "react";
import {styleSheet} from "./index";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {ValidatorForm} from "react-material-ui-form-validator";
import productService from "../../services/productService";


class CartManage extends Component{
    constructor(props) {
        super(props);

        this.state={
            position1: [
                { label: '1'},
                { label: '2' },
                { label: '3' },
                { label: '4' },
                { label: '5' },

            ],

            position2: [
                { label: 'p1'},
                { label: 'p2' },
                { label: 'p3' },
                { label: 'p4' },
                { label: 'p5' },

            ],


            formData:{
                userId:"",
                date:"",
                products:[
                    {
                     productId:'',
                     quantity:''
                    },
                ]


            },
            productsArray:[],

            productsObject:{

                productId:'',
                quantity:'',

            }




        }
    }


    handleSubmit = async ()=>{
        let productsArray = this.state.productsArray;
        let formData = this.state.formData;
        formData.products =  productsArray;

        this.setState(formData);




        let data  =this.state.formData;


       let response = await productService.cartManage(data);


       if(response.status === 200){
           alert("successfully added");

       }else{
           alert("not successfully added");

       }
       console.log(response);

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
                            onChange={(e, value) => {
                                console.log(value.label);
                                let formData  = this.state.formData;
                                formData.userId = value.label;
                                this.setState(formData);



                            }}


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
                            onChange={(e, value) => {
                                console.log(value.label);
                                let productsObject  = this.state.productsObject;
                                productsObject.productId = value.label;
                                this.setState(productsObject);



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
                            onChange={(e)=>{
                                let formData  = this.state.formData;
                                formData.date = e.target.value;
                                this.setState(formData);

                            }}



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

                            onChange={(e)=>{
                                let productsObject  = this.state.productsObject;
                                productsObject.quantity = e.target.value;
                                this.setState(productsObject);


                               //array.splice(0,array.length);

                            }}


                        />

                    </div>
                </div>


                <div className={classes.container_main3}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{width:"20%",
                            marginLeft:"5%",
                            backgroundColor:"#30681e"
                        }}
                        onClick={()=>{
                            let array = [];
                            array = this.state.productsArray
                            array.push(this.state.productsObject);
                            this.setState({productsObject: array});

                        }}





                    >
                        Add to cart

                    </Button>

                </div>

                <div className={classes.container_main2}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{width:"20%",
                            marginLeft:"5%"
                        }}
                        onClick={()=>{
                            let array = [];
                            array = this.state.productsArray
                            array.push(this.state.productsObject);
                            this.setState({productsObject: array});

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
                        onClick={()=>{
                            console.log(this.state.formData);



                        }}


                    >
                        Save
                    </Button>



                </div>


            </div>
            </ValidatorForm>
        )
    }

}

export default withStyles (styleSheet)(CartManage)

