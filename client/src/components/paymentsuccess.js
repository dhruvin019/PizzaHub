
// import React from 'react'
// import { useSelector } from "react-redux";
// import { useSearchParams } from 'react-router-dom'
// import axios from 'axios';

// const PaymentSuccess = async () => {

//     const searchQuery = useSearchParams()[0];
//     const referenceNum1 = searchQuery.get('ref1');
//     const referenceNum2= searchQuery.get('ref2');

//     const cartState = useSelector((state) => state.cartReducer);
//     const cartItems = cartState.cartItems;

//     const cartItemsdetail;

//     cartItemsdetail.map((item)=>{
//       cartItemsdetail.push(item.name,item.price)
//     })
//     const res = await axios.post("/api/payment/paymentsave",{referenceNum1,referenceNum2,cartItemsdetail});
    
//   return (
//     <>
//     <h1>Payment Success</h1>
//     <h2>Reference No. : {referenceNum1}</h2>
//     </>
//   )
// }

// export default PaymentSuccess;


import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const payment_id = searchQuery.get('payment_id');
  const order_id = searchQuery.get('order_id');

  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  console.log(currentUser.email);
  let useremail = currentUser.email;

  useEffect(() => {
    const savePayment = async () => {
      const cartItemsdetail = cartItems.map((item) => ({
        name: item.name,
        price: item.price
      }));

      // console.log(cartItemsdetail);

      try {
        const res = await axios.post("https://pizzahub-backend.onrender.com/api/payment/paymentsave", {
          payment_id,
          order_id,
          cartItemsdetail,
          useremail
        });
        // console.log("Payment saved successfully:", res.data);
      } catch (error) {
        console.error("Error saving payment:", error);
      }
    };

    savePayment();
  }, [cartItems, payment_id, order_id,useremail]);

  return (
    <>
      <h1>Payment Success</h1>
      <h2>Reference No. : {payment_id}</h2>
    </>
  );
};

export default PaymentSuccess;


