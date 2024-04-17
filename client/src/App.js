// PS C:\Users\Virpara Dhruvin\.vscode\Backend\NodeJs\PizzaApp2\server> npm run dev

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Home from "./components/Home";
import Policy from "./components/Policy";
import Contact from "./components/ContactPage";
import NavBar from "./components/NavBar";
import CartScreen from "./components/CartScreen";
import Register from "./components/Register";
import Login from "./components/Login";
import Admin from "./components/Admin";
import AllUser from "./admin/AllUser";
import AllPizza from "./admin/AllPizza";
import AddPizza from "./admin/AddPizza";
import AllOrders from "./admin/AllOrders";
import OrderScreen from "./components/OrderScreen";
import UpdatePizza from "./components/UpdatePizza";
import PaymentSuccess from "./components/paymentsuccess";



function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/orders" element={<OrderScreen />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess/>} />


        <Route path="/admin" element={<Admin/>}>
            <Route path="/admin" element={<AllUser />} />
            <Route path="/admin/allpizza" element={<AllPizza />} />
            <Route path="/admin/addpizza" element={<AddPizza />} />
            <Route path="/admin/allorders" element={<AllOrders />} />
            <Route path="/admin/updatepizza/:id" element={<UpdatePizza />} />
        </Route>
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
