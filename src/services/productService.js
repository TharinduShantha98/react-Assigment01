import axios from "axios";

class ProductService{

    addProductService = async (data)=>{

        const promise = new Promise((resolve, reject) => {
            axios.post("https://fakestoreapi.com/products",data)
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err);

                })





        })






    }








}