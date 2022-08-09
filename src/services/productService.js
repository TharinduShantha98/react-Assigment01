import axios from "axios";

class productService{

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

        return await promise;






    }




    cartManage = async (data)=>{

        const  promise = new Promise((resolve, reject) => {
            axios.post("https://fakestoreapi.com/carts",data)
                .then((res)=>{
                    return resolve(res);
                })
                .catch((err)=>{
                    return resolve(err)
                })

        })
        return await promise;
    }



    getAllCarts = async ()=>{
        const  promise = new Promise((resolve, reject) => {
            axios.get("https://fakestoreapi.com/carts")
                .then((res)=>{
                    return resolve(res);
                })
                .catch((err)=>{
                    return resolve (err);
                })

        })


        return await promise;

    }













}

export default new productService();