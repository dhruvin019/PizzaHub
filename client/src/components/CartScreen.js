import React from "react";
// import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartActions";

import { checkoutHandler } from "../actions/paymentAction"; 


const CartScreen = () => {
    const cartState = useSelector((state) => state.cartReducer);

    const cartItems = cartState.cartItems;

    // const cartItems = localStorage.getItem("cartItems")
    // ? JSON.parse(localStorage.getItem("cartItems"))
    // : null;

    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
    const handleCheckout = () => {
        dispatch(checkoutHandler(subTotal)); 
    };


    // const checkoutHandler = async (subTotal) => {

    //   try{

    //     const {data:{order}} =await axios.post("/api/payment/checkout",{subTotal});
       

    //     const {data:{key}} =await axios.get("/api/payment/getkey");
    //     // console.log({order});

    //     const options = {
    //       key, // Enter the Key ID generated from the Dashboard
    //       amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //       currency: "INR",
    //       name: "Mr_Virpara",
    //       description: "Test Transaction",
    //       // image: "https://example.com/your_logo",
    //       order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
    //       callback_url:"http://localhost:3000/api/payment/paymentverification",
          

    //       prefill: {
    //           "name": "Gaurav Kumar",
    //           "email": "gaurav.kumar@example.com",
    //           "contact": "9999999999"
    //       },
    //       notes: {
    //           "address": "Razorpay Corporate Office"
    //       },
    //       theme: {
    //           "color": "#3399cc"
    //       }
    //   };

    //   const  razor = new window.Razorpay(options);
    //   razor.open();

    //   }
    //   catch(err){
    //     console.log(err);
    //   }

    // }


    return (
<Container>
        <Row>
          <Col md={6}>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((item,index) => (
                <React.Fragment key={index}>
                  <Col md={7}>
                    <h5>
                      {item.name} [{item.varient}]
                    </h5>
                    <h6>
                      {" "}
                      Price : {item.quantity} X {item.prices[0][item.varient]} ={" "}
                      {item.price}
                    </h6>

                    <h6>
                      Quantity :&nbsp;
                      <FaMinusCircle
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      />{" "}
                      &nbsp;
                      {item.quantity} &nbsp;
                      
                      <FaPlusCircle
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: "80px", height: "80px" }}
                    />
                    <FaTrash
                      className="text-danger"
                      style={{ cursor: "pointer", marginLeft: "20px" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    />
                  </Col>
                  <hr />
                  </React.Fragment>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Payment Info</h1>
            <h4>Sub Total </h4>
            <h4>RS : {subTotal} /-</h4>
            
            {/* <Checkout subTotal={subTotal}/> */}
            <Button onClick={handleCheckout}>Pay Now</Button>
          </Col>
        </Row>
      </Container>
    )
}
export default CartScreen