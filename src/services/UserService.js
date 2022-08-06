import axios from "axios"



class UserService{

    searchUser =  async (data)=>{
        const promise = new Promise((resolve, reject) => {
            axios.post("https://fakestoreapi.com/auth/login",data)
                .then((res)=>{
                    return resolve(res);
                })
                .catch((err)=>{
                    return resolve(err);
                })


        })

        return await promise;


    }








}

export default new UserService();
