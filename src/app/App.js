import React from "react";
import{Routes, Route} from "react-router-dom";
import Login from "../pages/login/login";
import UserRegistration from "../pages/UserRegistration/UserRegistration";
import ProductMange from "../pages/ProducetMange/producetMange";
import CartManage from "../pages/CartManage/CartManage";
import DashBord from "../pages/DashBord/DashBord";
import NavBar from "../pages/NavidationBar/Nav";
import Layout from "../pages/Layout/Layout";



function App() {
  return (
    // <div className="App">
    //
    // </div>

      // <Login/>
    //  <UserRegistration/>
    //  <ProductMange/>
    // <CartManage/>
    //  <DashBord/>
    //  <NavBar/>




    <Routes>

        <Route path={"/"} element={<Login/>}>

        </Route>

        <Route path={"layout"}  element={<Layout/>} >
            <Route index element={<DashBord/>}/>
            <Route path={"userRegistration"} element={<UserRegistration/>}/>
            <Route path={"productManage"} element={<ProductMange/>}/>
            <Route path={"cartMange"} element={<CartManage/>}/>
            <Route path={"dashBord"} element={<DashBord/>}/>


        </Route>




    </Routes>





  );
}

export default App;
